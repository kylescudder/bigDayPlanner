import React, {useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/userContext';
import './App.css';
import Routes from './Routes'
import api from './api'

function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      try {
        const tokenResponse = await api.tokenIsValid();
        if (tokenResponse.data) {
          const userRes = await api.getUser() 
          setUserData({
            token,
            user: userRes.data,
          });
        }
      } catch (err) {
        console.log(err)
      }

    }

    checkLoggedIn();
  }, []);

  return (
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Routes />
          </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
