import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./layout-style.scss"

export const AuthLayout = () => {
  return (
    <div id="auth-layout-style">
      <Container className="auth-container">
        <Outlet />
      </Container>
    </div>
  );
};
