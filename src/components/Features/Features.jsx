import "./features.css";
import { IoStar } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { Tag } from "./components/Tag/Tag";

const TAGS = [
  {
    title: "Entire Villa",
    icon: <IoHomeOutline />,
  },
  {
    title: "Entire Villa",
    icon: <FaRegHeart />,
  },
  {
    title: "Entire Villa",
    icon: <IoHomeOutline />,
  },
  {
    title: "Entire Villa",
    icon: <IoHomeOutline />,
  },
];

export const Features = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex align-center ratings">
          <div>
            <IoStar style={{ fill: "#ffb800" }}/>
          </div>
          <p>4.5/5</p>
          <p>|</p>
          <p className="text-underline">105 reviews</p>
        </div>

        <div className="flex align-center gap-05 wrap">
          <button className="features_action">
            <IoMdShare color="white" className="icon" />
          </button>
          <button className="features_action">
            <FaRegHeart color="white" className="icon" />
          </button>
        </div>
      </div>
      {/* Tags */}
      <div className="flex wrap">
        {TAGS?.map((data, i) => (
          <Tag
            key={i}
            icon={data.icon}
            title="Entire Villa"
            needPoint={i < TAGS.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
