import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { UserIcon } from "../../assets/icons/UserIcon";
import { Text } from "../../components/text/Text";
import { selectUser } from "../../redux/app/appSlice";
import { colors } from "../../styles/variables-styles";
import {
  openSettingsDialog,
  SettingsDialogWidget,
} from "../settings/SettingDialogWidget";
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
          <Navbar.Brand>Boss Platform</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav
              onClick={() => OpenProfileDialog(location, navigate)}
              className="ms-auto user pointer"
            >
              <UserIcon />
              <Text color={colors.onPrimary}>{user?.name}</Text>
            </Nav>

            <Nav
              onClick={() => openSettingsDialog(location, navigate)}
              className="user pointer"
              style={{padding:'0 10px'}}
            >
              <Text color={colors.onPrimary}>{"settings"}</Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
