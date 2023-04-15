import React from "react"
import {useRouter} from "next/router";
import en from "@/languages/en/en";
import es from "@/languages/es/es";
import Modal from "@/pages/Modal/Modal";
import styles from '@/pages/App/App.module.css'

function App() {
    const router = useRouter()
    const { locale} = useRouter();
    const t = locale === 'en' ? en : es
    let changeLanguage = () => {

        if (locale === 'en') {
            router.push('/','/',{locale:'es'})
        } else {
            router.push('/','/',{locale:'en'})
        }

    };
    return (
        <div className={styles.app}>

            {t.title}
            <button onClick={changeLanguage}>Lingua</button>
            <Modal title={'Instrucciones'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Modal>
        </div>
    )
}

export default App