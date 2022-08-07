import { Button, Card } from "react-bootstrap";
import "./home-card-styles.scss";
export const HomeCard = ({
  title,
  buttonTitle,
  subHead,
  description,
  onClick,
}) => {
  return (
    <Card id="home-card-styles" >
      <Card.Header className="header" as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{subHead}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={onClick} variant="primary">
          {buttonTitle}
        </Button>
      </Card.Body>
    </Card>
  );
};
