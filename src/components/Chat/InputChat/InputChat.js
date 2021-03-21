import React from "react";
import { InputSearchContainer, InputSearch } from "../Contacts/Styles";

const InputChat = ({ onChange, onClick, value }) => {
  return (
    <form
      style={{
        width: "100%",
        height: "100%"
      }}
      onSubmit={e => {
        e.preventDefault();
        onClick();
      }}
    >
      <InputSearchContainer>
        <InputSearch
          type="text"
          onChange={e => onChange(e.target.value)}
          value={value}
          data-testid="input-chat"
        />
      </InputSearchContainer>
    </form>
  );
};

export default InputChat;
