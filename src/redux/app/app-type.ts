export type AppStateType = {
  user: userType;
  status: StatusType;
};

export type userType =
  | {
      id?: number;
      name: string;
      email: string;
    }
  | undefined;

export type StatusType = true | false | "data" | null;
