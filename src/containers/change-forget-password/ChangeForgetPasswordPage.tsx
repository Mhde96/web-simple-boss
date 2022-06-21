import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { ChangeForgetPasswordPagePropsType } from "./change-forget-password";
//import "./change-forget-password-page-style.scss";

export const ChangeForgetPasswordPage = ({
  handleChange,
  values,
  errors,
  handleSubmit,
}: ChangeForgetPasswordPagePropsType) => {
  return (
    <>
      <Text fs={"f2"}>Boss System</Text>
      <Text fs={"f4"}>Don't Worry</Text>
      
      <br />

      <Input
        placeholder="New Passwprd"
        onChange={handleChange("newpassword")}
        value={values.newpassword}
        error={errors?.newpassword}
      />
      <br />
      <Input
        placeholder="Confirm Password"
        onChange={handleChange("confirmpassword")}
        value={values.confirmpassword}
        error={errors?.confirmpassword}
      />
      <br />

      <Button onClick={handleSubmit}>Signup</Button>
    </>
  );
};
