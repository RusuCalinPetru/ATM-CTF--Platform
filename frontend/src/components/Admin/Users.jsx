import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import AppContext from "../Data/AppContext";

function generatePassword(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function Users(props) {
  const globalData = useContext(AppContext);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getUsers(page);
  }, [searchQuery]);

  const getUsers = (index) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/getUsers",
        {
          page: index,
          search: searchQuery,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else if (response.data.state === "error") {
          globalData.alert.error(response.data.message);
        } else {
          setUsers(response.data);
          setPage(index);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  const deleteUser = (e, user) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/deleteUser",
        {
          user: user,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else {
          if (response.data.state === "success") {
            globalData.alert.success("Utilizator sters!");
            getUsers(page);
          } else {
            globalData.alert.error(response.data.message);
            getUsers(page);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addAdmin = (e, user) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/addAdmin",
        {
          user: user,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else {
          if (response.data.state === "success") {
            globalData.alert.success("Utilizatorul este acum admin!");
            getUsers(page);
          } else {
            globalData.alert.error(response.data.message);
            getUsers(page);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const removeAdmin = (e, user) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/removeAdmin",
        {
          user: user,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else {
          if (response.data.state === "success") {
            globalData.alert.success("Admin eliminat!");
            getUsers(page);
          } else {
            globalData.alert.error(response.data.message);
            getUsers(page);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const shadowBan = (e, user) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/shadowBan",
        {
          user: user,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else {
          if (response.data.state === "success") {
            globalData.alert.success("Utilizator suspendat in fundal!");
            getUsers(page);
          } else {
            globalData.alert.error(response.data.message);
            getUsers(page);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const unShadowBan = (e, user) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/unShadowBan",
        {
          user: user,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else {
          if (response.data.state === "success") {
            globalData.alert.success("Suspendare in fundal eliminata!");
            getUsers(page);
          } else {
            globalData.alert.error(response.data.message);
            getUsers(page);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const saveUserAdminPoints = (e, user) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/setUserAdminPoints",
        {
          user: user,
          adminPoints: parseInt(
            document.getElementById(user._id + "admin_points").textContent
          ),
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else {
          if (response.data.state === "success") {
            globalData.alert.success("Puncte admin actualizate!");
            getUsers(page);
          } else {
            globalData.alert.error(response.data.message);
            getUsers(page);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const changeUserPassword = (e, user) => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URI + "/api/admin/changeUserPassword",
        {
          user: user,
          password: document.getElementById(user._id + "new_password")
            .textContent,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.state === "sessionError") {
          globalData.alert.error("Sesiune expirata!");
          globalData.setUserData({});
          globalData.setLoggedIn(false);
          globalData.navigate("/", { replace: true });
        } else {
          if (response.data.state === "success") {
            globalData.alert.success("Parola utilizator schimbata!");
            getUsers(page);
          } else {
            globalData.alert.error(response.data.message);
            getUsers(page);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const previousPage = () => {
    getUsers(page - 1);
  };

  const nextPage = () => {
    getUsers(page + 1);
  };

  return (
    <div>
      <h1
        className="display-1 bold color_white cool"
        style={{ textAlign: "center", marginBottom: "50px" }}
      >
        UTILIZATORI
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
        }}
      >
        <div>
          <button
            className="btn btn-outline-danger btn-shadow"
            onClick={previousPage}
            title="Pagina Anterioara"
          >
            <span className="fa-solid fa-arrow-left"></span>
          </button>
          <button
            className="btn btn-outline-danger btn-shadow"
            onClick={nextPage}
            title="Pagina Urmatoare"
          >
            <span className="fa-solid fa-arrow-right"></span>
          </button>
          <button
            className="btn btn-outline-danger btn-shadow"
            onClick={() => setEditMode(!editMode)}
            title="Mod Editare"
          >
            <span className="fa-solid fa-pencil"></span>
          </button>
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="searchQuery"
            placeholder="Cauta"
            onChange={(e) => {
              setPage(1);
              setSearchQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <table className="table table-hover table-striped">
        <thead className="thead-dark hackerFont">
          <tr>
            <th scope="col" style={{ textAlign: "center" }}>
              #
            </th>
            <th scope="col">Nume Utilizator</th>
            <th scope="col">Categorie</th>
            <th scope="col">Verificat</th>
            <th scope="col">Admin</th>
            <th scope="col">Suspendat</th>
            <th scope="col">Puncte Admin</th>
            {editMode && <th scope="col">Schimba Parola</th>}
            {editMode && <th scope="col">Sterge Utilizator</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.username}>
                <th scope="row" style={{ textAlign: "center" }}>
                  {index + (page - 1) * 100}
                </th>
                <td>
                  <Link
                    to={`/user/${user.username}`}
                    className="text-decoration-none text-light bold"
                  >
                    {user.username}
                  </Link>
                </td>
                <td>{user.category}</td>
                <td>{user.verified.toString()}</td>
                <td>
                  {user.isAdmin.toString()}{" "}
                  {editMode &&
                    (user.isAdmin.toString() === "false" ? (
                      <button
                        className="btn btn-outline-danger btn-shadow"
                        data-toggle="modal"
                        data-target="#confirmModal"
                        onClick={(e) => {
                          props.setAction({
                            function: addAdmin,
                            e: e,
                            data: user,
                          });
                        }}
                        title="Promoveaza"
                      >
                        <span className="fa-solid fa-arrow-up"></span>
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-danger btn-shadow"
                        data-toggle="modal"
                        data-target="#confirmModal"
                        onClick={(e) => {
                          props.setAction({
                            function: removeAdmin,
                            e: e,
                            data: user,
                          });
                        }}
                        title="Retrogradeaza"
                      >
                        <span className="fa-solid fa-arrow-down"></span>
                      </button>
                    ))}
                </td>
                <td>
                  {user.shadowBanned.toString()}
                  {editMode &&
                    (user.shadowBanned.toString() === "false" ? (
                      <button
                        className="btn btn-outline-danger btn-shadow"
                        data-toggle="modal"
                        data-target="#confirmModal"
                        onClick={(e) => {
                          props.setAction({
                            function: shadowBan,
                            e: e,
                            data: user,
                          });
                        }}
                        title="Suspenda in Fundal"
                      >
                        <span className="fa-solid fa-thumbs-down"></span>
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-danger btn-shadow"
                        data-toggle="modal"
                        data-target="#confirmModal"
                        onClick={(e) => {
                          props.setAction({
                            function: unShadowBan,
                            e: e,
                            data: user,
                          });
                        }}
                        title="Anuleaza Suspendare"
                      >
                        <span className="fa-solid fa-thumbs-up"></span>
                      </button>
                    ))}
                </td>
                <td>
                  {editMode ? (
                    <>
                      <span
                        id={user._id + "admin_points"}
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                      >
                        {user.adminPoints}
                      </span>
                      <button
                        className="btn btn-outline-danger btn-shadow"
                        data-toggle="modal"
                        data-target="#confirmModal"
                        onClick={(e) => {
                          props.setAction({
                            function: saveUserAdminPoints,
                            e: e,
                            data: user,
                          });
                        }}
                        title="Salveaza Puncte Admin"
                      >
                        <span className="fa-solid fa-floppy-disk"></span>
                      </button>
                    </>
                  ) : (
                    user.adminPoints
                  )}
                </td>
                {editMode && (
                  <td>
                    <span id={user._id + "new_password"} contentEditable={true} suppressContentEditableWarning={true}>
                      REDACTAT
                    </span>
                    <button
                      className="btn btn-outline-danger btn-shadow"
                      data-toggle="modal"
                      data-target="#confirmModal"
                      onClick={(e) => {
                        props.setAction({
                          function: changeUserPassword,
                          e: e,
                          data: user,
                        });
                      }}
                      title="Salveaza Parola"
                    >
                      <span className="fa-solid fa-floppy-disk"></span>
                    </button>
                  </td>
                )}
                {editMode && (
                  <td>
                    <button
                      className="btn btn-outline-danger btn-shadow"
                      data-toggle="modal"
                      data-target="#confirmModal"
                      onClick={(e) => {
                        props.setAction({
                          function: deleteUser,
                          e: e,
                          data: user,
                        });
                      }}
                      title="Sterge"
                    >
                      <span className="fa-solid fa-minus"></span>
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginBottom: "25px",
        }}
      >
        {/* Pagination Div */}
        <div>
          <button
            className="btn btn-outline-danger btn-shadow"
            onClick={previousPage}
            title="Pagina Anterioara"
          >
            <span className="fa-solid fa-arrow-left"></span>
          </button>
          <button
            className="btn btn-outline-danger btn-shadow"
            onClick={nextPage}
            title="Pagina Urmatoare"
          >
            <span className="fa-solid fa-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;