import React from "react";
import title from "../../components/Title";
import "./style.css";
import Button from "../../components/Button";
import cancelorder from "../../components/Cancel";
import change from "../../components/Change";
import price from "../../components/Price";
import iconMusic from "../../assets/icon/icon-music.svg";
import hero from "../../assets/icon/illustration-hero.svg";
import patternDesk from "../../assets/icon/pattern-background-desktop.svg";
import patternMobile from "../../assets/icon/pattern-background-mobile.svg";

import Title from "../../components/Title";

export interface NeWebProps {
  button: string;
  cancelorder: string;
  change: string;
  price: number;
  title: string;
  description: string;
  titleDescription: string;
}

const NeWeb: React.FC<NeWebProps> = ({
  button,
  change,
  price,
  title,
  cancelorder,
  description,
  titleDescription,
}) => {
  return (
    <div className="WebNew">
      <div className="WebNew__hero">
        <img className="WebNew__hero__icon" src={hero} alt="webnew view" />
      </div>
      <Title text={title} />
      <p className="WebNew__description">{description}</p>
      <div className="WebNew__plan">
        <div className="WebNew__plan__planMusic">
          <img
            className="WebNew__plan__planMusic__icon"
            src={iconMusic}
            alt="webnew view"
          />
        </div>
        <div className="">
          <p className="WebNew__plan__title__description">{titleDescription}</p>
          <div className="WebNew__plan__title__description__sub">
            <p className="WebNew__plan__title__description__sub__price">
              ${price}/year
            </p>
          </div>
        </div>
        <div className="WebNew__plan__change">
          <p className="WebNew__plan__cange__text">{change}</p>
        </div>
      </div>
      <div className="WebNew__button">
        <Button text={button} />
        {/* <div className="WebNew__button__card">
          <p className="WebNew__button__card__text">
            {button}
          </p>
        </div> */}
      </div>
      <div className="WebNew__button__cancelOrder">
        <Button variant="outlined" text={cancelorder} />
        {/* <div className="WebNew__button__cancelOrder__card">
          <p className="WebNew__button__cancelOrder__card__text">
            {cancelorder}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default NeWeb;
