import React from 'react'
import styles from '@/pages/TopBar/TopBar.module.css'
import {HelpCircle, Twitter} from "react-feather";
import Button from "@/pages/Button/Button";
function TopBar({toggleInitialModal}) {
    return (
        <>
            <div className={styles.topBar}>
                <Button className={styles.modalButton} onClick={()=>{toggleInitialModal(true)}}>
                    <HelpCircle></HelpCircle>
                </Button>
                <h1>Lingualento</h1>
                <Button className={styles.twitterButton}>
                    <a href='https://twitter.com/DavidGarciaMa1' target="_blank"><Twitter></Twitter></a>
                </Button>
            </div>
        </>
    )
}

export default TopBar