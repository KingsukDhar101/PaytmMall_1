import React from "react";
import "../../../Styles/Carousels.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExMobTabGridScroll } from "../../../Data/exMobTabGrid";

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

function Card({ item }) {
  return (
    <div className="card-container">
      <img src={item} alt="" className="boximg" />
    </div>
  );
}

export default function ExMobs() {
  return (
    <div className="content">
      <Slider {...carouselProperties}>
        {ExMobTabGridScroll.map((item) => (
          <div key="$">
            <Card item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}