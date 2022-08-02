import { Button, Card } from "react-bootstrap";
import "./home-card-styles.scss";
export const HomeCard = ({title , buttonTitle , subHead , description}) => {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{subHead}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Button variant="primary">{buttonTitle}</Button>
      </Card.Body>
    </Card>
  );
};
