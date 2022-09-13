import "./client-list.css";
import React from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

const ClientList = ({ db }) => {
  const [clientData, setClientData] = React.useState([]);

  React.useEffect(() => {
    const getClientData = async () => {
      const clientRef = collection(db, "users");

      const unsubscribe = onSnapshot(clientRef, (snapshot) => {
        const array = [];
        snapshot.docs.forEach((doc) => {
          array.push({ ...doc.data(), id: doc.id });
        });
        setClientData(array);
        unsubscribe();
      });
    };
    getClientData();
  }, []);

  return (
    <div>
      {clientData.map((client) => {
        return (
          <Link to="/edit" state={{ client: client }}>
            <h3>{`${client.user}`}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default ClientList;
