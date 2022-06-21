import { Col, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";
import { OtbPagePropsType } from "./otb-type";

export const OtbPage = (props:OtbPagePropsType) => {

  return (
    <div>
      <Row className="justify-content-center">
        <Col xl={8} lg={10} xs={12}>
          <Text fs="f2" bold center>
            Boss Accounting
          </Text>
          <Text fs="f2" center>
          Enter your OTP code{" "}
          </Text>
          <Text fs="f4" center breakSpaces>
            {`Enter the 4-digit code send to you at
m.mhde96@hotmail.com `}
          </Text>
          <br />
          <Text fs="f2" center>
          Did you enter the correct email ?{" "}
          </Text>
          <Input
            placeholder="code"
            onChange={props.handleChange("code")}
            value={props.values.code}
            error={props.errors?.code}
          />
          <br />
          <Button
            onClick={props.handleSubmit}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
};
