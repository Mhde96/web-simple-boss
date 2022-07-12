import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { endroutes } from "../../constant/endroutes";
import { fetchJournalsAsync } from "../../redux/data/dataAsync";
import { selectJournals } from "../../redux/data/dataSlice";
import { useAppDispatch } from "../../redux/hooks";
import { journalType } from "./journal-type";
import { JournalsPage } from "./JournalsPage";

const columns = [
  { id: "description", name: "description" },
  { id: "date", name: "date" },
];

const journals: Array<journalType> = [
  // {
  //   id: 1,
  //   date: new Date().toString(),
  //   description: "asdsadasdasdasd",
  //   number: 1,
  // },
  // {
  //   id: 2,
  //   date: new Date().toString(),
  //   description: "asdasd xzczxc asdasdasda",
  //   number: 2,
  // },
  // {
  //   id: 3,
  //   date: new Date().toString(),
  //   description: "asdasd xzczxc asdasdasda",
  //   number: 3,
  // },
];

export const JournalsContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const journals = useSelector(selectJournals);

  const handleNavigateToEntries = (number: number) =>
    navigate(endroutes.journalentaries(number).go);

  useEffect(() => {
    dispatch(fetchJournalsAsync());
  }, []);
  const props = { journals, columns, handleNavigateToEntries };
  return <JournalsPage {...props} />;
};
