import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebase.config";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
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

  const onSubmitHandler = async (evt) => {
    console.log(formData);
    evt.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="nameInput"
            id="name"
            placeholder="Name"
            value={name}
            onChange={formOnChange}
          />
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
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#fff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
}

export default SignUp;
