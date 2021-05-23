import React from 'react'
import styles from './FormInput.module.css'
function FormInput(props) {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input }/>
            
        </div>
    )
}

export default FormInput
