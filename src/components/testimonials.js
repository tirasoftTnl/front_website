import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonial.css'
import { EffectCoverflow, Navigation } from 'swiper';


export default function Testimonial() {
    const [testimonial_Data, setTestimonalsData] = useState([])

    useEffect(() => {
        fetch("/api/testimonials").then(
        response => response.json()
        ).then(data => {
        // Set the returned data to the state
        setTestimonalsData(data);
        }).catch(error => {
        console.error("There was an error fetching testimonials:", error);
        })
    }, [])
    return (
        <section class="testimonial section" id="testimonial">
            <h2 class="section__title">
            Customer Opinions
            </h2>
            <div class="testimonial__container container">
                <div class="testimonial__swiper">
                    <div class="swiper-wrapper">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            spaceBetween={-30}
                            slidesPerView={2}
                            loop = {true}
                            autoplay = {{
                                enabled: true,
                                delay: 5000,
                                waitForTransition: false,
                                disableOnInteraction: false,
                                stopOnLastSlide: false,
                                reverseDirection: false,
                                pauseOnMouseEnter: false
                            }}
                            coverflowEffect={
                            {
                                rotate : 0,
                                stretch : 0,
                                depth : 100,
                                modifier : 2.5
                            }
                            }
                            
                            modules={[EffectCoverflow, Navigation, Autoplay]}
                            >{/*className="swiper_container"*/}

                            {testimonial_Data.length > 0 ? (
                            testimonial_Data.map((testim, i) => (
                            <article class="testimonial__card">
                                <SwiperSlide key={testim.id}>

                                <img src={`/${testim.image_testimonial}`} alt={`/${testim.image_testimonial}`} className="testimonial__img"/>
                                <center>
                                <h2 class="testimonial__title">{testim.title_testimonial}</h2>
                                <p class="testimonial__description">
                                    {testim.description_testimonial}
                                </p>
                                <div class="testimonial__stars">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-fill"></i>
                                </div></center>
                                
                                </SwiperSlide>

                            </article>
                            ))
                            ) : (
                            <p>Loading...</p>)
                            }

                        </Swiper>
                        </div>
                </div>
            </div>
        </section>
    )
  }
  