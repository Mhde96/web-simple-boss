import logo from "./logo.svg";
import "./App.css";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect } from "react";
import { db } from "./db/indexedDb";

function App() {
  const friend = useLiveQuery(() => db.data.toArray());
  console.log(friend);

  useEffect(() => {
    // const addItem = async () => {
    //   await db.data.add({
    //     data: [{ name: "box1" }],
    //     age: 2,
    //   });
    // };
    // addItem();
    // db.data.put({
    //   name: "Under the Dome1",
    //   categories: ["sci-fi", "thriller"],
    //   data: [
    //     {
    //       accounts: ["box", "bank"],
    //       journals: [
    //         {
    //           id: 1,
    //           account_id: 1,
    //           debit: 200,
    //           credit: 0,
    //         },
    //         {
    //           id: 2,
    //           account_id: 2,
    //           debit: 0,
    //           credit: 200,
    //         },
    //       ],
    //     },
    //   ],
    // });
    // function update() {
    //   const test = db.data
    //     .where("data.name")
    //     .equale("Under the Dome")
    //     .toArray();
    //   console.log(test);
    // }
    // update();
    // const getSciFiBooks = async () => {
    //   const te = await db.data.where("categories").equals("sci-fi").toArray();
    //   console.log(te);
    // };
    // getSciFiBooks();

    const update = async () => {
      // db.data
      //   .where("name")
      //   .equals("Under the Dome1")
      //   .modify({ name: "Under the Dome12" });

      const asd = await db.data
        .where("name")
        .equals("asdasdasd")
        .modify((data) => {
          data.data.map((item) => {
            item.journals.push({
              id: 3,
              account_id: 1,
              credit: 200000,
              debit: 0,
            });
          });
          return data;
        });

      console.log("+++", asd);
      // db.data.update(3, { name: "asdasdasd" });
    };
    update();
  }, []);

  const friends1 = useLiveQuery(
    async () =>
      //
      // Query Dexie's API
      //
      // db.data.where("categories").equals("sci-fi").toArray()
      db.data.where("name").equals("Under the Dome1").toArray()

    // Return result

    // specify vars that affect query:
  );

  console.log("==>", friends1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
