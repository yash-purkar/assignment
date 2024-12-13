import { RoomCard } from "./components/RoomCard/RoomCard";
import "./roomAndBeds.css";
export const RoomsAndBeds = () => {
  return (
    <div>
      <p className="sub-heading">Rooms & Beds</p>

      <div className="flex gap-1 room_cards_container">
        {[...new Array(5)].map((room, i) => (
          <RoomCard key={i} {...room} />
        ))}
      </div>
    </div>
  );
};
