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
    // const [language,setLanguage] = React.useState(locale !== 'en')
    let changeLanguage = () => {
        if (locale === 'en') {
            router.push('/', '/', {locale: 'es'})
            // setLanguage(true)
        } else {
            router.push('/', '/', {locale: 'en'})
            // setLanguage(false)

        }
    };

    return (
        <ToggleButton switchClassName={`${backgrounds.map((item) => {
            return styles[item] + ' '
        })}`} ballClassName={`${switchBalls.map((item) => {
            return styles[item] + ' '
        })}`} toggleFunction={changeLanguage} state={locale !== 'en'}></ToggleButton>
    )
}

export default LanguageToggleButton