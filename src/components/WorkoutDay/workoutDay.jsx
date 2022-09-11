import "./workoutDay.css";
import React from "react";

const WorkoutDay = ({ dayIndex, handleUpdateWeek }) => {
  const [exerciseArr, setExerciseArr] = React.useState([]);
  const [dayInputField, setDayInputField] = React.useState("");
  //   console.log(exerciseArr);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleAddNote = (event) => {
    event.preventDefault();
    const newArray = [...exerciseArr];
    newArray.push({ excerpt: dayInputField, id: Date.now() });
    setExerciseArr(newArray);
    setDayInputField("");
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setDayInputField(event.target.value);
  };

  const onHandleUpdateWeek = () => {
    handleUpdateWeek(exerciseArr, dayIndex);
    setDayInputField("");
  };

  return (
    <div>
      <h4>Workout For {weekdays[dayIndex]}</h4>
      {exerciseArr.length ? (
        exerciseArr.map((note) => {
          return <p>{note.excerpt}</p>;
        })
      ) : (
        <p>Nothing currently Programmed</p>
      )}
      <form onSubmit={handleAddNote}>
        <label>Add a workout Piece</label>
        <input
          name="exercise-input"
          placeholder="add an exercise or note"
          onChange={handleInputChange}
          value={dayInputField}
        />
        <button type="submit">Add Exercise note</button>
      </form>
      <button
        onClick={onHandleUpdateWeek}
      >{`Update ${weekdays[dayIndex]}'s workout`}</button>
    </div>
  );
};

export default WorkoutDay;
