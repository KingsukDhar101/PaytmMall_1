import React from "react";
import "../../Styles/Carousels.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../Data/data";

function PrevBtn(props) {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="material-icons" style={{ color: "black" }}>
        chevron_left
      </i>
    </div>
  );
}

function NextBtn(props) {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i class="material-icons" style={{ color: "black" }}>
        chevron_right
      </i>
    </div>
  );
}

export default function Carousels() {
  return (
    <div className="content">
      <h2>Basic Carousel</h2>
      <Slider
        autoplay
        autoplaySpeed={2000}
        dots
        prevArrow={<PrevBtn />}
        nextArrow={<NextBtn />}
        infinite={false}
      >
        {data.map((item) => (
          <div key="$">
            <img src={item} alt="" className="pageimg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
