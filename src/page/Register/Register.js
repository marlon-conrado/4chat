import React from "react";
import { useFormik } from "formik";
import RegisterForm from "../../components/Register/RegisterForm/RegisterForm";
import { useHistory } from "react-router-dom";
import { RegisterFormValidationSchema } from "./RegisterFormValidationSchema";
import { createUser } from "../../services/user";

const Register = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      password: ""
    },
    onSubmit: () => {
      createUser({
        ...formik.values
      }).then(() => {
        history.push("/");
      });
    },
    validationSchema: RegisterFormValidationSchema
  });

  const handleSubmit = e => {
    e.preventDefault();

    formik.handleSubmit();
  };

  const isSubmitted = formik.submitCount > 0;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <RegisterForm
        values={formik.values}
        handleChange={formik.handleChange}
        handleSubmit={handleSubmit}
        errors={formik.errors}
        touched={formik.touched}
        setFieldTouched={formik.setFieldTouched}
        isSubmitted={isSubmitted}
      />
    </div>
  );
};

export default Register;
