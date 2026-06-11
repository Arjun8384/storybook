import "./Button.css";

function Button({
  label,
  variant = "primary",
  disabled = false,
  onClick,
}) {
  return (
    <button
      className={`btn ${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;