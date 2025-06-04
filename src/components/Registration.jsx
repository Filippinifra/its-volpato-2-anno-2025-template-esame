import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { boolean, object, string } from "yup";
import { Button } from "./Button";
import { Spacer } from "./Spacer";
import { Typography } from "./Typography";

const schema = object({
  email: string().email("Email non valida").required("Obbligatorio"),
  password: string()
    .min(8, "Almeno 8 caratteri")
    .test(
      "password must have 1 special char",
      "Almeno 1 carattere speciale",
      (value) => /\W|_/g.test(value)
    )
    .required("Obbligatorio"),
  termsAccepted: boolean().isTrue("Devi accettare").required("Obbligatorio"),
  confirmPassword: string()
    .required("Obbligatorio")
    .test(
      "Test password and confirm password are the same",
      "Le password non coincidono",
      (confirmPassword, ctx) => confirmPassword === ctx.parent.password
    ),
});

const TypographyError = ({ children }) => (
  <Typography color={"red"}>{children}</Typography>
);

export const Registration = () => {
  return (
    <div>
      <Typography weight={600} color={"black"}>
        Registrazione
      </Typography>
      <Spacer height={16} />
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
          termsAccepted: false,
          confirmPassword: "",
        }}
        onSubmit={(values) => alert(values)}
      >
        {({ values, setFieldValue }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", width: 300 }}
          >
            <Typography>Email</Typography>
            <Spacer height={4} />
            <input
              value={values.email}
              onChange={(e) => {
                setFieldValue("email", e.currentTarget.value);
              }}
            />
            <Spacer height={4} />
            <ErrorMessage name="email" component={TypographyError} />
            <Spacer height={8} />
            <Typography>Password</Typography>
            <Spacer height={4} />
            <input
              value={values.password}
              onChange={(e) => {
                setFieldValue("password", e.currentTarget.value);
              }}
              type="password"
            />
            <Spacer height={4} />
            <ErrorMessage name="password" component={TypographyError} />
            <Spacer height={8} />
            <Typography>Conferma Password</Typography>
            <Spacer height={4} />
            <input
              value={values.confirmPassword}
              onChange={(e) => {
                setFieldValue("confirmPassword", e.currentTarget.value);
              }}
              type="password"
            />
            <Spacer height={4} />
            <ErrorMessage name="confirmPassword" component={TypographyError} />
            <Spacer height={8} />
            <Typography>Termini e condizioni</Typography>
            <Spacer height={4} />
            <div style={{ display: "flex" }}>
              <input
                checked={values.termsAccepted}
                onChange={(e) => {
                  setFieldValue("termsAccepted", !values.termsAccepted);
                }}
                type="checkbox"
              />
            </div>
            <Spacer height={4} />
            <ErrorMessage name="termsAccepted" component={TypographyError} />
            <Spacer height={16} />
            <Button type="submit">Salva</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
