import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./layout-style.scss";
import Lottie from "lottie-react";
import balance from "../../assets/lotties/balance.json";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";
import { Text } from "../../components/text/Text";

export const AuthLayout = () => {
  return (
    <div id="auth-layout-style">
      <Container className="auth-container">
        
          <Lottie
            style={{ width: 128, height: 128, alignSelf: "center" }}
            animationData={balance}
            loop={true}
          />
        

        <Outlet />
      </Container>
    </div>
  );
};
