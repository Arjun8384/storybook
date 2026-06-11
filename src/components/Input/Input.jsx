import "./Input.css";

function Input({
  placeholder = "Enter text...",
  disabled = false,
  error = false,
}) {
  return (
    <input
      className={`input ${error ? "error" : ""}`}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default Input;