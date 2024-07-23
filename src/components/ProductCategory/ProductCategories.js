import React from 'react'
import './productcategories.css'
import { Link } from 'react-router-dom';


import image1 from '../img/Product.jpg'
import image2 from '../img/Product-3.jpg'
import image3 from '../img/cloud-computing.jpg'

import { motion } from "framer-motion"
import { fadeIn } from '../../Effects/Variants';


export default function ProductCategories() {
    return (
        <div>
            <section className="Products-categories-div-container md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-8 mx-auto">
                    <motion.div
                        variants={fadeIn('down', 0.7)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: true, amount: 0.8 }}
                        className="text-center mb-12">
                        <h5 className="text-base md:text-lg text-indigo-700 mb-1">Our Recent News</h5>
                        <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Nos Categories</h1>
                    </motion.div>


                    <div className="outline-none-div flex flex-wrap -m-4">


                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true, amount: 0.5 }}
                            className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={image1} alt="blog" />
                                <div className="p-6">
                                    <h1 className="text-2xl font-semibold mb-3">TelePhone System Products</h1>
                                    <p className="leading-relaxed mb-3">
                                        Telephone System Products Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Sed lobortis ex in mauris commodo,
                                        a ultricies urna interdum. Integer vitae justo in ipsum iaculis
                                        interdum. Morbi luctus augue sed feugiat consectetur.
                                    </p>
                                    <Link to="/telephones_Page">
                                        <div className="flex items-center flex-wrap">
                                            <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                                                See More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                    stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true, amount: 0.5 }}
                            className="outline-none-div p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={image2} alt="blog" />
                                <div className="p-6">
                                    <h1 className="text-2xl font-semibold mb-3">On-Promise IPBX Products</h1>
                                    <p className="leading-relaxed mb-3">
                                        On-Promise IPBX Products Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Sed lobortis ex in mauris commodo,
                                        a ultricies urna interdum. Integer vitae justo in ipsum iaculis
                                        interdum. Morbi luctus augue sed feugiat consectetur.
                                    </p>
                                    <Link to="/OnPromise_Page">
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">See More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true, amount: 0.5 }}
                            className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={image3} alt="blog" />
                                <div className="p-6">
                                    <h1 className="text-2xl font-semibold mb-3">Cloud USCAS-SAAS Products</h1>
                                    <p className="leading-relaxed mb-3">
                                        Tirasoft offers an expansive portfolio of cloud services for feature-rich unified
                                        communications solutions and secure, redundant communications. Drive team collaboration
                                        for businesses of all sizes, with platforms that are intuitive to use with endless features,
                                        flexibility and benefits.
                                    </p>
                                    <Link to="/cloud_Page">
                                        <div className="flex items-center flex-wrap">
                                            <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                                                See More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}