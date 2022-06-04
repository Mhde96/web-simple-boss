import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { LoginPagePropsType } from "./login-constant";
import "./login-page-style.scss";
export const LoginPage = ({ handleChange, values }: LoginPagePropsType) => {
  return (
    <>
      <Text>Boss System</Text>
      <br />

      <Input
        placeholder="Email"
        onChange={handleChange("email")}
        value={values.email}
      />
      <br />
      <Input
        placeholder="Password"
        onChange={handleChange("password")}
        value={values.password}
      />
      <br />

      <Button>Login</Button>
    </>
  );
};
