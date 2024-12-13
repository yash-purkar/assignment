import "./tag.css";

export const Tag = ({ title, icon, needPoint }) => {
  return (
    <>
      <div className="tag flex align-center">
        {icon} {title}
      </div>
      {needPoint && <p className="point">. </p>}
    </>
  );
};
