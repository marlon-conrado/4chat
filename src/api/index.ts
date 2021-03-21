import express from "express";
import cors from "cors";
import http from "http";
import socketIO from "socket.io";

import startDB from "./local/db/db";
import Chat from "./local/db/model/chat.model";
import Message from "./local/db/model/message.model";
import Member from "./local/db/model/member.model";
import { CognitoUserPool, CognitoUserAttribute } from "amazon-cognito-identity-js";
import bodyParser from "body-parser";

const userPool = new CognitoUserPool({
  UserPoolId: "us-west-1_AVL5fy9BE",
  ClientId: "70heeo5ssd0umel21duv8gksge"
});

const app = express();
const appHttp = http.createServer(app);
const io = socketIO(appHttp);


async function startServer() {
  await startDB();

  const members = await Member.find();
  console.log(members);
  const profileNameSpapce = io.of("/profile");

  app.use(
    cors({ origin: "*" })
  );

  app.use(bodyParser.json());


  app.get("/chats/:user_id", async (req, res) => {
    const userChats = await Chat.find({
      members: { $all: [req.params.user_id] }
    });

    const findMember = async (member) => {
      const memberFound = await Member.findById(member);

      return {
        id: memberFound._id,
        name: memberFound.name,
        secondName: memberFound.secondName,
        lastName: memberFound.lastName,
        secondLastName: memberFound.secondLastName
      };
    }

    const findMembers = async (chat) => {
      const members = await Promise.all(chat.members.map(findMember));
      return { id: chat._id, members }
    }

    const chats = await Promise.all(userChats.map(findMembers))

    return res.status(200).json(chats);
  });

  app.get("/chat/messages/:chat_id", async (req, res) => {
    const messages = await Message.find({ chatId: req.params.chat_id });

    return res.json(messages);
  });


  app.post("/user", async (req, res) => {


    const attributeList = [
      new CognitoUserAttribute(
        {
          Name: "email",
          Value: req.body.email
        }
      )
    ];

    userPool.signUp(req.body.email, req.body.password, attributeList, attributeList, async (error, result) => {
      if (error) {
        return res.status(400).json();
      }

      await new Member({
        name: req.body.name,
        lastName: req.body.lastName,
        cognitoId: result?.user.getUsername(),
        email: req.body.email
      }).save()

      return res.status(200).json();
    });
  })

  profileNameSpapce.on("connect", socket => {
    socket.on("/chat/message", async ({ user, msg }) => {
      await new Message({
        emisor: {
          memberId: user.id
        },
        message: msg.text,
        chatId: msg.chatId
      }).save();

      const messages = await Message.find({ chatId: msg.chatId });

      profileNameSpapce.emit(`/chat/message/${msg.chatId}`, messages);
    });
  });

  appHttp.listen(8080, () => {
    console.log("Running on port 8080");
  });
}

startServer();
