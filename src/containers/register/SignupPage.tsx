import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { SignupPagePropsType } from "./Signup-constant";
import "./Signup.scss";
export const SignupPage = ({
  handleChange,
  values,
  errors,
  handleSubmit,
}: SignupPagePropsType) => {
  return (
    <>
      <Text fs={"f2"}>Boss System</Text>

      <br />

      <Input
        placeholder="Username"
        onChange={handleChange("username")}
        value={values.username}
        error={errors?.username}
      />
      <br />
      
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

      <br />

      <Input
        placeholder="Confirm Password"
        onChange={handleChange("Confirm Password")}
        value={values.Confirm_Password}
        error={errors?.Confirm_Password}
      />
      <br />

      <Button onClick={handleSubmit}>Signup</Button>
    </>
  );
};
