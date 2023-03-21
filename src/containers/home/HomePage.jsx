import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeCard } from "../../components/cards/home-card/HomeCard";
import { AccountChart } from "../../components/chart/AccountChart";
import { endroutes } from "../../constant/endroutes";
import { selectJournals } from "../../redux/data/dataSlice";
import { useColors } from "../../styles/variables-styles";

import "./home-styles.scss";
import { DbControlContainer } from "../db-control/DbControlContainer";
// import { getCurrentDataINdexedDb } from "../../db/data/dataDb";
import { Text } from "../../components/text/Text";
import { selectDb } from "../../redux/app/appSlice";
import { ArticleHomeCard } from "./ArticleHomeCard";
import { Col, Container, Row } from "react-bootstrap";
export const HomePage = () => {
  const db = useSelector(selectDb);

  // console.log(db);
  // const data = getCurrentDataINdexedDb(db.id);
  return (
    <div>
      <div id="home-styles">
        <Container>
          <Row>
            <Col xs={12}>
              <DbControlContainer />
              <Text html={db?.description} />
              {/* <div className="account-chart-container">
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
          </div> */}
            </Col>
          </Row>
        </Container>

        {/* <div style={{ width: 20 }} />
        <div className="canvas home-layout"><ArticleHomeCard /></div> */}
      </div>
      {/* 
      <div style={{ height: 400 }}>
        <JournalChart />
      </div> */}
    </div>
  );
};
