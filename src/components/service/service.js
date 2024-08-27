import React, { useEffect, useState } from "react";
import './service.css'
import { ServiceCard } from "../serviceCards/ServiceCards.jsx";
import { motion } from "framer-motion";
import { fadeIn } from '../../Effects/Variants';

export default function Services() {
  const [Cards_Data, setCardsData] = useState([])
  useEffect(() => {
    fetch("/api/public/services/list").then(
      response => response.json()
    ).then(data => {
      setCardsData(data.data);
    }).catch(error => {
      console.error("There was an error fetching the services:", error);
    })
  }, [])
  return (
    <section>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2 class="section__title">
          Services
        </h2>
      </motion.div>
      <div className="service_line">
        {Cards_Data?.map((card, i) => (
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
          >
            <ServiceCard key={card.id}
              imgSrc={`/${card.image_path}`}
              imgAlt={`/${card.image_path}`}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}