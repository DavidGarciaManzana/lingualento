import React from 'react'
import styles from '@/pages/TopBar/TopBar.module.css'
import {HelpCircle, Twitter} from "react-feather";
import Button from "@/pages/Button/Button";
import {useMediaQuery} from 'react-responsive'
function TopBar({toggleInitialModal}) {
    const isDesktop = useMediaQuery({ minWidth: 767 });
    return (
        <>
            <div className={styles.topBar}>
                <Button className={styles.modalButton} onClick={()=>{toggleInitialModal(true)}}>
                    {isDesktop ? (<HelpCircle strokeWidth={1} width={'100%'} height='100%'/>):<HelpCircle/>}
                </Button>
                <h1 className={styles.title}>Lingualento</h1>
                <Button className={styles.twitterButton}>
                    <a className={styles.link} href='https://twitter.com/DavidGarciaMa1' target="_blank">
                        {isDesktop ? (<Twitter strokeWidth={1} width={'100%'} height='100%'/>):<Twitter/>}
                    </a>
                </Button>
            </div>
        </>
    )
}

export default TopBar