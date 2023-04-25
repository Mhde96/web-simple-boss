import { Button } from "react-bootstrap";
import "./account-card-styles.scss";
import {
  motion,
  MotionProps,
  useAnimationControls,
  VariantLabels,
} from "framer-motion";
import { AccountCardTypeProps } from "./account-card-type";
import { colors, useColors } from "../../../styles/variables-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import { TrashIcon } from "../../../assets/icons/TrashIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { CardAnimationProps } from "../CardAnimation";
import { useTranslation } from "react-i18next";
import { en } from "../../../helper/languages/en";

export const AccountCard = (props: AccountCardTypeProps) => {
  const { t } = useTranslation();
  const colors = useColors();
  const { name, operations, isHeader, index } = props;
  // const accountKey = account_key ? account_key + " - " : "";

  const AnimationProps = { ...CardAnimationProps({ index }) };

  return (
    <motion.div {...AnimationProps} id="account-card-styles">
      <div className="name" onClick={() => operations?.update()}>
        {name}
      </div>

      <div
        className="operations"
        style={{
          gap: "30px",
          display: "flex",

          alignItems: "center",
        }}
      >
        {operations?.update && (
          <>
            <div
              style={{ color: colors.text, cursor: "pointer" }}
              className="name"
              onClick={() => operations?.open()}
            >
              {t(en.statement)}
            </div>

            <EditIcon
              fill={colors.text}
              onClick={operations.update}
              className="icons"
              // color={colors.surface}
            />
          </>
        )}
        {operations?.delete && (
          <TrashIcon fill={colors.text} onClick={operations.delete} />
        )}
      </div>
    </motion.div>
  );
};
