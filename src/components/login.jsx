import { Facebook as FacebookIcon } from "react-bootstrap-icons";
import "../assets/styles/login.css";
import FormLogin from "./formLogin";
import LoginMethod from "./LoginMethod";
// Layout Login
function Login() {
  const inputs = [
    {
      name: "username",
      type: "text",
      label: "Phone number, username, email",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
    },
  ];
  return (
    <div className="fs-14 full-height bg-dark text-white">
      <div className="m-auto w-50 flex-center pt-4">
        <div className="flex-column flex-center gap-3 ">
          <div id="login-container">
            <div id="ins-name" className="text-center pt-5">
              <i></i>
            </div>
            <div className="bg-dark">
              <FormLogin inputs={inputs} button={"Log in"} />
              <div className="flex-center">
                <div className="line"></div>
                <span className="mx-2 text-white">Or</span>
                <div className="line"></div>
              </div>
              <AnotherMethod />
            </div>
          </div>
          <div
            id="register-container"
            className="bg-dark p-4 text-center text-white"
          >
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

// More Login Options
function AnotherMethod() {
  return (
    <div>
      <LoginMethod icon={<FacebookIcon />} text={"Login with Facebook"} />
      <ForgotPassWord />
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
