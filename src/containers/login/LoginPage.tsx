import { Col, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { LoginPagePropsType } from "./login-constant";
import "./login-page-style.scss";
export const LoginPage = ({ handleChange, values }: LoginPagePropsType) => {
  const bootstrap = {
    xs: 10,
    xl: 6,
  };
  return (
    <div id="login-page-style">
      <div className="login-container">
        <Row className="justify-content-center">
          <Col {...bootstrap}>
            <Input
              placeholder="Email"
              onChange={handleChange("email")}
              value={values.email}
            />
            <Input
              placeholder="Password"
              onChange={handleChange("password")}
              value={values.password}
            />

            <Button />
          </Col>
        </Row>
      </div>
    </div>
  );
};
