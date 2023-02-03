import "./client-list.css";
import React from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { getQuery } from "../../utils/firebase.utils";
import { Link } from "react-router-dom";
import { loadUserData } from "../../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const ClientList = ({ db }) => {
  const [clientData, setClientData] = React.useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log("user", user);

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

  const handleClick = (username) => {
    getUserData(username);
  };

  const getUserData = async (stringInput) => {
    const q = await getQuery("users", "user", stringInput);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      if (users.length === 0) {
        alert("error in getting user");
      } else {
        dispatch(loadUserData(users[0]));
      }
      unsubscribe();
    });
  };

  return (
    <div>
      {/* {clientData.map((client) => {
        console.log(client);
        if (client.user !== "Austin Perrine") {
          return (
            <Link
              className="update-link-container"
              to="/edit"
              state={{ client: client }}
            >
              <button
                className="home-client "
                type="button"
                data-hover="Update"
              >
                <span>{`${client.user}`}</span>
              </button>
            </Link>
          );
        }
      })} */}
      {clientData.map((client) => {
        if (client.user !== "Austin Perrine") {
          return (
            <div>
              <button
                className="home-client"
                type="button"
                data-hover="Update"
                onClick={() => handleClick(client.user)}
              >
                <span>{`${client.user}`}</span>
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ClientList;
