export const dbKeys = {
  id: "id",
};

export const dbTableKeys = {
  id: "id",
  users: {
    table: "users",
    user_id: "user_id",
    last_sync: "last_sync",
  },
  data: {
    table: "data",
    id: "id", // main db
    user_id: "user_id",
  },
  journals: {
    table: "journals",
  },
};
