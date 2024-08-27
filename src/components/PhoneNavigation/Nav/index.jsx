import { useState } from 'react';
import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from './data';
import { perspective, sublinkVariants } from "./anim";
import { Link } from 'react-router-dom';

export default function Nav({ setIsActive }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = () => {
    setIsActive(false);
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.Phonenav}>
      <div className={styles.Phonebody}>
        {links.map((link, i) => {
          const { title, href, sublinks } = link;
          const isActive = activeIndex === i;

          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className={styles.mainLink}>
                  {sublinks ? (
                    <>
                      <Link to={href} onClick={handleLinkClick}>
                        {title}
                      </Link>
                      <button onClick={() => handleToggle(i)}>
                        {isActive ? '-' : '+'}
                      </button>
                    </>
                  ) : (
                    <Link to={href} onClick={handleLinkClick}>
                      {title}
                    </Link>
                  )}
                </div>
              </motion.div>
              {sublinks && (
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      variants={sublinkVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className={styles.sublinks}
                    >
                      {sublinks.map((sublink, j) => (
                        <Link key={`s_${j}`} to={sublink.href} onClick={handleLinkClick}>
                          {sublink.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
