export type AppStateType = {
  user: userType;
  status: StatusType;
  colorMode: "light" | "dark";
  confirm: {
    show: boolean;
    title: string;
    message: string;
    handleSubmit?: () => void;
  };
};

export type userType =
  | {
      id?: number;
      name: string;
      email: string;
    }
  | undefined;

export type StatusType = true | false | "data" | null;
