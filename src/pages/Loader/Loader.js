import React from "react";
import styles from "@/pages/Loader/Loader.module.css";

export default function Loader() {
    return (
        <div className={styles.wrapper}>
            <span className={styles.loader}></span>
        </div>
    )
}