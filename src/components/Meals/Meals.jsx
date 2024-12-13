import { MealType } from "./components/MealType/MealType";
import { ActionButton } from "../ActionButton/ActionButton";
export const Meals = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="sub-heading">Meals</p>
      <p className="meals_info text-secondary">
        A cook is available to prepare local specialities and a delicious spread
        of home-cooked meals all day, at an additional charge
      </p>
      <div className="flex meals_box">
        <div className="flex align-center gap-05">
          <MealType color="green" /> Veg
        </div>
        <div className="flex align-center gap-05">
          <MealType color="red" /> Non Veg
        </div>
      </div>
      <div className="flex gap-05">
        <ActionButton title="View all Amenities" />
        <ActionButton title="View all Amenities" />
      </div>
    </div>
  );
};
