import { FinancialStatementNewCard } from "../../components/cards/financial-statement/FinancialStatementNewCard";
import { useColors } from "../../styles/variables-styles";
import { motion } from "framer-motion";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";
import { useTranslation } from "react-i18next";
import { en } from "../../helper/languages/en";

export const FinancialStatementNewPage = (props: any) => {
  const { t } = useTranslation();
  const colors = useColors();
  const style = {
    background: colors.surface,

    border: "1px solid " + colors.border,
  };

  return (
    <motion.div {...PageTransitionProps} style={{ height: "100%" }}>
      <FinancialStatementNewCard
        name={t(en.account)}
        value1={t(en.value)}
        value2={t(en.total)}
        value3={t(en.total)}
      />
      {props?.statement()?.map((account: any, index: number) => (
        <div key={index}>
          <FinancialStatementNewCard
            name={account.account}
            value1={account.value1}
            value2={account.value2}
            value3={account.value3}
          />
        </div>
      ))}
    </motion.div>
  );
};
