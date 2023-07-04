import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footertext-container">
        <div className="footer-text">
          <ul>
            <h4>Adress:</h4>
            <li>Lillåvägen 112b</li>
            <li>12846 Bagarmossen</li>
            <h4>Telefon</h4>
            <li>0730512284</li>
            <h4>Epost:</h4>
            <li>booking.b@burgers.se</li>
            <h4>Hemsida:</h4>
            <li>Burgers.se</li>
          </ul>
        </div>
        <div className="footer-text">
          <ul>
            <h4>Öppettider</h4>
            <li>Måndag - torsdag 16.00-22.00</li>
            <li>Fredag 11.30 - 23.00</li>
            <li>Lördag 12-23-30</li>
            <li>Söndag 12.00-22.00</li>
          </ul>
        </div>
      </div>
      {/* <div className="footer-paymentsicons-container">
        <div className="payment-icon">
          <img
            className="cirkel-img"
            src="images/klarna.png"
            alt="Icon-bild klarna"
          />
        </div>
        <div className="payment-icon">
          <img
            className="cirkel-img"
            src="images/klarna.png"
            alt="Icon-bild klarna"
          />
        </div>
        <div className="payment-icon">
          <img
            className="cirkel-img"
            src="images/klarna.png"
            alt="Icon-bild klarna"
          />
        </div>
        <div className="payment-icon">
          <img
            className="cirkel-img"
            src="images/klarna.png"
            alt="Icon-bild klarna"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
