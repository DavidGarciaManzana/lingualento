import React from "react"
import Modal from "@/pages/Modal/Modal";
import styles from '@/pages/App/App.module.css'
import TopBar from "@/pages/TopBar/TopBar";
import Hero from '@/pages/Hero/Hero'
import LanguageToggleButton from "@/pages/LanguageToggleButton/LanguageToggleButton";
import TextForm from "@/pages/TextForm/TextForm";
import UtilitiesForm from "@/pages/UtilitiesForm/UtilitiesForm";
import Loader from '@/pages/Loader/Loader'
import {LanguageContext} from '@/pages/LanguageProvider/LanguageProvider'


function App() {
    const {t} = React.useContext(LanguageContext);
    const [textToFormat, setTextToFormat] = React.useState('')

    const [initialModalIsOpen, setInitialModalIsOpen] = React.useState(true)
    const [inputTextModal, setInputTextModal] = React.useState(false)
    const [inputSelectModal, setInputSelectModal] = React.useState(false)



    const [data, setData] = React.useState('');
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const [isDataModalOpen, setIsDataModalOpen] = React.useState(false)
    const [isErrorModalOpen, setIsErrorModalOpen] = React.useState(false)

    React.useEffect(() => {
        if (data) {
            setIsDataModalOpen(true)
        }
    }, [data])

    React.useEffect(() => {
        if (error) {
            setIsErrorModalOpen(true)
        }
    }, [error])

    const handleData = (i) => {
        setData(i)
    }
    const handleError = (e) => {
        setError(e)
    }
    const handleLoading = (l) => {
        setIsLoading(l)
    }

    const finalAnswerRef = React.useRef()

    function handleCopy() {
        if(finalAnswerRef) {
            navigator.clipboard.writeText(finalAnswerRef.current.value)
                .then(() => {
                    window.alert('Text copied to clipboard successfully!');
                })
                .catch((error) => {
                    window.alert('Error copying text to clipboard:' + error);
                });
        }

    }

    return (
        <div className={styles.app}>
            <Modal scrollBar={true} isOpen={initialModalIsOpen} setIsOpen={setInitialModalIsOpen}
                   beforeTitle={<LanguageToggleButton/>} title={t?.initialModalTitle}
                   closeButtonText={t?.initialModalCloseButton}>
                <p className={styles.welcomeMessage}>{t?.initialModalWelcome}</p>
                <h3>{t?.instructions}</h3>
            <ol className={styles.orderList}>
                <li>{t?.firstInstruction}</li>
                <li>{t?.secondInstruction}</li>
                <li>{t?.thirdInstruction}</li>
                <li>{t?.fourthInstruction}</li>
                <li>{t?.fifthInstruction}</li>
                <li>{t?.sixthInstruction}</li>
            </ol>
            </Modal>
            <Modal isOpen={inputTextModal} setIsOpen={setInputTextModal}>
                <TextForm text={textToFormat} setText={setTextToFormat} beforeModal={setInputTextModal}
                          nextModal={setInputSelectModal} label={t?.textFormLabel}></TextForm>
            </Modal>
            <Modal isOpen={inputSelectModal} setIsOpen={setInputSelectModal}>
                <UtilitiesForm textToFormat={textToFormat} handleData={handleData} handleError={handleError}
                               handleLoading={handleLoading} data={data} error={error} isLoading={isLoading}
                               setText={setTextToFormat}
                               beforeModal={setInputSelectModal}></UtilitiesForm>


            </Modal>


            <Modal isOpen={isDataModalOpen} setIsOpen={setIsDataModalOpen} title={t?.dataModalHappyAnswer}>
                <textarea className={styles.finalDataModal} ref={finalAnswerRef} autoFocus={false}
                          value={data} onChange={(e)=>{setData(e.target.value)}}></textarea>
                <button style={{marginTop:'10px'}} onClick={handleCopy}>{t?.dataModalCopy}</button>
            </Modal>
            <Modal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} title={t?.errorModalErrorMessage}
                   closeButtonText={t?.errorModalButton}>
                <p>Error: {error}</p>
            </Modal>
            {isLoading && <Loader></Loader>}


            <TopBar toggleInitialModal={setInitialModalIsOpen}/>
            <Hero openModal={setInputTextModal} salute={t?.heroWelcome} text={t?.heroText} button={t?.heroButton}></Hero>
        </div>)
}

export default App