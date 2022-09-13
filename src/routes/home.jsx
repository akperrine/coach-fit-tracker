import React, { useEffect } from "react";
import WorkoutDay from "../components/WeekProgram/WorkoutDay/workoutDay";
import ClientList from "../components/Client-List/client-list";
import WeekProgram from "../components/WeekProgram/week-program";
import { db } from "../utils/firebase.utils";

const Home = () => {
  const [currentClient, setCurrentClient] = React.useState({});
  return (
    <div className="App">
      <h2>Welcome Austin</h2>
      <p>Here is a list of your current clients</p>
      <ClientList db={db} />
      {/* <WeekProgram db={db} /> */}
    </div>
  );
};

export default Home;
