import { Col, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { Text } from "../../components/text/Text";

export const ResetPasswordContainer = (props) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col xl={8} lg={10} xs={12}>
          <Text fs="f2" bold center>
            Boss Accounting
          </Text>

          <Text fs="f4" center breakSpaces>
            {`Enter New Password`}
          </Text>
          <br />
          <Input
            placeholder="new password"
            // onChange={props.handleChange("email")}
            // value={props.values.email}
            // error={props.errors?.email}
          />
          <br />
          {/* <Button onClick={props.handleSubmit}>Submit</Button> */}
        </Col>
      </Row>
    </div>
  );
};
