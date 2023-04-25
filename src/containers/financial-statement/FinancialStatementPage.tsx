import { FinancialStatementCard } from "../../components/cards/financial-statement/FinancialStatementCard";
import { motion } from "framer-motion";
import "./financial-statement-page-styles.scss";
import { PageTransitionProps } from "../../components/animations/AnimationPageProps";
import { useTranslation } from "react-i18next";
import { en } from "../../helper/languages/en";

export const FinancialStatementPage = (props: any) => {
  const { t } = useTranslation();
  return (
    <motion.div {...PageTransitionProps} id="financial-statement-page-styles">
      <div className="box">
        <div>
          <div className="header">
            <FinancialStatementCard name={t(en.account)} value={t(en.value)} />
          </div>
          {props?.state?.credits?.map((item: any, index: number) => (
            <FinancialStatementCard
              name={item.name}
              value={item.credit}
              key={index}
            />
          ))}
        </div>
        <div className="footer">
          <FinancialStatementCard
            name={t(en.total)}
            value={props?.state?.total}
          />
        </div>
      </div>

      <div className="box">
        <div>
          <div className="header">
            <FinancialStatementCard name={t(en.account)} value={t(en.value)} />
          </div>
          {props?.state?.debits?.map((item: any, index: number) => (
            <FinancialStatementCard
              key={index}
              name={item.name}
              value={item.debit}
            />
          ))}
        </div>
        <div className="footer">
          <FinancialStatementCard
            name={t(en.total)}
            value={props?.state?.total}
          />
        </div>
      </div>
    </motion.div>
  );

  // return (
  //   <div id="financial-statement-page-styles">
  //     <div>
  //       <div
  //         className="header-footer"
  //         style={{
  //           display: "flex",

  //           justifyContent: "space-between",
  //         }}
  //       >
  //         <FinancialStatementCard name="account" value={"value"} />
  //         <FinancialStatementCard name="account" value={"value"} />
  //       </div>

  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "row",
  //           background: "white",
  //           maxHeight: "100%",
  //           overflow: "auto",
  //         }}
  //       >
  //         <div className="column-section">
  //           {props?.state?.credits?.map((item: any, index: number) => (
  //             <div
  //               key={index}
  //               className="account-row"
  //               style={{
  //                 display: "flex",
  //                 flex: 1,
  //                 justifyContent: "space-between",
  //               }}
  //             >
  //               <FinancialStatementCard name={item.name} value={item.credit} />
  //             </div>
  //           ))}
  //         </div>

  //         <div className="column-section">
  //           {props?.state?.debits?.map((item: any, index: number) => (
  //             <div
  //               key={index}
  //               className="account-row"
  //               style={{
  //                 display: "flex",
  //                 flex: 1,
  //                 justifyContent: "space-between",
  //               }}
  //             >
  //               <FinancialStatementCard name={item.name} value={item.debit} />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>

  //     <div className="border header-footer footer">
  //       <FinancialStatementCard name="total" value={props?.state?.total} />
  //       <FinancialStatementCard name="total" value={props?.state?.total} />
  //     </div>
  //   </div>
  // );
};
