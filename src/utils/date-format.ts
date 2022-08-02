import moment from "moment";

export const datePickerFormat = "yyyy/MM/dd";
export const dateFormatUi = (date: string) => {
  if (moment(date).isValid()) return moment(date).format("YYYY/MM/DD");
  return date;
};
