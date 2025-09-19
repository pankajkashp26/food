import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // const btn="Login";
  const [btnLogin, setbtnLogin] = useState("LogIn");

  //if no dependcy array useeffect will render every time the component render
  //if there is empty array as dependcy array the useeffect render only initila (only once )
  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo_img">
        <Link to="/">
          <img src={LOGO_URL} />
        </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">AboutUs</Link>
            </li>
            <li>
              <Link to="/contact">ContactUs</Link>
            </li>
            <li>
              {" "}
              <button
                className="login_btn"
                onClick={() => {
                  btnLogin == "LogIn"
                    ? setbtnLogin("LogOut")
                    : setbtnLogin("LogIn");
                }}
              >
                {btnLogin}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
