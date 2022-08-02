import { FinancialStatementNewCard } from "../../components/cards/financial-statement/FinancialStatementNewCard";
import { useColors } from "../../styles/variables-styles";
import { motion } from "framer-motion";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";

export const FinancialStatementNewPage = (props: any) => {
  const colors = useColors();
  const style = {
    background: colors.surface,

    border: "1px solid " + colors.border,
  };

  return (
    <motion.div {...PageTransitionProps} style={{ height: "100%" }}>
      <FinancialStatementNewCard
        name="account"
        value1="جزئي"
        value2="كللي"
        value3="كللي"
      />
      {props?.statement()?.map((account: any) => (
        <FinancialStatementNewCard
          name={account.account}
          value1={account.value1}
          value2={account.value2}
          value3={account.value3}
        />
      ))}
    </motion.div>
  );
};
