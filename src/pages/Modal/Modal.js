import {useState} from 'react'
import styles from '@/pages/Modal/Modal.module.css'
import {Dialog} from '@headlessui/react'

function Modal({isOpen=true,setIsOpen,beforeTitle='',title, description,closeButtonText, children}) {
    // console.log(isOpen)
    // let [isOpen, setIsOpen] = useState(true)

    return (
        <Dialog className={styles.modalContainer} open={isOpen} onClose={() => setIsOpen(false)}>
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className={styles.backdrop} aria-hidden="true" onClick={() => setIsOpen(false)}/>

            {/* Full-screen scrollable container */}
            <div className={styles.scrollableContainer}>

                {/* Container to center the panel */}
                <div className={styles.panelContainer}>

                    <Dialog.Panel className={styles.panel}>
                        {beforeTitle}
                        <Dialog.Title style={{textAlign:"center"}}>{title}</Dialog.Title>
                        <Dialog.Description>
                            {description}
                        </Dialog.Description>

                        <p style={{textAlign: "center"}}>
                            {children}
                        </p>
                        <br/>
                        <button onClick={() => setIsOpen(false)}>{closeButtonText}</button>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default Modal