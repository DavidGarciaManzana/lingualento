import {useState} from 'react'
import {Switch} from '@headlessui/react'
import styles from '@/pages/ToggleButton/ToggleButton.module.css'

//IS COMPLETELY MANDATORY TO SEND A toggleFunction AND A state
function ToggleButton({switchClassName = '',ballClassName='', toggleFunction,state}) {

    const switchClassName1 = switchClassName.split(',')[0];
    const switchClassName2 = switchClassName.split(',')[1];
    const ballClassName1 = ballClassName.split(',')[0];
    const ballClassName2 =ballClassName.split(',')[1];



    return (
        <Switch
            checked={state}
            onChange={() => {
                toggleFunction()
            }}
            className={`${styles.switch} ${
                !state ? styles.first : styles.second 
            } ${
                !state ? switchClassName1 : switchClassName2
            } `}
        >
            <span className={styles.srOnly}>Enable notifications</span>
            <span
                className={`${styles.ball} ${
                    state ? styles.translateRight : styles.translateLeft
                } ${
                    state ? ballClassName1 : ballClassName2
                }`}
            />
        </Switch>
    )
}

export default ToggleButton