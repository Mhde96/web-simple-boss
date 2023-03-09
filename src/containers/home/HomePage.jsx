import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeCard } from "../../components/cards/home-card/HomeCard";
import { AccountChart } from "../../components/chart/AccountChart";
import { endroutes } from "../../constant/endroutes";
import { selectJournals } from "../../redux/data/dataSlice";
import { useColors } from "../../styles/variables-styles";

import "./home-styles.scss";
import { en } from "../../helper/languages/en";
import { useTranslation } from "react-i18next";
import { ArticleHomeCard } from "./ArticleHomeCard";
import { DbControlContainer } from "../db-control/DbControlContainer";
export const HomePage = () => {
  const { t } = useTranslation();
  const journals = useSelector(selectJournals);
  const navigate = useNavigate();
  const colors = useColors();
  return (
    <div>
      <div id="home-styles">
        <div className="cards home-layout">
          <div className="account-chart-container">
            <AccountChart />
          </div>

          <div className="journals-container ">
            <HomeCard
              title={t(en.journals)}
              buttonTitle={t(en.journal_card_1)}
              // subHead={`you have ${journals.length} Journals`}
              description={t(en.journal_card_3)}
              onClick={() => navigate(endroutes.journals.path)}
            />
          </div>
          <DbControlContainer />
        </div>
        <div style={{ width: 20 }} />
        <div className="canvas home-layout">
          <ArticleHomeCard />
        </div>
      </div>
      {/* 
      <div style={{ height: 400 }}>
        <JournalChart />
      </div> */}
    </div>
  );
};
