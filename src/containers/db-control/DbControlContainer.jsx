import { useLiveQuery } from "dexie-react-hooks";
import { Card, Col, Container, Row } from "react-bootstrap";
import { db } from "../../db/indexedDb";
import { useCookies } from "react-cookie";
import { createDb, deleteDb, exportDB, importDB } from "../../db/initDb";
import { DbCard } from "../../components/cards/db/DbCard";
import { cookiesKey } from "../../constant/cookiesKey";
import { CloudPlusIcon } from "../../assets/icons/CloudPlusIcon";
import "./db-control-page-styles.scss";
// import "../../styles/components-styles.scss";

import { AddIcon } from "../../assets/icons/AddIcon";
import { useAppDispatch } from "../../redux/hooks";
import { changeDbAsync } from "../../redux/app/appAsync";
// const cookies = new Cookies();

export const DbControlContainer = () => {
  const dispatch = useAppDispatch();
  const [cookies, setCookie] = useCookies();
  const dbArray = useLiveQuery(() => db.data.toArray());

  const handleChoseDB = (db) => {
    setCookie(cookiesKey.dbId, db.id);
    dispatch(changeDbAsync({ id: db.id, name: db.name }));
  };

  return (
    <Card id={"db-control-page-styles"} className="primary-border ">
      <Card.Header className="header" as="h6">
        {"Choose your Database"}
      </Card.Header>

      <br />
      <Container>
        {dbArray?.map((item, index) => (
          <DbCard
            name={item.name}
            dbId={item.id}
            index={index}
            active={cookies[cookiesKey.dbId] == item.id}
            handleExport={() => exportDB(item)}
            handleDelete={() => deleteDb(item)}
            handleClick={() => handleChoseDB(item)}
          />
        ))}

        <Row>
          <Col xs={6} />
          <Col xs={3}>
            <input
              type="file"
              id="file-upload"
              style={{ display: "none" }}
              onChange={(e) => {
                importDB(e);
                e.target.value = "";
              }}
            />
            <label className="primary-button" for="file-upload">
              {"Import "} <CloudPlusIcon />
            </label>
            {/* <input placeholder="import" type="file" onChange={importDB} /> */}
          </Col>
          <Col xs={3}>
            <div
              className="primary-button"
              onClick={() => createDb({ name: "name" + Math.random() })}
            >
              {"Create  "}
              <AddIcon />
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};
