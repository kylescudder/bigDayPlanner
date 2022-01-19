import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Loading from '../misc/Loading'
import api from "../../api";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { userData } = useContext(UserContext);
  
  useEffect(() => {
    if (userData.user) {
      setIsLoading(false);
    }
    if (localStorage.getItem('guestGroupID') != null) {
      setIsLoading(false)
      getGuestGroup()
    }
    async function getGuestGroup() {
      try {
        const res = await api.getGuestGroup();
        const data = res.data.data;
        const nameList = document.getElementById('lblNameList')
        data.forEach((element) => {
          nameList.innerHTML += element.Name;
        });
        console.log(nameList)
        setIsLoading(false);
      } catch (err) {
        window.location.href = `/admin/login`;
      }
    }

  }, [userData]);
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
            <div>
              <h1>Welcome {userData.user.displayName}</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
