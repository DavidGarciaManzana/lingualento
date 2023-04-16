import React from 'react'
import styles from '@/pages/LanguageToggleButton/LanguageToggleButton.module.css'
import ToggleButton from "@/pages/ToggleButton/ToggleButton";
import {useRouter} from "next/router";
import en from "@/languages/en/en";
import es from "@/languages/es/es";

function LanguageToggleButton() {
    const backgrounds = ['first', 'second']
    const switchBalls = ['translateRight', 'translateLeft']
    const router = useRouter()
    const {locale} = useRouter();
    let language = locale !== 'en'
    let changeLanguage = () => {
        if (locale === 'en') {
            router.push('/', '/', {locale: 'es'})
        } else {
            router.push('/', '/', {locale: 'en'})
        }
    };

    return (
        <ToggleButton switchClassName={`${backgrounds.map((item) => {
            return styles[item] + ' '
        })}`} ballClassName={`${switchBalls.map((item) => {
            return styles[item] + ' '
        })}`} toggleFunction={changeLanguage} state={language}></ToggleButton>
    )
}

export default LanguageToggleButton