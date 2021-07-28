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
        if (document.location.href.indexOf('guestLanding') === -1) {
          const landingImage = document.querySelector('.landingImage')
          landingImage.classList.remove('landingImage')
          const tokenResponse = await api.tokenIsValid();
          if (tokenResponse.data) {
            const userRes = await api.getUser()
            setUserData({
              token,
              user: userRes.data,
            });
          }
        } else {
          setTimeout(() => {
            const landingImage = document.querySelector('.landingImage')
            landingImage.classList.add('d-none');
            const siteContent = document.querySelector('.siteContent')
            siteContent.classList.add('fadeIn');
          }, 4000);
        }
      } catch (err) {
        console.log(err)
      }

    }


    checkLoggedIn();
  }, []);

  return (
    <div>
      <div className="landingImage">
      </div>
      <div className="siteContent">
        <BrowserRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
            <Routes />
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
