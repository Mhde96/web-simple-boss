import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { UserIcon } from "../../assets/icons/UserIcon";
import { Text } from "../../components/text/Text";
import { selectUser } from "../../redux/app/appSlice";
import { colors } from "../../styles/variables-styles";
import {
  openSettingsDialog,
  SettingsDialogWidget,
} from "../settings/SettingsWidget";
import "./header-style.scss";
import { OpenProfileDialog, ProfileDialogWidget } from "./ProfileDialogWidget";
export const HeaderWidget = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div id="header-style">
      <ProfileDialogWidget />
      <SettingsDialogWidget />
      <Navbar expand="sm">
        <Container fluid>
          <Navbar.Brand className="logo">Boss Platform</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              onClick={() => OpenProfileDialog(location, navigate)}
              className="ms-auto user pointer"
            >
              <UserIcon />
              <Text color={colors.onSurface}>{user?.name}</Text>
            </Nav>

            <Nav
              onClick={() => openSettingsDialog(location, navigate)}
              className="user pointer"
              style={{ padding: "0 20px" }}
            >
              <SettingsIcon />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
