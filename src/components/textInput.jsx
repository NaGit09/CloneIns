const TextInput = ({ type, name, label, value, onChange }) => {
  return (
    <div className="mb-3 w-100 border position-relative">
      <label htmlFor={name} className="w-100">
        <span
          className={`label-text w-100 ${
            value.length > 0 ? "label-active" : ""
          }`}
        >
          {label}
        </span>
        <input
          type={type}
          className={`form-control ${value.length > 0 ? "input-active" : ""}`}
          id={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
      </label>
    </div>
  );
};
export default TextInput;
