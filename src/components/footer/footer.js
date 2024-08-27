import React, { useEffect, useState } from "react";
import './footer.css'
import instagram_animation from '../../Animations-Lottie/instagram-animation.json'
import facebook_animation from '../../Animations-Lottie/facebook-animation.json'
import twitter_animation from '../../Animations-Lottie/twitter-animation.json'

import Lottie from "lottie-react";

import { motion } from "framer-motion";
import { fadeIn } from '../../Effects/Variants';

export default function Footer() {
    const [FooterData, setFooterData] = useState(null);
    useEffect(() => {
        fetch("/api/public/info/list").then(
            response => response.json()
        ).then(data => {
            // Set the returned data to the state
            setFooterData(data.data);
        }).catch(error => {
            console.error("There was an error fetching the cards:", error);
        })
    }, [])
    return (
        <section className="footer-section" id="footer">
            <footer className="footer">
                <motion.div
                    variants={fadeIn('down', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.8 }}
                    className="footer__container">
                    <div className="footer__data">
                        <div>
                            <h1 className="footer__title">About</h1>
                            <ul className="footer__links">
                                <li>
                                    <a href="/" className="footer__link">Awards</a>
                                </li>

                                <li>
                                    <a href="/" className="footer__link">FAQs</a>
                                </li>

                                <li>
                                    <a href="/" className="footer__link">Privacy policy</a>
                                </li>

                                <li>
                                    <a href="/" className="footer__link">Terms of services</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h1 className="footer__title">Company</h1>
                            <ul className="footer__links">
                                <li>
                                    <a href="/" className="footer__link">Blogs</a>
                                </li>

                                <li>
                                    <a href="/" className="footer__link">Community</a>
                                </li>

                                <li>
                                    <a href="/" className="footer__link">Our team</a>
                                </li>

                                <li>
                                    <a href="/" className="footer__link">Help center</a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h1 className="footer__title">Contact</h1>
                            <ul className="footer__links">
                                {FooterData && (
                                    <>
                                        <li>
                                            <adress className="footer__info">
                                                {FooterData[0].adress}
                                            </adress>
                                        </li>
                                        <li>
                                            <adress className="footer__info">
                                                <a href={`mailto:${FooterData[0].email}`}>{FooterData[0].email}</a>
                                            </adress>
                                        </li>
                                        <li>
                                            <a href={`tel:${FooterData[0].phone}`}>{FooterData[0].phone}</a>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <div>
                            <div className="footer__social">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                    <Lottie
                                        className="animations-data"
                                        animationData={facebook_animation}
                                        loop={true}
                                    />
                                </a>

                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                    <Lottie
                                        className="animations-data"
                                        animationData={instagram_animation}
                                        loop={true}
                                    />
                                </a>

                                <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                    <Lottie
                                        className="animations-data"
                                        animationData={twitter_animation}
                                        loop={true}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.span
                    variants={fadeIn('up', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.3 }}

                    className="footer__copy">
                    &#169; All Rights Reserved By Tirasoft
                </motion.span>
            </footer>
        </section>
    )
}
