import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { HeaderWidget } from "./header/HeaderWidget";

export const Layout = () => {
  return (
    <Container>
      <HeaderWidget />
      <Outlet />
    </Container>
  );
};
