import "./amenities.css";
import { ActionButton } from "../ActionButton/ActionButton";
import { IoBedOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { RiParkingBoxLine } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
const data = [
  {
    name: "4 Bedrooms",
    icon: <IoBedOutline />,
  },
 
  {
    name: "Free parking",
    icon: <RiParkingBoxLine />,
  },
  {
    name: "12 Guests",
    icon: <FaUserFriends />,
  },
  {
    name: "Air conditioning",
    icon: <TbAirConditioning />,
  },
];

export const Amenities = () => {
  return (
    <div>
      <p className="sub-heading">Amenities</p>
      <div className="flex justify-between amenitieis_container ">
        {" "}
        <div>
          {data?.slice(0, 2)?.map((item, i) => (
            <div key={i} className="flex gap-05 amenite">
              <span>
                {item?.icon}
              </span>
              {item?.name}
            </div>
          ))}
        </div>
        <div>
          {data?.slice(2, 4)?.map((item, i) => (
            <div key={i} className="flex gap-05 amenite">
              <span>
                {item?.icon}
              </span>
              {item?.name}
            </div>
          ))}
        </div>
      </div>
      <ActionButton title="View all Amenities" />
    </div>
  );
};
