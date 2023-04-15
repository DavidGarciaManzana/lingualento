import {useState} from 'react'
import {Switch} from '@headlessui/react'
import styles from '@/pages/ToggleButton/ToggleButton.module.css'
import {useRouter} from "next/router";


function ToggleButton({toggleFunction}) {
    const {locale} = useRouter();
    let language = locale !== 'en'


    const [enabled, setEnabled] = useState(language)

    return (
        <Switch
            checked={enabled}
            onChange={() => {
                setEnabled(!enabled);
                toggleFunction()
            }}
            className={`${
                enabled ? styles.mx : styles.us
            } ${styles.switch}`}
        >
            <span className={styles.srOnly}>Enable notifications</span>
            <span
                className={`${
                    enabled ? styles.translateRight : styles.translateLeft
                } ${styles.ball}`}
            />
        </Switch>
    )
}

export default ToggleButton