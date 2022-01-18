import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";

function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const guests = () => {
    history.push("/admin/guest/list");
  };
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/admin/login");
  };
  const login = () => {
    history.push('/admin/login')
  };
  return (
    <nav className="auth-options">
      {userData.user ? (
        <section>
          <div className="float-left">
            <button className="btn btn-link mr-2 text-white" onClick={guests}>
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
          <div></div>
      )}
    </nav>
  );
}

export default AuthOptions;
