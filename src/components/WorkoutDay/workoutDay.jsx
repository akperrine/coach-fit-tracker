import "./workoutDay.css";
import React from "react";

const WorkoutDay = ({ dayIndex }) => {
  const [exerciseArr, setExerciseArr] = React.useState([]);
  const [dayInputField, setDayInputField] = React.useState("");

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div>
      <h4>Workout For {weekdays[dayIndex]}</h4>
      {exerciseArr.length ? (
        exerciseArr.map((note) => {
          return <p>{note}</p>;
        })
      ) : (
        <p>Nothing currently Programmed</p>
      )}
      <label>Add a workout Piece</label>
      <input />
    </div>
  );
};

export default WorkoutDay;
