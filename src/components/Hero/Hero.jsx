import { useState } from "react";
import "./Hero.css";
import logo_1 from "../../assets/moonbase_logo_1.svg";
import logo_2 from "../../assets/moonbase_logo_2.svg";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="container">
      <div
        className="img-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          src={isHovering ? logo_2 : logo_1}
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
