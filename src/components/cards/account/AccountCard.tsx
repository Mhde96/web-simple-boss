import { Button } from "react-bootstrap";
import "./account-card-styles.scss";
import { motion, MotionProps, VariantLabels } from "framer-motion";
import { AccountCardTypeProps } from "./account-card-type";
import { colors } from "../../../styles/variables-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CardAnimationProps: MotionProps = {
  animate: {
    background: colors.surface,
  },
  whileHover: {
    background: colors.primary,
    color: colors.onPrimary,
    fontWeight: "bold",
    fontSize: "18px",
    // padding:'12px 4px'
  },
};

export const AccountCard = ({ name, operations }: AccountCardTypeProps) => {
  return (
    <motion.div {...CardAnimationProps} id="account-card-styles">
      <div className="name">{name}</div>

      <div
        style={{
          gap: "30px",
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {operations?.open && <Button>Open</Button>}
        {operations?.update && <Button>Update</Button>}
        {operations?.delete && (
          <FontAwesomeIcon
            onClick={operations.delete}
            className="icons"
            icon={faTrash}
            color={colors.onSurface}
          />
        )}
      </div>
    </motion.div>
  );
};
