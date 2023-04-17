// import '/App/App'
// import App from '../pages/App/App'
import React from "react"
import App from '@/pages/App/App'
import LanguageProvider from "@/pages/LanguageProvider/LanguageProvider";


export default function Home() {

    return (
        <>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </>
    )
}
