import { Row, Col, Container, Stack } from "react-bootstrap";

import { Outlet, useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { HeaderWidget } from "../header/HeaderWidget";

import "./layout-style.scss";
import { NavLinkType } from "./layout-type";

export const PlatformLayout = () => {
  const navigate = useNavigate();
  const Navlink = ({ title, href }: NavLinkType) => (
    <div onClick={() => navigate(href)} className="platform-link">
      {title}
    </div>
  );

  // register 1
  return (
    <div id="platform-layout-style">
      <HeaderWidget />
      <Container className="platform-conainer" fluid>
        <Row>
          <Col className="sidebar-container" xs={2}>
            <Container>
              <Stack gap={2}>
                <Navlink
                  href={endroutes.journals.path}
                  title={endroutes.journals.title}
                />
                <Navlink
                  href={endroutes.accounts.path}
                  title={endroutes.accounts.title}
                />
              </Stack>
              </Container>
          </Col>

          <Col xs={10}>
            <div className="outlet-container">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
