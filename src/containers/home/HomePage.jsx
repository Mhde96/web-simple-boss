import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Card, Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BalanceModel } from "../../assets/models/BalanceModel";
import { HomeCard } from "../../components/cards/home-card/HomeCard";
import { AccountChart } from "../../components/chart/AccountChart";
import { JournalChart } from "../../components/chart/JournalChart";
import { endroutes } from "../../constant/endroutes";
import { selectJournals } from "../../redux/data/dataSlice";
import { useColors } from "../../styles/variables-styles";

import "./home-styles.scss";
import { useEffect, useState } from "react";
import { en } from "../../helper/languages/en";
import { useTranslation } from "react-i18next";
export const HomePage = () => {
  const { t } = useTranslation();
  const journals = useSelector(selectJournals);
  const navigate = useNavigate();
  const colors = useColors();
  return (
    <div id="home-styles">
      <div className="cards">
        <Row style={{ height: 240 }}>
          <Col xs={12}>
            <AccountChart />
          </Col>
        </Row>
        {/* <br />
        <Row style={{ height: 350 }}>
          <Col xs={12}>
            <JournalChart />
          </Col>
        </Row> */}
        <br />

        <HomeCard
          title={t(en.journals)}
          buttonTitle={t(en.journal_card_1)}
          // subHead={`you have ${journals.length} Journals`}
          description={t(en.journal_card_3)}
          onClick={() => navigate(endroutes.journals.path)}
        />

        <br />
        <Card
          style={{
            background: colors.surface,
            color: colors.text,
            borderColor: colors.border,
          }}
        >
          <Card.Header style={{ background: colors.background }}>
            <Card.Title>Movie</Card.Title>
            <Card.Title>
              do you know there is a movie about Accountant
            </Card.Title>
          </Card.Header>
          <Card.Body style={{ padding: 0 }}>
            <ReactPlayer
              height={300}
              width={"auto"}
              url="https://www.youtube.com/watch?v=DBfsgcswlYQ"
            />
          </Card.Body>
        </Card>
      </div>
      <div style={{ width: 20 }} />
      <div className="canvas">
        <Card
          style={{
            background: colors.surface,
            color: colors.text,
            borderColor: colors.border,
          }}
        >
          <Card.Img src="https://principlesofaccounts.com.sg/wp-content/uploads/2021/04/19.png" />
        </Card>
        <br />
        <Card
          style={{
            background: colors.surface,
            color: colors.text,
            borderColor: colors.border,
            height: "100%",
          }}
        >
          <Canvas>
            <BalanceModel />
            <axesHelper />
            <pointLight position={[0, 2, 20]} color={0xb5482a} intensity={1} />
            <pointLight position={[0, -2, 20]} color={0xb5482a} intensity={1} />
            <OrbitControls makeDefault />
          </Canvas>
        </Card>
      </div>
    </div>
  );
};
