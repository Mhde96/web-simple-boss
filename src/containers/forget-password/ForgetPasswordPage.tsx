import { Col, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { ForgetPasswordPagePropsType } from "./forget-password-type";

export const ForgetPasswordPage = (props: ForgetPasswordPagePropsType) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col xl={8} lg={10} xs={12}>
          <Text fs="f2" bold center>
            Boss Accounting
          </Text>
          <Text fs="f2" center>
            Did someone forget thier password ?{" "}
          </Text>
          <Text fs="f4" center breakSpaces>
            {`That’s ok...
just enter the email address you have used to 
register with us and we’ll send to you reset link`}
          </Text>
          <br />
          <Input
            placeholder="email"
            onChange={props.handleChange("email")}
            value={props.values.email}
            error={props.errors?.email}
          />
          <br />
          <Button onClick={props.handleSubmit}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
};
