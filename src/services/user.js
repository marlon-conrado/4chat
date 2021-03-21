import ApiUser from "../lib/api/user";

export const createUser = ({ name, lastName, email, phone, password }) =>
  new Promise((resolve, reject) => {
    new ApiUser()
      .createUser({ name, lastName, email, phone, password })
      .then(response => {
        console.log(response);
        return resolve(response.data);
      })
      .catch(reject);
  });