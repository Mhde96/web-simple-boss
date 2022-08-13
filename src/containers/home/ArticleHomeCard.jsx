import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useColors } from "../../styles/variables-styles";

export const ArticleHomeCard = () => {
    const colors = useColors()
  return (
    <>
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
      {/* <div className="player-container">
        <ReactPlayer
          height={"100%"}
          width={"auto"}
          url="https://www.youtube.com/watch?v=DBfsgcswlYQ"
        />
      </div> */}
      {/* <Card
          style={{
            background: colors.surface,
            color: colors.text,
            borderColor: colors.border,
            height: "30vh",
          }}
        >
          <Canvas>
            <BalanceModel />
            <axesHelper />
            <pointLight position={[0, 2, 20]} color={0xb5482a} intensity={1} />
            <pointLight position={[0, -2, 20]} color={0xb5482a} intensity={1} />
            <OrbitControls makeDefault />
          </Canvas>
        </Card> */}
    </>
  );
};
