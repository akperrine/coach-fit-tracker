import "./home.css";
import React, { useEffect } from "react";
import WorkoutDay from "../../components/WeekProgram/WorkoutDay/workoutDay";
import ClientList from "../../components/Client-List/client-list";
import WeekProgram from "../../components/WeekProgram/week-program";
import { db } from "../../utils/firebase.utils";

const Home = () => {
  const [currentClient, setCurrentClient] = React.useState({});
  return (
    <div className="home">
      <h2 className="welcome-header">Welcome Austin</h2>
      <p>Active Clients</p>
      <ClientList db={db} />
    </div>
  );
};

export default Home;
