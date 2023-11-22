import { useState, useEffect } from "react";
import Slide from "./slides";
import "./avatar.css";
const Avatar = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count % 5) + 1);
    }, 1200);
    return () => clearTimeout(timer);
  });
  return (
    <div className="avatar">
      {[1, 2, 3, 4, 5].map((slideNumber) => (
        <Slide
          key={slideNumber}
          value={slideNumber}
          isActive={slideNumber === count}
          isPrevious={
            slideNumber === count - 1 || (count === 1 && slideNumber === 5)
          }
          isNext={
            slideNumber === count + 1 || (count === 5 && slideNumber === 1)
          }
        />
      ))}
    </div>
  );
};

export default Avatar;
