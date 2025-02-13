import { useState } from "react";
import TextInput from "./textInput";
import PassInput from "./passInput";
const FormLogin = ({ inputs }) => {
  const [formValues, setFormValues] = useState(
    inputs.reduce((acc, input) => ({ ...acc, [input.name]: "" }), {})
  );
  const handleChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form action="">
      {inputs.map((input) => {
        if (input.name === "password") {
          return (
            <PassInput
              key={input.name}
              name={input.name}
              label={input.label}
              value={formValues[input.name]}
              onChange={(e) => handleChange(input.name, e.target.value)}
            />
          );
        } else {
          return (
            <TextInput
              key={input.name}
              type={input.type}
              name={input.name}
              label={input.label}
              value={formValues[input.name]}
              onChange={(e) => handleChange(input.name, e.target.value)}
            />
          );
        }
      })}
      <button
        type="submit"
        className={`btn btn-primary ${
          Object.values(formValues).some((value) => value === "")
            ? "disabled"
            : ""
        }`}
      >
        Login
      </button>
    </form>
  );
};
export default FormLogin;
