import React from "react"
import {useRouter} from "next/router";
import en from "@/languages/en/en";
import es from "@/languages/es/es";
import Modal from "@/pages/Modal/Modal";
import styles from '@/pages/App/App.module.css'
import TopBar from "@/pages/TopBar/TopBar";
import ToggleButton from "@/pages/ToggleButton/ToggleButton";
function App() {
    const [initialModalIsOpen, setInitialModalIsOpen] = React.useState(true)
    const router = useRouter()
    const { locale} = useRouter();
    const t = locale === 'en' ? en : es
    let changeLanguage = () => {

        if (locale === 'en') {
            router.push('/','/',{locale:'es'})
        } else {
            router.push('/','/',{locale:'en'})
        }

    };
    return (
        <div className={styles.app}>
            <TopBar toggleInitialModal={setInitialModalIsOpen}/>
            {t.title}
            <button onClick={changeLanguage}>Lingua</button>
            <Modal isOpen={initialModalIsOpen} setIsOpen={setInitialModalIsOpen} beforeTitle={<ToggleButton toggleFunction={changeLanguage}/>} title={t.initialModalTitle} closeButtonText={t.initialModalCloseButton}>{t.initialModalDescription}</Modal>
        </div>
    )
}

export default App