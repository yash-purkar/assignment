import "./actionButton.css";

export const ActionButton = ({ title = "Click", onClick = () => {} }) => {
  return (
    <button className="action_button" onClick={onClick}>
      {title}
    </button>
  );
};
