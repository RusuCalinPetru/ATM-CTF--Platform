import { useEffect, useContext } from "react";
import AppContext from "./Data/AppContext";
import axios from "axios";
function Logout(props) {
  const globalData = useContext(AppContext);
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URI + "/api/logout", { withCredentials: true });
    globalData.alert.success("Deconectat!");
    globalData.setUserData({});
    globalData.setLoggedIn(false);
    globalData.navigate("/", { replace: true });
  }, []);
  return (
    <>
      <h3 className="bold">
        <span className="color_danger">DECONECTARE</span>
        <span className="color_white"> IN CURS...</span>
      </h3>
    </>
  );
}
export default Logout;