import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const guestList = () => history.push("/guest/list");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push('/login')
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <section>
          <div className="float-left">
            <button
              className="btn btn-link text-white mr-2"
              onClick={guestList}
            >
              Guests
            </button>
          </div>
          <div className="float-right">
            <button className="btn btn-primary mr-2" onClick={logout}>
              Logout
            </button>
          </div>
        </section>
      ) : (
        <></>
        // <section>
        //   <div className="float-right">
        //     <button className="btn btn-primary mr-2" onClick={register}>
        //       Sign Up
        //     </button>
        //     <button className="btn btn-primary mr-2" onClick={login}>
        //       Login
        //     </button>
        //   </div>
        // </section>
      )}
    </nav>
  );
}

export default AuthOptions;
