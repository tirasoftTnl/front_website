import React, { useEffect, useState } from "react";
import './featured.css'
import { Card } from "../Cards/Cards";

export default function Featured() {
  const [Cards_Data, setCardsData] = useState([])

  useEffect(() => {
    fetch("/api/public/products/list").then(
      response => response.json()
    ).then(data => {
      // Set the returned data to the state
      setCardsData(data.data);
    }).catch(error => {
      console.error("There was an error fetching the cards:", error);
    })
  }, [])
  
    return (
      <section className="featured__container" id="featured">
        <h2 className="section__title">
            Featured Products
        </h2>
        <div className="App">
          <div className="col">
          {Cards_Data.length > 0 ? (
          Cards_Data.map((card, i) => (
            <Card key={card.id}
                imgSrc={`/${card.image_path}`}
                imgAlt={`/${card.image_path}`}
                title={card.title}
                description={card.description}
                buttonText="Learn More"
                link={card.image_path}
                />
          ))
          ) : (
          <p>Loading...</p>)
         }
          </div>
        </div>
      </section>
    )
  }
  