import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./layout-style.scss";

import { useColors } from "../../styles/variables-styles";
import { BalanceLottie } from "../../assets/lotties/BalanceLottie";

export const AuthLayout = () => {
  const colors = useColors();

  return (
    <div id="auth-layout-style">
      <Container className="auth-container">
        <BalanceLottie />

        <Outlet />
      </Container>
    </div>
  );
};
