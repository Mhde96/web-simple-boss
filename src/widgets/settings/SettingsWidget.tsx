import { useMemo } from "react";
import { Modal } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Offcanvas, Container } from "react-bootstrap";
import { Text } from "../../components/text/Text";
import "./settings-styles.scss";
import { motion } from "framer-motion";
import { DarkIcon } from "../../assets/icons/DarkIcon";
import { LightIcon } from "../../assets/icons/LightIcon";
import { AutoIcon } from "../../assets/icons/AutoIcon";
import { useDispatch } from "react-redux";
import appSlice from "../../redux/app/appSlice";
import { LanguageIcon } from "../../assets/icons/LanguageIcon";

const link = "settings";

export const SettingsDialogWidget = () => {
  const dispatch = useDispatch();

  // navigation
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const isOpen: any = useMemo(() => searchParams.get(link), [search]);
  const handleClose = () => navigate(-1);

  const handleDarkMode = () => dispatch(appSlice.actions.colorMode("dark"));
  const handleLightMode = () => dispatch(appSlice.actions.colorMode("light"));
  const handleAutoMode = () => dispatch(appSlice.actions.colorMode(undefined));

  const handleLanguage = (language: string) =>
    dispatch(appSlice.actions.language(language));

  return (
    <Offcanvas show={isOpen} onHide={handleClose} placement="end">
      <div id="settings-styles">
        <Text bold fs="f2">
          Settings
        </Text>
        <hr />

        <Text fs="f2">Theme</Text>
        <div className="bright-container">
          <motion.div className="bright-button" onClick={handleDarkMode}>
            <DarkIcon />
            <div className="space" />
            <Text fs="f4">Dark</Text>
          </motion.div>
          <motion.div className="bright-button" onClick={handleLightMode}>
            <LightIcon />
            <Text fs="f4">Light</Text>
          </motion.div>
          <motion.div className="bright-button" onClick={handleAutoMode}>
            <AutoIcon />
            <Text fs="f4">Auto</Text>
          </motion.div>
        </div>
        <hr />

        <div style={{ display: "flex", alignItems: "center" }}>
          <Text fs="f2">language</Text>
          <div className="p-1" />
          <LanguageIcon />
        </div>
        <div className="bright-container">
          <motion.div
            className="bright-button"
            onClick={() => handleLanguage("en")}
          >
            <Text fs="f4">English</Text>
          </motion.div>

          <motion.div
            className="bright-button"
            onClick={() => handleLanguage("ar")}
          >
            <Text fs="f4">عربي</Text>
          </motion.div>
        </div>
      </div>
    </Offcanvas>
  );
};

export const openSettingsDialog = (location: any, navigate: any) => {
  navigate(location.pathname + `?${link}=` + 1);
};
