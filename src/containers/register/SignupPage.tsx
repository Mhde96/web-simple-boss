import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { SignupPagePropsType } from "./signup-type";
import "./signup-page-style.scss";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { Break } from "../../components/Break";
export const SignupPage = ({
  handleChange,
  values,
  errors,
  handleSubmit,
}: SignupPagePropsType) => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => navigate(endroutes.login);
  return (
    <motion.div {...PageTransitionProps} id="signup-page-style">
      <Text fs={"f2"} bold center>
        Boss Accounting
      </Text>
      <Text fs={"f2"} center>
        Reigester For Free
      </Text>

      <br />

      <Input
        placeholder="Name"
        onChange={handleChange("name")}
        value={values.name}
        error={errors?.name}
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
      <Break />
      <Break />
      <Button onClick={handleNavigateLogin}>Login</Button>
    </motion.div>
  );
};
