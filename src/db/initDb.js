import { db } from "./indexedDb";

export const initDb = async () => {
  const dbArray = await db.data.toArray();

  if (dbArray.length == 0)
    await db.data.add({
      data: { accounts: [], journals: [] },
      name: "First DataBase",
    });
};
