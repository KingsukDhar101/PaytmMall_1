import React from "react";
import "../../Styles/Carousels.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { groupData } from "../../Data/bigimage";

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

export default function PageCarousels() {
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
        {groupData.map((item) => (
          <div key="$" className="page-container">
            <div className="left">
              <img src={item.i1} alt="" className="left-img" />
            </div>
            <div className="right">
              <div className="right-top">
                <img src={item.i2} alt="" className="rightTop-img" />
              </div>
              <div className="right-bottom">
                <img src={item.i3} alt="" className="rightBottom-img" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
