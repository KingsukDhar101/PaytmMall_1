import React from "react";
import "../../Styles/Carousels.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { multiData } from "../../Data/data";

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
  dots: true,
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

export default function MultiCarousels() {
  return (
    <div className="content">
      <h2>Multi-Carousel</h2>
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
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
      <img src={item} alt="" className="boximg" />
      <p className="line1">line-$</p>
      <p className="line2">line-$</p>
      <p className="line3">line-$</p>
    </div>
  );
}
