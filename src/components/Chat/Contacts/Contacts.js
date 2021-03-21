import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Avatar,
  OptionsContainer,
  OptionItem,
  OptionName,
  InputSearchContainer,
  InputSearch
} from "./Styles";

const Contacts = ({ options, onClick, onSearch }) => (
  <Container>
    <InputSearchContainer>
      <InputSearch
        data-testid="input-search"
        onChange={e => onSearch(e.target.value)}
      />
    </InputSearchContainer>
    <OptionsContainer>
      {options?.map(option => (
        <OptionItem
          key={option.id}
          selected={option.selected}
          onClick={() => onClick(option)}
          data-testid={`option-item-${option.id}`}
        >
          <Avatar />
          <div>
            <OptionName>{option.name}</OptionName>
          </div>
        </OptionItem>
      ))}
    </OptionsContainer>
  </Container>
);

Contacts.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default Contacts;
