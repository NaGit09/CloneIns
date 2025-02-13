import { Facebook as FacebookIcon } from "react-bootstrap-icons";
import "../assets/styles/login.css";
import { useState } from "react";
// Layout Login
function Login() {
  return (
    <div className="fs-14">
      <div className="m-auto w-50 d-flex justify-content-center align-items-center">
        <div class=" d-flex flex-column justify-content-center align-items-center gap-3">
          <div id="login-container">
            <div className="label-ins"></div>
            <div className="bg-dark p-5">
              <FormLogin />
              <div className="d-flex justify-content-center align-items-center">
                <div className="line"></div>
                <span className="mx-2 text-white">Or</span>
                <div className="line"></div>
              </div>
              <AnotherMethod />
            </div>
          </div>
          <div id="register-container" className="bg-dark p-4 text-center text-white">
            Don't have an account?{" "}
            <a href="" className="text-decoration-none">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Form Login
function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <form action="">
      <div className="mb-3 w-100 border position-relative">
        <label htmlFor="username" className="w-100">
          <span
            className={`label-text w-100 ${
              username.length > 0 ? "label-active" : ""
            }`}
          >
            Phone number, username or email
          </span>
          <input
            type="text"
            className={`form-control ${
              username.length > 0 ? "input-active" : ""
            }`}
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3 d-flex align-items-center w-100 border position-relative">
        <label htmlFor="password" className="w-100">
          <span
            className={`label-text ${
              password.length > 0 ? "label-active" : ""
            }`}
          >
            Password
          </span>
          <input
            type={showPassword ? "text" : "password"}
            className={`form-control ${
              password.length > 0 ? "input-active" : ""
            }`}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </label>
        <div
          id="hidden-password"
          className={password.length > 0 ? "px-2" : " px-2 invisible"}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

// More Login Options
function AnotherMethod() {
  return (
    <div>
      <FacebookLoginButton />
      <ForgotPassWord />
    </div>
  );
}

// Facebook Login Button
function FacebookLoginButton() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary text-primary justify-content-center d-flex align-items-center bg-transparent gap-2 border-0"
      >
        <FacebookIcon />
        <span className="method-name">Login with Facebook</span>
      </button>
    </div>
  );
}

// Forgot Password
function ForgotPassWord() {
  return (
    <div className="text-center mt-1">
      <a href="#" className="text-decoration-none text-white">
        Forgot password?
      </a>
    </div>
  );
}

export default Login;
