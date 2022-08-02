import { useMemo } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Offcanvas, Container } from "react-bootstrap";
import { Text } from "../../components/text/Text";
import "./settings-styles.scss";
import { motion } from "framer-motion";
import { DarkIcon } from "../../assets/icons/DarkIcon";
import { LightIcon } from "../../assets/icons/LightIcon";
import { AutoIcon } from "../../assets/icons/AutoIcon";
import { useDispatch, useSelector } from "react-redux";
import appSlice, {
  selectColorMode,
  selectLanguage,
} from "../../redux/app/appSlice";
import { LanguageIcon } from "../../assets/icons/LanguageIcon";
import { useColors } from "../../styles/variables-styles";
import { SettingsCardAnimation } from "../../components/animations/SettingsCardAnimation";
import { useTranslation } from "react-i18next";
import { en } from "../../helper/languages/en";

const link = "settings";

export const SettingsDialogWidget = () => {
  const { t } = useTranslation();
  const colors = useColors();
  const colorMode = useSelector(selectColorMode);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  // navigation
  const [searchParams] = useSearchParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const isOpen: any = useMemo(() => searchParams.get(link), [search]);
  const handleClose = () => navigate(-1);

  const handleDarkMode = () => dispatch(appSlice.actions.colorMode("dark"));
  const handleLightMode = () => dispatch(appSlice.actions.colorMode("light"));
  const handleAutoMode = () => dispatch(appSlice.actions.colorMode("auto"));

  const handleLanguage = (language: string) =>
    dispatch(appSlice.actions.language(language));

  const backgroundStyle = {
    backgroundColor: colors.surface,
    color: colors.text,
  };

  const cardStyle = {
    backgroundColor: colors.background,
    fill: colors.text,
  };
  return (
    <Modal show={isOpen} onHide={handleClose} placement="end">
      <div id="settings-styles" style={backgroundStyle}>
        <Modal.Header closeButton>
          <Text bold fs="f2">
            {t(en.settings)}
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Text fs="f2">{t(en.theme)}</Text>
          <br />
          <div className="bright-container">
            <motion.div
              {...SettingsCardAnimation(colorMode == "dark")}
              className="bright-button"
              style={cardStyle}
              onClick={handleDarkMode}
            >
              <DarkIcon />
              <div className="space" />
              <Text fs="f4">{t(en.dark)}</Text>
            </motion.div>
            <motion.div
              {...SettingsCardAnimation(colorMode == "light")}
              style={cardStyle}
              className="bright-button"
              onClick={handleLightMode}
            >
              <LightIcon />
              <Text fs="f4">{t(en.light)}</Text>
            </motion.div>
            <motion.div
              {...SettingsCardAnimation(colorMode == "auto")}
              style={cardStyle}
              className="bright-button"
              onClick={handleAutoMode}
            >
              <AutoIcon />
              <Text fs="f4">{t(en.auto)}</Text>
            </motion.div>
          </div>
          <hr />

          <div
            style={{ display: "flex", alignItems: "center", fill: colors.text }}
          >
            <Text fs="f2">{t(en.language)}</Text>
            <div className="p-1" />
            <LanguageIcon />
          </div>
          <br />
          <div className="bright-container">
            <motion.div
              {...SettingsCardAnimation(language == "en")}
              style={cardStyle}
              className="bright-button"
              onClick={() => handleLanguage("en")}
            >
              <Text fs="f4">English</Text>
            </motion.div>

            <motion.div
              {...SettingsCardAnimation(language == "ar")}
              style={cardStyle}
              className="bright-button"
              onClick={() => handleLanguage("ar")}
            >
              <Text fs="f4">عربي</Text>
            </motion.div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>{t(en.accept)}</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export const openSettingsDialog = (location: any, navigate: any) => {
  navigate(location.pathname + `?${link}=` + 1);
};
