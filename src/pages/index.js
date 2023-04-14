import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import App from '@/pages/App/App'
import en from '@/languages/en/en'
import es from '@/languages/es/es'
import Modal from "@/pages/Modal/Modal";


export default function Home() {

    return (
        <>
            <App/>
        </>
    )
}
