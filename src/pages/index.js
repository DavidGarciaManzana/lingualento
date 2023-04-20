// import '/App/App'
// import App from '../pages/App/App'
import React from "react"
import App from '@/pages/App/App'
import LanguageProvider from "@/pages/LanguageProvider/LanguageProvider";
import Script from "next/script";


export default function Home() {

    return (
        <>
            <LanguageProvider>
                <App/>
            </LanguageProvider>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA}');
        `}
            </Script>
        </>
    )
}
