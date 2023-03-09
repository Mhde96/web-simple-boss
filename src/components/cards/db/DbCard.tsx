import { motion } from "framer-motion";
import "./db-card-styles.scss";
import { Cookies } from "react-cookie";
import { CardAnimationProps } from "../CardAnimation";
import { TrashIcon } from "../../../assets/icons/TrashIcon";
import { useColors } from "../../../styles/variables-styles";
import { DowloadIcon } from "../../../assets/icons/DownloadIcon";

type DbCardType = {
  name: string;
  dbId: number;
  index: number;
  active?: boolean;
  handleClick: any;
  handleExport: any;
  handleDelete: any;
};
export const DbCard = (props: DbCardType) => {
  const AnimationProps = {
    ...CardAnimationProps({ index: props.index, active: props.active }),
  };
  const colors = useColors();

  return (
    <motion.div {...AnimationProps} id="db-card-styles">
      <div className="name pointer" onClick={props.handleClick}>
        {props.name}
      </div>
      <DowloadIcon fill={colors.text} onClick={props.handleExport} />
      <TrashIcon fill={colors.text} onClick={props.handleDelete} />
    </motion.div>
  );
};
