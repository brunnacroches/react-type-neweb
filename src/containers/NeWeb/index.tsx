import React from "react";
import title from "../../components/Title";
import "./style.css";
import button from "../../components/Button";
import cancelorder from "../../components/Cancel";
import change from "../../components/Change";
import price from "../../components/Price";
import iconMusic from "../../assets/icon/icon-music.svg";
import hero from "../../assets/icon/illustration-hero.svg";
import patternDesk from "../../assets/icon/pattern-background-desktop.svg";
import patternMobile from "../../assets/icon/pattern-background-mobile.svg";



import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

//   <div className="WebNew__patternDesk">
//   <img 
//     className="WebNew__patternDesk__icon"
//     src={patternDesk}
//     alt="webnew view"
//   />
// </div>




}) => {
  return (
    <div className="WebNew">
      <div className="WebNew__hero">
        <img 
        className="WebNew__hero__icon"
        src={hero}
        alt="webnew view"
        />
      </div>
      <Title text= {title} />
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
          <p className="WebNew__plan__title__description">
            {titleDescription}
          </p>
          <div className="WebNew__plan__title__description__sub">
            <p className="WebNew__plan__title__description__sub__price">${price}/year</p>
          </div>
        </div>
        <div className="WebNew__plan__change">
          <p className="WebNew__plan__cange__text">
            {change}
          </p>
        </div>
      </div>
      <div className="WebNew__button">
        <div className="WebNew__button__card">
          <p className="WebNew__button__card__text">
            {button}
          </p>
        </div>
      </div>
      <div className="WebNew__button__cancelOrder">
        <div className="WebNew__button__cancelOrder__card">
          <p className="WebNew__button__cancelOrder__card__text">
            {cancelorder}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeWeb; 