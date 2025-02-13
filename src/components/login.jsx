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
    <div className="fs-14 vh-100 bg-dark text-white">
      <div className="m-auto w-50 flex-center pt-4">
        <div className="flex-column flex-center gap-3 ">
          <div id="login-container">
            <div className="label-ins"></div>
            <div className="bg-dark p-5">
              <FormLogin inputs={inputs} />
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
