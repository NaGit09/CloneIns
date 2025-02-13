// Facebook Login Button
const LoginMethod = ({ icon, text }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary text-primary flex-center bg-transparent gap-2 border-0"
      >
        {icon}
        <span className="method-name">{text}</span>
      </button>
    </div>
  );
};
export default LoginMethod;
