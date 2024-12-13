import "./mealType.css";

export const MealType = ({ color }) => {
  return (
    <div
      className="meal_type flex justify-center align-center"
      style={{ border: `1px solid ${color}` }}
    >
      <div className="meal_type_inner" style={{ backgroundColor: color }}></div>
    </div>
  );
};
