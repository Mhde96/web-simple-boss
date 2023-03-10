import { motion } from "framer-motion";
import "./db-card-styles.scss";
import { Cookies } from "react-cookie";
import { CardAnimationProps } from "../CardAnimation";
import { TrashIcon } from "../../../assets/icons/TrashIcon";
import { useColors } from "../../../styles/variables-styles";
import { DowloadIcon } from "../../../assets/icons/DownloadIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { useAppDispatch } from "../../../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { OpenDbDialog } from "../../../containers/db-control/DbDialogWidget";

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleEdit = () => {
    OpenDbDialog(location, navigate, props.dbId);
  };
  return (
    <motion.div {...AnimationProps} id="db-card-styles">
      <div className="name pointer" onClick={props.handleClick}>
        {props.name}
      </div>
      <DowloadIcon fill={colors.text} onClick={props.handleExport} />
      <EditIcon onClick={handleEdit} />
      <TrashIcon fill={colors.text} onClick={props.handleDelete} />
    </motion.div>
  );
};
