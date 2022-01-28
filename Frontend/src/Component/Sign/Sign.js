import React, { useContext } from "react";
import SignAuthContext from "../../Context/SignAuthContext";
import qrcode_img from "../../Assets/Images/qr_code.png";
import "../../Component/Sign/Sign.css";
export default function Sign() {
  const { setSignopen } = useContext(SignAuthContext);
  return (
    <div className="sign-container-whole">
      <div className="sign-container">
        <div className="left-container">
          <div className="lc-header">
            <h4>Login to Paytm Mall on your computer</h4>
          </div>
          <div id="id1">1. Open Paytm App</div>
          <div id="id2">
            2. Tap Scan (barcode) option available at the bottom
          </div>
          <div id="id3">3. Point Paytm Scan at QR Code to login</div>
          <div className="watch">
            <i class="material-icons">play_circle_filled</i> Watch Video
          </div>
          <div style={{ margin: "30px 0" }}>
            To create an account download Paytm App
          </div>
          <div className="link-container">
            <div className="gp-link">Google Play</div>
            <div className="as-link">App Store</div>
          </div>
        </div>
        <div className="right-container">
          <div
            className="cross"
            onClick={() => {
              setSignopen(false);
            }}
          >
            X
          </div>
          <div className="qrcode">
            <img src={qrcode_img} alt="" />
          </div>
          <div className="qrcode-line">Scan QR with Paytm App login</div>
        </div>
      </div>
    </div>
  );
}
