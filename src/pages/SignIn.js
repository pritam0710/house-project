import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  const formOnChange = (evt) => {
    setFormData((prevState) => ({
      ...prevState,
      [evt.target.id]: [evt.target.value],
    }));
  };

  const showPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form>
          <input
            type="email"
            className="emailInput"
            id="email"
            onChange={formOnChange}
            placeholder="Email"
            value={email}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              onChange={formOnChange}
              value={password}
              id="password"
              placeholder="Password"
              className="passwordInput"
            />
            <img
              src={visibilityIcon}
              alt="showPassword"
              className="showPassword"
              onClick={showPasswordHandler}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password?
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        {/* oauth */}
        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
}

export default SignIn;
