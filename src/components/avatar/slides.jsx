import "./avatar.css";
import slide1 from "./images/slide1.svg";
import slide2 from "./images/slide2.svg";
import slide3 from "./images/slide3.svg";
import slide4 from "./images/slide4.svg";
import slide5 from "./images/slide5.svg";
const slides = {
  1: slide1,
  2: slide2,
  3: slide3,
  4: slide4,
  5: slide5,
};
export default function Slide(props) {
  // eslint-disable-next-line react/prop-types
  const UniqueSlide = slides[props.value];
  return (
    <img
      src={UniqueSlide}
      // eslint-disable-next-line react/prop-types
      alt={`Slide ${props.value}`}
      className={`slide ${
        // eslint-disable-next-line react/prop-types
        props.isActive ? "active" : props.isPrevious ? "previous" : "next"
      }`}
    />
  );
}
