import React from "react";
import {
  TagRegisterForm,
  FormContainer,
  StyledInput,
  FormRow,
  StyledLabel,
  FormButton
} from "./Styles";

const RegisterForm = ({
  values,
  handleSubmit,
  handleChange,
  errors,
  touched,
  setFieldTouched,
  isSubmitted
}) => {
  const onChange = e => {
    setFieldTouched(e.target.name, true);
    return handleChange(e);
  };

  return (
    <TagRegisterForm onSubmit={handleSubmit}>
      <FormContainer>
        <div>
          <FormRow>
            <StyledLabel>Name:</StyledLabel>
            <StyledInput
              id="name"
              name="name"
              type="text"
              onChange={onChange}
              value={values.name}
              error={isSubmitted && touched.name && errors.name}
            />
          </FormRow>

          <FormRow>
            <StyledLabel>Last Name:</StyledLabel>
            <StyledInput
              id="lastName"
              name="lastName"
              type="text"
              onChange={onChange}
              value={values.lastName}
              error={isSubmitted && touched.lastName && errors.lastName}
            />
          </FormRow>

          <FormRow>
            <StyledLabel>Phone:</StyledLabel>
            <StyledInput
              id="phone"
              name="phone"
              type="text"
              onChange={onChange}
              value={values.phone}
              error={isSubmitted && touched.phone && errors.phone}
            />
          </FormRow>

          <FormRow>
            <StyledLabel>Email:</StyledLabel>
            <StyledInput
              id="email"
              name="email"
              type="text"
              onChange={onChange}
              value={values.email}
              error={isSubmitted && touched.email && errors.email}
            />
          </FormRow>

          <FormRow>
            <StyledLabel>Password:</StyledLabel>
            <StyledInput
              id="password"
              name="password"
              type="text"
              onChange={onChange}
              value={values.password}
              error={isSubmitted && touched.password && errors.password}
            />
          </FormRow>
        </div>
        <div>
          <FormButton type="submit">ENVIAR</FormButton>
        </div>
      </FormContainer>
    </TagRegisterForm>
  );
};

export default RegisterForm;
