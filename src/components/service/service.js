import React, { useEffect, useState } from "react";
import './service.css'
import { ServiceCard } from "../serviceCards/ServiceCards.jsx";

export default function Services() {
  const [Cards_Data, setCardsData] = useState([])

  useEffect(() => {
    fetch("/api/public/services/list").then(
      response => response.json()
    ).then(data => {
      // Set the returned data to the state
      setCardsData(data.data);
    }).catch(error => {
      console.error("There was an error fetching the services:", error);
    })
  }, [])
  
    return (
      <section id="service">
        <h2 class="section__title">
            Services
        </h2>

        <div className="service_line">
          {Cards_Data?.map((card, i) => (
            <ServiceCard key={card.id}
                imgSrc={`/${card.image_path}`}
                imgAlt={`/${card.image_path}`}
                title={card.title}
                description={card.description}
                />

          ))
}
         
        </div>

      </section>
    )
  }
  