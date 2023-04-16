import React from "react";
import styles from '@/pages/TextForm/TextForm.module.css'

function TextForm ({text, setText,beforeModal,nextModal}){
    return (
        <form action="" onSubmit={() => {
            beforeModal(false)
            nextModal(true)
        }}>
                <textarea value={text} onChange={(e) => {
                    setText(e.currentTarget.value)
                }} className={styles.textBox}></textarea>
            <button type={"submit"}>Next
            </button>
        </form>
    )
}

export default TextForm