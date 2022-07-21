import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { LoginPagePropsType } from "./login-type";
import "./login-page-style.scss";
import { motion } from "framer-motion";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";
import { Break } from "../../components/Break";
export const LoginPage = ({
  handleChange,
  values,
  errors,
  handleSubmit,
  handleRegister,
}: LoginPagePropsType) => {
  return (
    <motion.div {...PageTransitionProps}>
      <br />
      <Text bold center fs={"f2"}>Boss Accounting</Text>
      <Text bold center fs={"f2"}>Hello Again!</Text>

      <br />

      <Input
        placeholder="Email"
        onChange={handleChange("email")}
        value={values.email}
        error={errors?.email}
      />
      <br />
      <Input
        placeholder="Password"
        onChange={handleChange("password")}
        value={values.password}
        error={errors?.password}
      />
      <br />
      <Button onClick={handleSubmit}>Login</Button>

      <Break />
      <Break />
      <Button onClick={handleRegister}>Register</Button>
    </motion.div>
  );
};
