import moment from "moment";

export const dateFormatUi = (date: string) => {
    return moment(date).format('YYYY/MM/DD')
};
