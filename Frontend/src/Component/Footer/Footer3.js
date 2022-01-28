import React from "react";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Footer_down.css";

export default function Footer3() {
  return (
    <div>
      <footer className="footer" style={{ marginTop: "2rem" }}>
        <h6 style={{ marginLeft: "2rem" }}>
          From Electronics, Fashion to Cars: Buy Everything Online from the
          Convenience of Your Home from Paytm Mall
        </h6>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="footer-col">
              <ul>
                <li className="ss">
                  <Link to="/">
                    Electronics
                    <ArrowDropDownIcon />
                  </Link>
                </li>
                <li className="ss">
                  <Link to="/">
                    Mens and Fashion
                    <ArrowDropDownIcon />
                  </Link>
                </li>
                <li className="ss">
                  <Link to="/">
                    Stationary
                    <ArrowDropDownIcon />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li className="ss">
                  <Link to="/">
                    Mobiles
                    <ArrowDropDownIcon />
                  </Link>
                </li>
                <li className="ss">
                  <Link to="/">
                    Home and Kitchen
                    <ArrowDropDownIcon />
                  </Link>
                </li>
                <li className="ss">
                  <Link to="/">
                    Travel and cards
                    <ArrowDropDownIcon />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li className="ss">
                  <Link to="/">
                    Cars & bike
                    <ArrowDropDownIcon />
                  </Link>
                </li>
                <li className="ss">
                  <Link to="/">
                    Baby, Kids & Toys
                    <ArrowDropDownIcon />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li className="ss">
                  <Link to="/">
                    Super Market
                    <ArrowDropDownIcon />
                  </Link>
                </li>
                <li className="ss">
                  <Link to="/">
                    Car & Bike Accessories
                    <ArrowDropDownIcon />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li className="ss">
                  <Link to="/">
                    Women's Fashion <ArrowDropDownIcon />
                  </Link>
                </li>
                <li className="ss">
                  <Link to="/">
                    Sports & Fitness
                    <ArrowDropDownIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
