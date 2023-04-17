import React from "react";
import styles from '@/pages/TextForm/TextForm.module.css'
import {LanguageContext} from "@/LanguageProvider/LanguageProvider";

function TextForm ({text, setText,beforeModal,nextModal}){
    const {t} = React.useContext(LanguageContext);
    return (
        <form action="" onSubmit={() => {
            beforeModal(false)
            nextModal(true)
        }}>
                <textarea required={true} value={text} onChange={(e) => {
                    setText(e.currentTarget.value)
                }} className={styles.textBox}></textarea>
            <button type={"submit"}>{t?.textFormNextButton}
            </button>
        </form>
    )
}

export default TextForm