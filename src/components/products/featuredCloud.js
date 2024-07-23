import React, { useEffect, useState } from "react";
import './featured.css'
import { Card } from "../Cards/Cards";

export default function FeaturedCloud() {
    const [Cards_Data, setCardsData] = useState([]);

    useEffect(() => {
        fetch("/api/public/products/list/category/Cloud")
            .then(response => response.json())
            .then(data => {
                // Set the returned data to the state
                setCardsData(data.data);
            })
            .catch(error => {
                console.error("There was an error fetching the cards:", error);
            });
    }, []);

    return (
        <section className="featured__container" id="featured">
            <h2 className="section__title">
                Featured Products
            </h2>
            <div className="App">
                <div className="col">
                    {Cards_Data.length > 0 ? (
                        Cards_Data.map((card, i) => (
                            <Card
                                key={card.id}
                                imgSrc={`/${card.img_product}`}
                                imgAlt={`/${card.img_product}`}
                                title={card.title}
                                description={card.description}
                                buttonText="Learn More"
                                link={card.img_product}
                            />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </section>
    );
}