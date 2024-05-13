import React, { useEffect, useState } from "react";

export default function Footer() {

    const [FooterData, setFooterData] = useState(null);

    useEffect(() => {
        fetch("/api/about_and_contact").then(
        response => response.json()
        ).then(data => {
        // Set the returned data to the state
        setFooterData(data);
        }).catch(error => {
        console.error("There was an error fetching the cards:", error);
        })
    }, [])
    return (
      <section id="footer">
        <footer class="footer">
            <div class="footer__container container grid">
                <div>
                    <a href="/" className="footer__logo">
                        <i className="ri-book-3-line"></i>Website
                    </a>

                    <p className="footer__description">
                        Find and explore the best <br />
                        Products from all the internet<br />
                    </p>
                </div>
                <div class="footer__data grid">
                    <div>
                        <h3 class="footer__title">About</h3>
                        <ul class="footer__links">
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
                        <h3 class="footer__title">Company</h3>
                        <ul class="footer__links">
                            <li>
                                <a href="/" class="footer__link">Blogs</a>
                            </li>

                            <li>
                                <a href="/" class="footer__link">Community</a>
                            </li>

                            <li>
                                <a href="/" class="footer__link">Our team</a>
                            </li>
                            
                            <li>
                                <a href="/" class="footer__link">Help center</a>
                            </li>
                            
                        </ul>
                    </div>

                    <div>
                        <h3 class="footer__title">Contact</h3>
                        <ul class="footer__links">
                            {FooterData && (
                                <>
                            <li>
                                <adress class="footer__info">
                                {FooterData[0].adress}
                                </adress>
                            </li>
                            <li>
                                <adress class="footer__info">

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
                        <h3 class="footer__title">Social</h3>
                        <div class="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" class="footer__social-link">
                                <i class="ri-facebook-line"></i>
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                <i class="ri-instagram-line"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" className="footer__social-link">
                                <i class="ri-twitter-x-line"></i>
                            </a>     
                        </div>
                    </div>
                </div>
            </div>

            <span class="footer__copy">
                &#169; All Rights Reserved By Tirasoft
            </span>
        </footer>
      </section>
    )
  }
