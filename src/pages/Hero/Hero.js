import React from 'react'
import styles from '@/pages/Hero/Hero.module.css'
import LanguageToggleButton from "@/pages/LanguageToggleButton/LanguageToggleButton";

function Hero({openModal,salute,text,button}) {
    return (<div className={styles.bg}>
            <img className={styles.heroImage} src="sloth.png"  alt=""/>
            <div className={styles.content}>
                <span className={styles.firstMessage}>
                    <h2>{salute}</h2>
                    <LanguageToggleButton></LanguageToggleButton>
                </span>

                <p style={{marginBottom:'10px'}}>{text}</p>
                <button className={styles.getStartButton} onClick={()=>{openModal(true)}}>{button}</button>
            </div>
        </div>)
}

export default Hero