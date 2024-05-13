import React, { useEffect, useState } from "react";

import { Card } from "./Cards/Cards";


export default function Featured() {
  const [Cards_Data, setCardsData] = useState([])

  useEffect(() => {
    fetch("/api/get_cards").then(
      response => response.json()
    ).then(data => {
      // Set the returned data to the state
      setCardsData(data);
    }).catch(error => {
      console.error("There was an error fetching the cards:", error);
    })
  }, [])
  
    return (
      <section id="featured">
        <h2 class="section__title">
            Featured Products
        </h2>
        <div className="App">
          <div className="col">
          {Cards_Data.length > 0 ? (
          Cards_Data.map((card, i) => (
            <Card key={card.id_card}
                imgSrc={`/${card.image_card}`}
                imgAlt={`/${card.image_card}`}
                title={card.title_card}
                description={card.description_card}
                buttonText="Learn More"
                link={card.image_card}
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
  