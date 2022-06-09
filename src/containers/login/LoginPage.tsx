import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { LoginPagePropsType } from "./login-constant";
import "./login-page-style.scss";
export const LoginPage = ({ handleChange, values }: LoginPagePropsType) => {
  // let state = 1;

  const [state, setState] = useState(true);
  const [state1, setState1] = useState(1);
  useEffect(() => {}, []);
  useEffect(() => {});
  useEffect(() => {}, [state]);
  useEffect(() => {
    return () => {};
  }, []);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <Text>{state.toString()}</Text>
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

      <Button onClick={handleClick}>Login</Button>
    </>
  );
};
