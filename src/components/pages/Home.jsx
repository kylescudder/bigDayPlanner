import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import Loading from '../misc/Loading'

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { userData } = useContext(UserContext);
  useEffect(() => {
    console.log(userData)
    if (userData.user) {
      setIsLoading(false);
    }
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
            <section id="cover" className="min-vh-100">
              <div id="cover-caption">
                <div className="container">
                  <div className="row text-white">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                      <h1 className="display-4 py-2 text-truncate">Bye!</h1>
                      <div className="px-2">
                        <form
                          onSubmit={submit}
                          className="justify-content-center"
                        >
                          <input
                            type="submit"
                            value="Log in again"
                            className="btn btn-primary btn-lg mt-4"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
