import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './stye.module.scss';
import Nav from './Nav';

const menu = {
    open: {
        width: "95vw",
        height: "95vh",
        top: "-5px",
        left: "-5px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "40px",
        height: "40px",
        top: "0",
        left: "0",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Index() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.Phoneheader}>
            <motion.div 
                className={styles.Phonemenu}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed">
                <AnimatePresence>
                    {isActive && <Nav setIsActive={setIsActive} />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
    )
}
