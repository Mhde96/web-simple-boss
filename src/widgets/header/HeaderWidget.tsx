import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import { Text } from "../../components/text/Text";
import { selectDb, selectUser } from "../../redux/app/appSlice";
import { useColors } from "../../styles/variables-styles";
import {
  CalculatorWidget,
  openCalculatorDialog,
} from "../../features/calculator/Calculator";
import {
  openSettingsDialog,
  SettingsDialogWidget,
} from "../settings/SettingsWidget";
import "./header-style.scss";
import { OpenProfileDialog, ProfileDialogWidget } from "./ProfileDialogWidget";
import { DbIcon } from "../../assets/icons/DbIcon";
import { endroutes } from "../../constant/endroutes";
import { SyncIcon } from "../../assets/icons/SyncIcon";

export const HeaderWidget = () => {
  const colors = useColors();
  const user = useSelector(selectUser);
  const db = useSelector(selectDb);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div id="header-style">
      <ProfileDialogWidget />
      <SettingsDialogWidget />
      <CalculatorWidget />
      <Navbar expand="sm">
        <Container fluid>
          <Navbar.Brand className="logo">Boss Platform</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              onClick={() => navigate(endroutes.home.path)}
              className="ms-auto user pointer"
            >
              <DbIcon />
              <div>
                <Text color={colors.onSurface}>{db?.name}</Text>
                <div>
                  <Text color={colors.onSurface}>{"last sync"}</Text>
                  <SyncIcon />
                </div>
              </div>
            </Nav>

            <Nav
              onClick={() => OpenProfileDialog(location, navigate)}
              className="ms-auto user pointer"
            >
              <UserIcon />
              <Text color={colors.onSurface}>{user?.name}</Text>
            </Nav>

            <Nav
              onClick={() => openCalculatorDialog(location, navigate)}
              className="user pointer"
              style={{ padding: "0 10px" }}
            >
              <img src="assets/images/calculator.png" width={24} height={24} />
            </Nav>

            <Nav
              onClick={() => openSettingsDialog(location, navigate)}
              className="user pointer"
              style={{ padding: "0 10px" }}
            >
              <SettingsIcon />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
