import React, { forwardRef, useState, useEffect } from "react";
import { FiMenu, FiPhone } from "react-icons/fi";
import { HiOutlineServer } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { GoCloud } from "react-icons/go";

const DEFAULT_DESCRIPTION ="Founded in 2002, Tirasoft is a Dutch based company with headquarters in Grogingen, Netherlands, and a technical backbone in Berlin, Germany. Tirasoft provides carrier-grade, reliable, and future-proof converged telecom solutions that fulfill the exact needs of a wide range of customers. We design, develop, and implement solutions for telecom operators, banks, governmental infrastructure, military, oil & gas petrochemical, and manufacturing industries.";
const TELEPHONE_DESCRIPTION =
"Telephone System Products Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex in mauris commodo, a ultricies urna interdum. Integer vitae justo in ipsum iaculis interdum. Morbi luctus augue sed feugiat consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex in mauris commodo, a ultricies urna interdum. Integer vitae justo in ipsum iaculis interdum. Morbi luctus augue sed feugiat consectetur.";
const ON_PROMISE_DESCRIPTION =
"On-Promise IPBX Products Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex in mauris commodo, a ultricies urna interdum. Integer vitae justo in ipsum iaculis interdum. Morbi luctus augue sed feugiat consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis ex in mauris commodo, a ultricies urna interdum. Integer vitae justo in ipsum iaculis interdum. Morbi luctus augue sed feugiat consectetur.";
const CLOUD_DESCRIPTION ="Tirasoft offers an expansive portfolio of cloud services for feature-rich unified communications solutions and secure, redundant communications. Drive team collaboration for businesses of all sizes, with platforms that are intuitive to use with endless features, flexibility and benefits.";

export const Menu2 = forwardRef<HTMLElement>((props, ref) => {
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);
  const [isFading, setIsFading] = useState(false);
  const [nextDescription, setNextDescription] = useState(DEFAULT_DESCRIPTION);
  const [fadingOut, setFadingOut] = useState(false);

  const handleProductHover = (product) => {
    let content = DEFAULT_DESCRIPTION;

    switch (product) {
      case "Telephone System Products":
        content = TELEPHONE_DESCRIPTION;
        break;
      case "On-Promise IPBX Products":
        content = ON_PROMISE_DESCRIPTION;
        break;
      case "Cloud USCAS-SAAS Products":
        content = CLOUD_DESCRIPTION;
        break;
      default:
        content = DEFAULT_DESCRIPTION;
        break;
    }

    setFadingOut(true);
    setNextDescription(content);
  };

  useEffect(() => {
    if (fadingOut) {
      const timer = setTimeout(() => {
        setDescription(nextDescription);
        setIsFading(true);
        setFadingOut(false);
      }, 500); // Time should match the CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [fadingOut, nextDescription]);

  useEffect(() => {
    if (isFading) {
      const timer = setTimeout(() => {
        setIsFading(false);
      }, 50); // Slight delay to allow the CSS class to apply

      return () => clearTimeout(timer);
    }
  }, [isFading]);

  return (
    <section
      ref={ref}
      className="menu2-container-div flex flex-col items-start text-base">
      <div className="container-of-menu2-desc flex">
        <div className="links-container">
          <ul>
          <li className="telephone_link_class flex items-center">
              <Link to="/product" className="LINK_class flex items-center">
                <FiMenu className="mr-2" />
                <span>All Products</span>
              </Link>
            </li>

            <li className="telephone_link_class flex items-center border-t border-solid border-neutral-300 mb-1">
              <Link to="/telephones_Page" className="LINK_class flex items-center"
              onMouseEnter={() => handleProductHover("Telephone System Products")}
              >
                <FiPhone className="mr-2" />
                <span>
                  TelePhone System Products
                </span>
              </Link>
            </li>
            <li className="telephone_link_class flex items-center border-t border-solid border-neutral-300 mb-1">
              <Link to="/OnPromise_Page" className="LINK_class flex items-center"
              onMouseEnter={() => handleProductHover("On-Promise IPBX Products")}
              >
                <HiOutlineServer className="mr-2" />
                <span>
                  On-Promise IPBX Products
                </span>
              </Link>
            </li>
            <li className="telephone_link_class flex items-center border-t border-solid border-neutral-300 mb-1">
              <Link to="/cloud_Page" className="LINK_class flex items-center"
              onMouseEnter={() => handleProductHover("Cloud USCAS-SAAS Products")}
              >
                <GoCloud className="mr-2" />
                <span>
                  Cloud USCAS-SAAS Products
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="description-container">
          <ul className="description-menu2-ghost">
            <li>
              <p 
                id="description-menu2-id" 
                className={`description-text fade ${fadingOut ? 'fade-out' : isFading ? 'fade-in' : ''}`}
              >
                {description}
              </p>
            </li>
          </ul>
        </div>
        <div className="get-in-touch-container">
            <div className="get-in-touch-title">
              <h1 className="title">GET IN TOUCH</h1>
              <p className="under-title">FILL UP OUR FORM HERE.</p>
            </div>
            <div className="get-in-touch-button">
              <Link to="/contact">
                <button className="git-btn">CONTACT US</button>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
});
