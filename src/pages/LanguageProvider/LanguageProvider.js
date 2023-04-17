import React from "react"
import {useRouter} from "next/router";
import en from "../../languages/en/en";
import es from "../../languages/es/es";

export const LanguageContext = React.createContext({});

let LanguageProvider =({children})=>{
    const {locale} = useRouter();
    let t = locale === 'en' ? en : es
    // if(!locale){
    //     t='en'
    // }
    return (
        <LanguageContext.Provider value={{t}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider