import React from 'react'
import styles from '@/pages/Button/Button.module.css'
function Button({className = '', ...delegated}) {
    return (
        <button className={`${styles.button} ${className}`} {...delegated} />
    );
}

export default Button