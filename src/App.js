import "./App.css";
import React, { useEffect } from "react";
import WorkoutDay from "./components/WorkoutDay/workoutDay";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  onSnapshot,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYwcfG5kErnzPDeDOjtIlE-g698jwltVM",
  authDomain: "fitness-app-1e36b.firebaseapp.com",
  projectId: "fitness-app-1e36b",
  storageBucket: "fitness-app-1e36b.appspot.com",
  messagingSenderId: "604488646893",
  appId: "1:604488646893:web:521903a0c8db441b9a4ce4",
  measurementId: "G-MG7P82E8BV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  // const [idSearchField, setIdSearchField] = React.useState("");
  // const handleChange = (e) => {
  //   setIdSearchField(e.target.value);
  // };

  // const handleUpdate = async (strCode) => {
  //   const workoutArr = [
  //     {
  //       day: 1,
  //       workout: [
  //         "3rds",
  //         "A: 6-7 front squats 18lbs bar (2020)",
  //         "A: 5 dumbell Benchpress 10lb DB (2110)",
  //         "3rds:",
  //         "B: 6-7 Romanian Deadlifts 10lb DB (2011)",
  //         "B: 6-7 single arm DB Row 10 (2020)",
  //         "4 Rds:",
  //         "1min spin on the bike (check what watts or RPMs fit you well)",
  //         "20-30s dead bug hold",
  //       ],
  //       complete: false,
  //     },
  //     { day: 2, workout: [], complete: false },
  //     {
  //       day: 3,
  //       workout: [
  //         "3rds",
  //         "A: 5-7 pushups to a bench (2011)",
  //         "A: 6-10 scap pull-ups (2120)",
  //       ],
  //       complete: false,
  //     },
  //     { day: 4, workout: [], complete: false },
  //     { day: 5, workout: [], complete: false },
  //     {
  //       day: 6,
  //       workout: [
  //         "Steady state day:",
  //         "20min: ",
  //         "-fast walk or jog (should be easy) down to Munsils and back. (We should start measuring some stuff out)",
  //         "-12 no push-up burpees (be a slow pace person, take reps between.",
  //         "-30 sec plank",
  //       ],
  //       complete: false,
  //     },
  //     { day: 7, workout: [], complete: false },
  //   ];

  //   const docRef = doc(db, "users", strCode);

  //   await updateDoc(docRef, {
  //     workout: workoutArr,
  //   })
  //     .then(() => alert("update successful"))
  //     .catch((err) => alert(`unsucessful, error:${err}`));
  // };
  const [idSearchField, setIdSearchField] = React.useState("");
  const [updateArr, setUpdateArr] = React.useState([]);
  console.log(updateArr);
  console.log(idSearchField);

  useEffect(() => {
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
    const docRef = doc(db, "users", idSearchField);
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
    <div className="App">
      <h2>Welcome Austin</h2>
      <input
        type="text"
        placeholder="user ID"
        value={idSearchField}
        onChange={handleChange}
      />
      {updateArr.map((day, index) => {
        return (
          <WorkoutDay dayIndex={index} handleUpdateWeek={handleUpdateWeek} />
        );
      })}
      <button onClick={handleUpdateClient}>Update Weekly Plan to Client</button>
      {/* <input
        type="text"
        placeholder="user ID"
        value={idSearchField}
        onChange={handleChange}
      />
      <button onClick={handleUpdate(idSearchField)}>
        Update Client Workouts
      </button> */}
    </div>
  );
}

export default App;
