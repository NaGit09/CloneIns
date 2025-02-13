import { useState } from "react";
import "../assets/styles/passInput.css";
const PassInput = ({ name, label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-3 flex-center w-100 border position-relative">
      <label htmlFor={name} className="w-100">
        <span
          className={`label-text ${value.length > 0 ? "label-active" : ""}`}
        >
          {label}
        </span>
        <input
          type={showPassword ? "text" : "password"}
          className={`form-control ${value.length > 0 ? "input-active" : ""}`}
          id="password"
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </label>
      <div
        id="hidden-password"
        className={value.length > 0 ? "px-2" : " px-2 invisible"}
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </div>
    </div>
  );
};
export default PassInput;
