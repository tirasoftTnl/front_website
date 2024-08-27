import React from "react";
import "./Cards.css";
export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="cards__container">
      <div className="card__container">
        <article className="card__article">
          {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt} className="card__img" />)}
          <div class="card__data">
              {title && <h2 class="card__title">{title}</h2>}
              {//buttonText && link && (<a href={link} className="card__button">{buttonText}</a>)
              }
              {description && <span class="card__description">{description}{description}</span>}
          </div>
        </article>
      </div>
    </div>
  );
};