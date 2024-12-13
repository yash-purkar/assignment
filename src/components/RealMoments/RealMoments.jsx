import { MomentCard } from "./components/MomentCard/MomentCard";
import "./realMoments.css";
export const RealMoments = () => {
  return (
    <div>
      {" "}
      <p className="sub-heading">Real Moments</p>
      <div className="flex moment_cards_container gap-1">
        {[...new Array(5)].map((moment, i) => (
          <MomentCard key={i} {...moment} />
        ))}
      </div>
    </div>
  );
};
