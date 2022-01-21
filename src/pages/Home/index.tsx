import React from "react";
import "./style.css";
import Button from "../../components/Button";
import Cancel from "../../components/Cancel";
import Change from "../../components/Change";
import Price from "../../components/Price";
import Title from "../../components/Title";
import NeWeb from "../../containers/NeWeb";

import "./style.css";

import patternDesk from "../../assets/icon/pattern-background-desktop.svg";
import patternMobile from "../../assets/icon/pattern-background-mobile.svg";

const Home = () => {
  return (
    <div className="home">
      {/* <img 
        className="WebNew__patternDesk__icon"
        src={patternDesk}
        alt="webnew view"
    /> */}
      <NeWeb 
      button="Proceed to Payment"
      cancelorder="Cancel Order"
      change="Change"
      price={59.99}
      title="Order Summary"
      description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
      titleDescription="Annual Plan"
      />
    </div>
  );
};

export default Home;