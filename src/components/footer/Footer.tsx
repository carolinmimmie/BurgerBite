import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footertext-container">
        <div className="footer-text">
          <ul>
            <h4 className="footer-header">Address:</h4>
            <li>Lillåvägen 112b</li>
            <li>12846 Bagarmossen</li>
            <h4>Telefon</h4>
            <li>0730512284</li>
            <h4>E-mailt:</h4>
            <li>booking.b@burgers.se</li>
            <h4>Website:</h4>
            <li>Burgers.se</li>
          </ul>
        </div>
        <div className="footer-text">
          <ul>
            <h4 className="footer-header">Opening hours</h4>
            <li>Monday - thursday 16.00-22.00</li>
            <li>Friday 11.30 - 23.00</li>
            <li>Saturday 12-23-30</li>
            <li>Sunday 12.00-22.00</li>
          </ul>
        </div>
        <div className="footer-text">
          <h4 className="footer-header">Follow us</h4>
          <div className="footer-socialmediaicons-container">
            <div className="socialmedia-icon">
              <FacebookIcon />
            </div>
            <div className="socialmedia-icon">
              <InstagramIcon />
            </div>
            <div className="socialmedia-icon">
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-paymentsicons-container">
        <div className="payment-icon">
          <img
            className="payment-img"
            src="https://www.svgrepo.com/show/508701/mastercard-full.svg"
            alt="Icon-bild mastercard"
          />
        </div>
        <div className="payment-icon">
          <img
            className="payment-img"
            src="https://www.svgrepo.com/show/508698/maestro-subtext.svg"
            alt="Icon-bild maestro"
          />
        </div>
        <div className="payment-icon">
          <img
            className="payment-img"
            src="https://www.svgrepo.com/show/328127/visa.svg"
            alt="Icon-bild visa"
          />
        </div>
        <div className="payment-icon">
          <img
            className="payment-img"
            src="https://www.svgrepo.com/show/266070/visa.svg"
            alt="Icon-bild visa"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
