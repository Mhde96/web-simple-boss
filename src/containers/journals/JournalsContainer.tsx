import { journalType } from "./journal-type";
import { JournalsPage } from "./JournalsPage";

const journals: Array<journalType> = [
  {
    id: 1,
    date: new Date().toString(),
    description: "asdsadasdasdasd",
    number: 1,
  },
  {
    id: 2,
    date: new Date().toString(),
    description: "asdasd xzczxc asdasdasda",
    number: 2,
  },
  {
    id: 3,
    date: new Date().toString(),
    description: "asdasd xzczxc asdasdasda",
    number: 3,
  },
];

const columns = [
  { id: "description", name: "description" },
  { id: "date", name: "date" },
];

export const JournalsContainer = () => {
  const props = { journals, columns };
  return <JournalsPage {...props} />;
};
