import WeekProgram from "../../components/WeekProgram/week-program";
import { useLocation } from "react-router-dom";

const EditProgram = () => {
  const location = useLocation();
  const { client } = location.state;
  return <WeekProgram client={client} />;
};

export default EditProgram;
