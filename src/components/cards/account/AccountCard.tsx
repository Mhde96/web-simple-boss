import { Button } from "react-bootstrap";
import "./account-card-styles.scss";
import {
  motion,
  MotionProps,
  useAnimationControls,
  VariantLabels,
} from "framer-motion";
import { AccountCardTypeProps } from "./account-card-type";
import { colors } from "../../../styles/variables-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import { TrashIcon } from "../../../assets/icons/TrashIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { CardAnimationProps } from "../CardAnimation";

export const AccountCard = (props: AccountCardTypeProps) => {
  const { account_key, name, operations, isHeader, index } = props;
  const accountKey = account_key ? account_key + " - " : "";

  const AnimationProps = isHeader
    ? { ...CardAnimationProps({ index }) }
    : undefined;
  return (
    <motion.div {...AnimationProps} id="account-card-styles">
      <div className="name" onClick={() => operations?.update()}>
        {accountKey + name}
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
            <div style={{color:'white' , cursor:'pointer'}} className="name" onClick={() => operations?.open()}>
              Statement
            </div>

            <EditIcon
              onClick={operations.update}
              className="icons"
              // color={colors.surface}
            />
          </>
        )}
        {operations?.delete && <TrashIcon onClick={operations.delete} />}
      </div>
    </motion.div>
  );
};
