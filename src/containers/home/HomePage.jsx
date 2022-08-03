import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Card, Col, Row } from "react-bootstrap";
import { BalanceModel } from "../../assets/models/BalanceModel";
import { HomeCard } from "../../components/cards/home-card/HomeCard";
import { AccountChart } from "../../components/chart/AccountChart";
import { JournalChart } from "../../components/chart/JournalChart";
import "./home-styles.scss";
export const HomePage = () => {
  return (
    <div id="home-styles">
      <div className="cards">
        <Row style={{ height: 240 }}>
          <Col xs={12}>
            <AccountChart />
          </Col>
        </Row>
        <br />
        <Row style={{ height: 350 }}>
          <Col xs={12}>
            <JournalChart />
          </Col>
        </Row>
        <br />
        <HomeCard
          title={"Journals"}
          buttonTitle="Check Your Journals"
          subHead="you have 5 Journals"
          description="add your journals to get your results"
        />

        <br />

        <HomeCard
          title={"Movie"}
          buttonTitle="Watch"
          subHead="do you know there is a movie for accountant"
          description="https://www.youtube.com/watch?v=DBfsgcswlYQ"
        />
      </div>
      <div style={{ width: 20 }} />
      <div className="canvas">
        <Card>
          <Card.Body>Hellow World</Card.Body>
        </Card>
        <Canvas>
          <BalanceModel />
          <axesHelper />
          <pointLight position={[0, 2, 20]} color={0xb5482a} intensity={1} />
          <pointLight position={[0, -2, 20]} color={0xb5482a} intensity={1} />
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </div>
  );
};
