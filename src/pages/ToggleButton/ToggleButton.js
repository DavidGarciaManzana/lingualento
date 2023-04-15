import {useState} from 'react'
import {Switch} from '@headlessui/react'
import styles from '@/pages/ToggleButton/ToggleButton.module.css'

function ToggleButton({toggleFunction}) {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch
            checked={enabled}
            onChange={() => {
                setEnabled(!enabled);
                toggleFunction()
            }}
            className={`${
                enabled ? styles.blue : styles.gray
            } ${styles.switch}`}
        >
            <span className={styles.srOnly}>Enable notifications</span>
            <span
                className={`${
                    enabled ? styles.translate6 : styles.translate1
                } ${styles.ball}`}
            />
        </Switch>
    )
}

export default ToggleButton