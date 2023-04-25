import { useLiveQuery } from "dexie-react-hooks";
import { Card, Col, Container, Row } from "react-bootstrap";
import { db } from "../../db/indexedDb";
import { DbCard } from "../../components/cards/db/DbCard";
import { CloudPlusIcon } from "../../assets/icons/CloudPlusIcon";
import "./db-control-page-styles.scss";
// import "../../styles/components-styles.scss";

import { AddIcon } from "../../assets/icons/AddIcon";
import { useAppDispatch } from "../../redux/hooks";
import { changeDbAsync } from "../../redux/app/appAsync";
import { DbDialogWidget, OpenDbDialog } from "./DbDialogWidget";
import { useSelector } from "react-redux";
import { selectDb } from "../../redux/app/appSlice";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteDataIndexedDb,
  exportSpecificDataIndexedDb,
  importDataFromDeviceIndexedDb,
} from "../../db/data/dataDb";
// const cookies = new Cookies();

export const DbControlContainer = ({}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const dbArray = useLiveQuery(() => db.data.toArray());
  const dbRedux = useSelector(selectDb);

  const handleChooseDB = (db) => {
    dispatch(
      changeDbAsync({ id: db.id, name: db.name, description: db.description })
    );
  };

  return (
    <>
      <DbDialogWidget />
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
              active={dbRedux.id == item.id}
              handleExport={() => exportSpecificDataIndexedDb(item)}
              handleDelete={() => deleteDataIndexedDb(dispatch, item)}
              handleClick={() => handleChooseDB(item)}
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
                  importDataFromDeviceIndexedDb(e);
                  e.target.value = "";
                }}
              />
              <label className="primary-button" htmlFor="file-upload">
                {"Import "} <CloudPlusIcon />
              </label>
            </Col>
            <Col xs={3}>
              <div
                className="primary-button"
                onClick={
                  () => OpenDbDialog(location, navigate, undefined)

                  // createDb({ name: "name" + Math.random() })
                }
              >
                {"Create  "}
                <AddIcon />
              </div>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};
