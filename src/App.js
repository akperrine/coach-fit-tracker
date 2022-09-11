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
    </div>
  );
}

export default App;
