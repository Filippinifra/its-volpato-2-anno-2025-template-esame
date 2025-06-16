import { ErrorMessage, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import { useUser } from "../context/userContext";
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
});

const TypographyError = ({ children }) => (
  <Typography color={"red"}>{children}</Typography>
);

export const Login = () => {
  const { onLogin } = useUser();
  const onSubmit = async (values) => {
    try {
      // const response = await axios.post("http://localhost:3002/signin", {
      //   email: values.email,
      //   password: values.password,
      // });
      // localStorage.setItem("user", JSON.stringify(response.data));

      const userMockup = {
        token: "123",
        idUser: "456",
        name: "Francesco",
        surname: "Filippini",
      };
      onLogin(userMockup);
    } catch (e) {
      console.log(`Errore: ${e}`);
    }
  };

  return (
    <div>
      <Typography weight={600} color={"black"}>
        LOGIN
      </Typography>
      <Spacer height={16} />
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => onSubmit(values)}
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
            <Spacer height={16} />
            <Button type="submit">Salva</Button>
            <Spacer height={16} />
            <Link to="/signup">Registrati</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
