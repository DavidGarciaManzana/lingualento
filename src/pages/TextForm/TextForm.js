import React from "react";
import styles from '@/pages/TextForm/TextForm.module.css'
import {LanguageContext} from "@/pages/LanguageProvider/LanguageProvider";

function TextForm({text, setText, beforeModal, nextModal, label = null}) {
    const {t} = React.useContext(LanguageContext);
    let minLength = () => {
        if (text.length < 15) {
            return `${t?.minLengthMessage}`;
        }
        return ''

    }

    return (
        <form className={styles.textForm} action="" onSubmit={() => {
            if (minLength() !== '') {
                return
            }
            beforeModal(false)
            nextModal(true)
        }}>
            {label && <label htmlFor='text-area'>{label}</label>}
            <textarea minLength={15} maxLength={161} onInvalid={(event) => event.target.setCustomValidity(t?.required)}
                      onBlur={(event) => event.target.setCustomValidity('')} id={'text-area'} required={true}
                      value={text} onChange={(e) => {
                setText(e.currentTarget.value)
            }} className={styles.textBox}></textarea>
            <div>{minLength()}</div>
            <button disabled={minLength() !== ''} type={"submit"}>{t?.textFormNextButton}
            </button>
        </form>
    )
}

export default TextForm