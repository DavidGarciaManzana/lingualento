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
import Loader from '@/pages/Loader/Loader'

// import useChatGPTAPI from "@/hooks/useChatGPTAPI";

function App() {

    const [textToFormat, setTextToFormat] = React.useState('')

    const [initialModalIsOpen, setInitialModalIsOpen] = React.useState(false)
    const [inputTextModal, setInputTextModal] = React.useState(false)
    const [inputSelectModal, setInputSelectModal] = React.useState(false)


    const {locale} = useRouter();
    const t = locale === 'en' ? en : es

    // const { data, error, isLoading } = useChatGPTAPI();


    const [data, setData] = React.useState('');
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const [isDataModalOpen, setIsDataModalOpen] = React.useState(false)
    const [isErrorModalOpen, setIsErrorModalOpen] = React.useState(false)

    React.useEffect(()=>{
        if(data){
            setIsDataModalOpen(true)
        }
    },[data])
    React.useEffect(()=>{
        if(error){
            setIsErrorModalOpen(true)
        }
    },[error])

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
        navigator.clipboard.writeText(finalAnswerRef.current.value);
    }

    return (
        <div className={styles.app}>
            <Modal scrollBar={true} isOpen={initialModalIsOpen} setIsOpen={setInitialModalIsOpen}
                   beforeTitle={<LanguageToggleButton/>} title={t.initialModalTitle}
                   closeButtonText={t.initialModalCloseButton}>{t.initialModalDescription}</Modal>
            <Modal isOpen={inputTextModal} setIsOpen={setInputTextModal}>
                <TextForm text={textToFormat} setText={setTextToFormat} beforeModal={setInputTextModal}
                          nextModal={setInputSelectModal}></TextForm>
            </Modal>
            <Modal isOpen={inputSelectModal} setIsOpen={setInputSelectModal}>
                <UtilitiesForm textToFormat={textToFormat} handleData={handleData} handleError={handleError} handleLoading={handleLoading} data={data} error={error} isLoading={isLoading} setText={setTextToFormat}
                               beforeModal={setInputSelectModal}></UtilitiesForm>


            </Modal>


            <Modal isOpen={isDataModalOpen} setIsOpen={setIsDataModalOpen} title={"Here's your message :)"} >
                <textarea style={{height:'50svh'}} ref={finalAnswerRef}  disabled={true} className={styles.response} value={data}></textarea>
                <button onClick={handleCopy}>Copy to clipboard</button>
            </Modal>
            <Modal isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} title={"Something went wrong"} closeButtonText={'Accept :('}>
                <p>Error: Ha ocurrido un error</p> {/*todo error.message?*/}
            </Modal>
            {isLoading && <Loader></Loader>}


            <TopBar toggleInitialModal={setInitialModalIsOpen}/>
            <Hero openModal={setInputTextModal} salute={t.heroWelcome} text={t.heroText} button={t.heroButton}></Hero>
        </div>
    )
}

export default App