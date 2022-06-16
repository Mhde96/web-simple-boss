import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { SignupPagePropsType } from "./signup-type";
import "./signup-page-style.scss";

export const SignupPage = ({
  handleChange,
  values,
  errors,
  handleSubmit,
}: SignupPagePropsType) => {
  return (
    <div id="signup-page-style">
      <Text fs={"f2"} bold center>
        Boss Accounting
      </Text>
      <Text fs={"f2"} center>
        Reigester
      </Text>

      <br />

      <Input
        placeholder="Username"
        onChange={handleChange("username")}
        value={values.username}
        error={errors?.username}
      />

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

      <Input
        placeholder="Confirm Password"
        onChange={handleChange("confirm_password")}
        value={values.confirm_password}
        error={errors?.confirm_password}
      />
      <br />

      <Button onClick={handleSubmit}>Signup</Button>
    </div>
  );
};
