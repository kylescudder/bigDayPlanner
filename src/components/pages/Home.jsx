import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Loading from "../misc/Loading";
import api from "../../api";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { userData } = useContext(UserContext);
  const [guestData, setGuestData] = useState([]);

  useEffect(() => {
    async function getGuestGroup() {
      try {
        if (userData.user) {
          setIsLoading(false);
        }
        const res = await api.getGuestGroup();
        setGuestData(res.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        window.location.href = `/admin/login`;
      }
    }

    getGuestGroup();
  }, []);

  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <div className="body">
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="row">
              <div className="col">
                <h1 className="homeHeader">Welcome </h1>
                {guestData.map((guest, index) => {
                  if (guestData.length === 1) {
                    return (
                      <h1 className="homeHeader">{guest.forename}</h1>
                    );
                  } else {
                    if (index === guestData.length - 1) {
                      return (
                        <h1 className="homeHeader">and {guest.forename} </h1>
                      );
                    } else {
                      if (index !== 0) {
                        return <h1 className="homeHeader">, {guest.forename} </h1>;
                      } else {
                        return (
                          <h1 className="homeHeader">{guest.forename}</h1>
                        );
                      }
                    }
                  }
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
