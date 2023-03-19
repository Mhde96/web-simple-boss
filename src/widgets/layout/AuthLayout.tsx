import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./layout-style.scss";

import { useColors } from "../../styles/variables-styles";
import { BalanceLottie } from "../../assets/lotties/BalanceLottie";
import { Text } from "../../components/text/Text";
import { ContactContainer } from "../../containers/system/contact/ContactContainer";
import { useBreakpoints } from "../../hook/useBreakPoint";
export const AuthLayout = () => {
  return (
    <div id="auth-layout-style">
      <Container className="auth-container">
        <Row>
          <Col xs={{ order: 2, span: 12 }} md={6}>
            <Container className="welcome-container">
              <br />
              <Text border>Beta</Text>

              <Text fs="f1" maxWidth={450}>
                Back Office Support Software Accounting
              </Text>
              <br />
              <Text>* Free Program Forever</Text>
              <Text>* Unlimited Database</Text>
              <Text>* Easy to use</Text>
              <Text>* Only Support Journals</Text>

              <br />
              <Text fs="f2">About us</Text>
              <Text maxWidth={450}>
                we are team of developers and accountants , developing new
                modern system because we need to improve way to understand
                accounting for students
              </Text>

              <br />
              <Text fs="f2">Contact us</Text>
              <br />
              <ContactContainer />
            </Container>
          </Col>

          <Col xs={{ order: 1, span: 12 }} md={{ span: 6, order: 2 }}>
            <Container style={{ maxWidth: 500 }}>
              <BalanceLottie />
              <Outlet />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
