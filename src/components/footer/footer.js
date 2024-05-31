import React, { useEffect, useState } from "react";
import './footer.css'
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
      <section id="footer">
        <footer className="footer">
            <div className="footer__container container grid">
                <div>
                    <a href="/" className="footer__logo">
                        <i className="ri-book-3-line"></i>Website
                    </a>

                    <p className="footer__description">
                        Find and explore the best <br />
                        Products from all the internet<br />
                    </p>
                </div>
                <div className="footer__data grid">
                    <div>
                        <h3 className="footer__title">About</h3>
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
                        <h3 className="footer__title">Company</h3>
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
                        <h3 className="footer__title">Contact</h3>
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
                        <h3 className="footer__title">Social</h3>
                        <div className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                <i className="ri-facebook-line"></i>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                <i className="ri-twitter-x-line"></i>
                            </a>     
                        </div>
                    </div>
                </div>
            </div>

            <span className="footer__copy">
                &#169; All Rights Reserved By Tirasoft
            </span>
        </footer>
      </section>
    )
  }
