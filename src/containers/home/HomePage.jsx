import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BalanceModel } from "../../assets/models/BalanceModel";
import { HomeCard } from "../../components/cards/home-card/HomeCard";
import "./home-styles.scss";
export const HomePage = () => {
  return (
    <div id="home-styles">
      <div className="cards">
        <HomeCard
          title={"Accounts"}
          buttonTitle="Add Your Accounts"
          subHead="you have 5 Accounts"
          description="to start your journey add your accounts first"
        />
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
      <div className="canvas">
        <Canvas>
          <BalanceModel />
          <pointLight
            position={[10, 10, 10]}
            color={0xb5482a}
            intensity={0.8}
          />
          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </div>
  );
};
