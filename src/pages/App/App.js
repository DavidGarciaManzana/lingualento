import React from "react"
import {useRouter} from "next/router";
import en from "@/languages/en/en";
import es from "@/languages/es/es";
import Modal from "@/pages/Modal/Modal";
import styles from '@/pages/App/App.module.css'
import TopBar from "@/pages/TopBar/TopBar";
import ToggleButton from "@/pages/ToggleButton/ToggleButton";
import Hero from '@/pages/Hero/Hero'
import LanguageToggleButton from "@/pages/LanguageToggleButton/LanguageToggleButton";
function App() {
    const [initialModalIsOpen, setInitialModalIsOpen] = React.useState(true)

    const router = useRouter()
    const {locale} = useRouter();
    const t = locale === 'en' ? en : es
    let changeLanguage = () => {

        if (locale === 'en') {
            router.push('/', '/', {locale: 'es'})
        } else {
            router.push('/', '/', {locale: 'en'})
        }

    };
    return (
        <div className={styles.app}>
            <Modal isOpen={initialModalIsOpen} setIsOpen={setInitialModalIsOpen}
                   beforeTitle={<LanguageToggleButton/>} title={t.initialModalTitle}
                   closeButtonText={t.initialModalCloseButton}>{t.initialModalDescription}</Modal>

            <TopBar toggleInitialModal={setInitialModalIsOpen}/>
            <Hero salute={t.heroWelcome} text={t.heroText} button={t.heroButton}></Hero>

        </div>
    )
}

export default App