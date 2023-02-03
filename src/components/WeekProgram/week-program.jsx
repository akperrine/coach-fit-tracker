import "./week-program.css";
import React from "react";
import WorkoutDay from "./WorkoutDay/workoutDay";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.utils";

const WeekProgram = ({ client }) => {
  const [idSearchField, setIdSearchField] = React.useState("");
  const [updateArr, setUpdateArr] = React.useState([]);

  console.log(client);

  React.useEffect(() => {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      const dayObj = {
        day: i + 1,
        complete: false,
        workout: [],
      };
      arr.push(dayObj);
    }
    setUpdateArr(arr);
  }, []);

  const handleChange = (event) => {
    setIdSearchField(event.target.value);
  };

  const handleUpdateClient = async () => {
    const docRef = doc(db, "users", client.id);
    await updateDoc(docRef, {
      workout: updateArr,
    })
      .then(() => alert("update successful"))
      .catch((err) => alert(`unsucessful, error:${err}`));
  };

  const handleUpdateWeek = (dayArray, index) => {
    const arrCopy = [...updateArr];
    arrCopy[index] = { ...arrCopy[index], workout: dayArray };
    setUpdateArr(arrCopy);
  };
  return (
    <div className="workout-week">
      <h2 className="client-header">{`Client: ${client.user}`}</h2>
      <div className="week-schedule-container">
        {updateArr.map((day, index) => {
          return (
            <WorkoutDay dayIndex={index} handleUpdateWeek={handleUpdateWeek} />
          );
        })}
      </div>
      <button className="week-update-btn" onClick={handleUpdateClient}>
        Update Weekly Plan to Client
      </button>
    </div>
  );
};

export default WeekProgram;
