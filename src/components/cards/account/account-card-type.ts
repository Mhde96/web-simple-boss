export type AccountCardTypeProps = {
  account_key?: string | number;
  name: string;
  isHeader?: boolean;
  index?: number;
  operations?: {
    open?: any;
    update?: any;
    delete?: any;
  };
};
