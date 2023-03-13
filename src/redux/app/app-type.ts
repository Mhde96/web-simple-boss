export type AppStateType = {
  user: userType;
  status: StatusType;
  colorMode: "light" | "dark" | "auto";
  language: "default" | "en" | "ar";
  db: dbType;
  confirm: {
    show: boolean;
    title: string;
    message: string;
    handleSubmit?: () => void;
  };
};

export type userType = {
  id: number;
  name: string;
  email: string;
  last_sync: string;
};

export type StatusType = true | false | "data" | null;

export type dbType = {
  id: number | undefined;
  name: string;
};
