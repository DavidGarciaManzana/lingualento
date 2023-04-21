import React from 'react'
import styles from '@/pages/TopBar/TopBar.module.css'
import {HelpCircle, Twitter} from "react-feather";
import Button from "@/pages/Button/Button";
import useMedia from "@/hooks/useMedia";
function TopBar({toggleInitialModal}) {
    const viewportWidth= useMedia();
    return (
        <>
            <div className={styles.topBar}>
                <Button className={styles.modalButton} onClick={()=>{toggleInitialModal(true)}}>
                    {viewportWidth < 769 ? <HelpCircle></HelpCircle> :  <HelpCircle strokeWidth={1} width={'100%'} height='100%'/>}

                </Button>
                <h1>Lingualento</h1>
                <Button className={styles.twitterButton}>
                    <a href='https://twitter.com/DavidGarciaMa1' target="_blank">
                        {viewportWidth < 769 ? <Twitter/> :  <Twitter strokeWidth={1} width={'100%'} height='100%'/>}
                    </a>

                </Button>
            </div>
        </>
    )
}

export default TopBar