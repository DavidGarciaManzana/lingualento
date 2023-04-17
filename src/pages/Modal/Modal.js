import React from 'react'
import styles from '@/pages/Modal/Modal.module.css'
import {Dialog} from '@headlessui/react'

function Modal({
                   scrollBar = false,
                   isOpen = true,
                   setIsOpen,
                   beforeTitle = null,
                   title,
                   description,
                   closeButtonText,
                   children
               }) {
    const titleRef = React.useRef()

    return (
        <Dialog initialFocus={titleRef} className={styles.modalContainer} open={isOpen} onClose={() => setIsOpen(false)}>
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className={styles.backdrop} aria-hidden="true" onClick={() => setIsOpen(false)}/>

            {/* Full-screen scrollable container */}
            <div className={`${
                scrollBar ? styles.scrollableContainer : styles.notScrollableContainer
            }`}>

                {/* Container to center the panel */}
                <div className={styles.panelContainer}>

                    <Dialog.Panel className={styles.panel}>
                        {beforeTitle}
                        <Dialog.Title ref={titleRef} style={{textAlign: "center"}} >{title}</Dialog.Title>
                        <Dialog.Description>
                            {description}
                        </Dialog.Description>

                        <div style={{
                            textAlign: "center", display: 'flex'
                            , flexDirection: 'column'
                        }}>
                            {children}
                        </div>
                        <br/>
                        {closeButtonText && <button onClick={() => setIsOpen(false)}>{closeButtonText}</button>}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default Modal