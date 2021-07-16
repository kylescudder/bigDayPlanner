import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import ErrorNotice from "../../components/misc/ErrorNotice";
import Loading from "../misc/Loading";
import api from "../../api";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginResponse = await api.loginUser(loginUser);

      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);
      setIsLoading(false);
      history.push("/");
    } catch (err) {
      setIsLoading(false);
      if (typeof err.response === 'undefined') {
        setError('Server unresponsive');
        return false;
      } else {
        err.response.data.msg && setError(err.response.data.msg);
      }
    }
  };

  return (
    <section id="cover" className="loginImage marginRemover">
      <div id="cover-caption">
        <div className="container">
          <div className="row text-white">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
              <h1 className="display-4 py-2 text-truncate">Login</h1>
              <div className="px-2">
                {error && (
                  <ErrorNotice
                    message={error}
                    clearError={() => setError(undefined)}
                  />
                )}
                <form onSubmit={submit} className="justify-content-center">
                  <div className="form-group">
                    <label className="sr-only">Email: </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Jane Doe"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Password: </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="jane.doe@example.com"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {isLoading ? (
                    <input
                      type="submit"
                      value="loading..."
                      className="btn btn-primary btn-lg"
                    />
                  ) : (
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-lg"
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
