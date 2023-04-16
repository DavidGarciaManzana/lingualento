import React from "react"
import {useRouter} from "next/router";
import en from "@/languages/en/en";
import es from "@/languages/es/es";
import Modal from "@/pages/Modal/Modal";
import styles from '@/pages/App/App.module.css'
import TopBar from "@/pages/TopBar/TopBar";
import Hero from '@/pages/Hero/Hero'
import LanguageToggleButton from "@/pages/LanguageToggleButton/LanguageToggleButton";
import TextForm from "@/pages/TextForm/TextForm";
import UtilitiesForm from "@/pages/UtilitiesForm/UtilitiesForm";

function App() {
    const [textToFormat, setTextToFormat] = React.useState('')

    const [initialModalIsOpen, setInitialModalIsOpen] = React.useState(false)
    const [inputTextModal, setInputTextModal] = React.useState(false)
    const [inputSelectModal, setInputSelectModal] = React.useState(false)




    const {locale} = useRouter();
    const t = locale === 'en' ? en : es

    return (
        <div className={styles.app}>
            <Modal isOpen={initialModalIsOpen} setIsOpen={setInitialModalIsOpen}
                   beforeTitle={<LanguageToggleButton/>} title={t.initialModalTitle}
                   closeButtonText={t.initialModalCloseButton}>{t.initialModalDescription}</Modal>
            <Modal isOpen={inputTextModal} setIsOpen={setInputTextModal}>
                <TextForm text={textToFormat} setText={setTextToFormat} beforeModal={setInputTextModal}
                          nextModal={setInputSelectModal}></TextForm>
            </Modal>
            <Modal isOpen={inputSelectModal} setIsOpen={setInputSelectModal}>
                <UtilitiesForm setText={setTextToFormat} beforeModal={setInputSelectModal}></UtilitiesForm>


            </Modal>
            <TopBar toggleInitialModal={setInitialModalIsOpen}/>
            <Hero openModal={setInputTextModal} salute={t.heroWelcome} text={t.heroText} button={t.heroButton}></Hero>
        </div>
    )
}

export default App