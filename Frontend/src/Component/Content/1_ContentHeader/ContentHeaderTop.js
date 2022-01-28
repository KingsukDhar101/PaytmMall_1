import React from "react";
import "../../../Styles/Carousels.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ch_scroll1 } from "../../../Data/ch_scroll";

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

const carouselProperties = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  prevArrow: <PrevBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 10,
  slidesToScroll: 2,
  infinite: false,
  responsive: [
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 531,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 868,
      settings: {
        slidesToShow: 7,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 8,
      },
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 9,
      },
    },
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 10,
      },
    },
  ],
};

export default function CententHeaderTop() {
  return (
    <div className="content">
      <Slider {...carouselProperties}>
        {ch_scroll1.map((item) => (
          <div key="$">
            <Card item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="card-container">
      <img src={item.img} alt="" className="boximg" />
      <p className="line1">{item.name}</p>
    </div>
  );
}
