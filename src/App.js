import React, {useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
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
      const tokenResponse = await api.tokenIsValid();

      if (tokenResponse.data) {
        console.log(tokenResponse.data)
        const userRes = await api.getUser() 
        console.log(userRes.data)
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);

  return (
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <Routes />
          </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
