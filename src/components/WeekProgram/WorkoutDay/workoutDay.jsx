import "./workoutDay.css";
import React from "react";

const WorkoutDay = ({ dayIndex, handleUpdateWeek, client }) => {
  const [exerciseArr, setExerciseArr] = React.useState([]);
  const [updateLoaded, setUpdateLoaded] = React.useState(false);
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

  const handleAddNote = (event) => {
    event.preventDefault();

    if (dayInputField) {
      const newArray = [...exerciseArr];
      newArray.push({ excerpt: dayInputField, id: Date.now() });
      setExerciseArr(newArray);
      setDayInputField("");
    } else {
      return null;
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setDayInputField(event.target.value);
  };

  const onHandleUpdateWeek = () => {
    handleUpdateWeek(exerciseArr, dayIndex);
    toggleUpdateLoaded();
    setDayInputField("");
  };

  const toggleUpdateLoaded = () => {
    setUpdateLoaded(!updateLoaded);
    console.log(updateLoaded);
  };

  const handleDeleteExcerpt = (id) => {
    const editedArr = exerciseArr.filter((item) => item.id !== id);
    setExerciseArr(editedArr);
  };

  return (
    <div className="weekday-wrapper">
      <div className="weekday-container">
        <h4>Workout For {weekdays[dayIndex]}</h4>
        <div className="excerpt-list">
          {exerciseArr.length ? (
            exerciseArr.map((note) => {
              return (
                <div className="excerpt-container">
                  <p className="workout-content ">{note.excerpt}</p>
                  <button
                    onClick={() => {
                      handleDeleteExcerpt(note.id);
                    }}
                  >
                    x
                  </button>
                </div>
              );
            })
          ) : (
            <p className="workout-content">Nothing currently Programmed</p>
          )}
        </div>
        <form className="update-day-form" onSubmit={handleAddNote}>
          <input
            name="exercise-input"
            placeholder="+ Exercise/Note"
            onChange={handleInputChange}
            value={dayInputField}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      </div>
      <div
        className={
          updateLoaded ? "complete-btn" : "update-day-btn-container update-btn"
        }
      >
        <button onClick={onHandleUpdateWeek}>
          {updateLoaded ? `Updated` : `Update ${weekdays[dayIndex]}`}
        </button>
      </div>
    </div>
  );
};

export default WorkoutDay;
