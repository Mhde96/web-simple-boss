import { useLiveQuery } from "dexie-react-hooks";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../components/button/Button";
import { Center } from "../../components/Center";
import { Text } from "../../components/text/Text";
import { db } from "../../db/indexedDb";
import { Cookies } from "react-cookie";
import { createDb, deleteDb, exportDB, importDB } from "../../db/initDb";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";

export const DbControlContainer = () => {
  const dbArray = useLiveQuery(() => db.data.toArray());
  const navigate = useNavigate();

  const handleChoseDB = async ({ id }) => {
    const cookies = new Cookies();
    await cookies.set("dbId", id);
    navigate(endroutes.home.path);
  };

  return (
    <>
      <Container>
        <Center>
          <Text fs="f1">Choose your Database</Text>
        </Center>
        <br />
        {dbArray?.map((item) => (
          <>
            <Row>
              <Col xs={4}>
                <Button onClick={() => handleChoseDB(item)}>{item.name}</Button>
              </Col>
              <Col xs={4}>
                <Button onClick={() => exportDB(item)}>{"export"}</Button>
              </Col>
              <Col xs={4}>
                <Button onClick={() => deleteDb(item)}>{"delete"}</Button>
              </Col>
            </Row>
            <br />
          </>
        ))}

        <Row>
          <Col xs={6}>
            <input placeholder="import" type="file" onChange={importDB} />
          </Col>
          <Col xs={6}>
            <Button onClick={() => createDb({ name: "name" + Math.random() })}>
              {"Create"}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
