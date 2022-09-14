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
          <Link
            className="update-link-container"
            to="/edit"
            state={{ client: client }}
          >
            <button className="home-client " type="button" data-hover="Update">
              <span>{`${client.user}`}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ClientList;
