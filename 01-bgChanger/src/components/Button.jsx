const Button = ({ color, name, onClick }) => {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
export default Button;
