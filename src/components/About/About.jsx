import "./about.css";

export const About = () => {
  return (
    <div>
      <p className="sub-heading">About</p>
      <ul className="about_info">
        <li className="text-secondary">
          Tucked away cosily in the lap of nature, this is the perfect
          destination getaway for a vacation trip near Delhi and Chandigarh. The
          tourist-favourite Bhimtal Lake is only a stone’s throw away. Read more
        </li>
        <li className="text-secondary">
          The tourist-favourite Bhimtal Lake is only a stone’s throw away.{" "}
          <a href="#" className="read_more">Read More</a>
        </li>
      </ul>

      <div className="flex wrap gap-05">
        {[
          "House Rules",
          "Cancellation Policy",
          "Things you need to know",
          "Things to do",
        ].map((item, i) => (
          <button className={`about_action ${i===0 ? "first_about_action" :""}`} key={i}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
