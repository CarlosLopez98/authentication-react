import React from 'react'
import styles from "./InputField.module.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, error = false, ...rest }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...rest}
      />
      <label className={styles.label}>{label}</label>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}

export default InputField