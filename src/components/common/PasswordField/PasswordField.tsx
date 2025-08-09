import React, { useState } from 'react'
import styles from "./PasswordField.module.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordFieldProps {
  error?: string
}

const PasswordField: React.FC<PasswordFieldProps> = ({ error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.field} ${error ? styles.error : ''}`}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className={styles.input}
          {...rest}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => setShowPassword(prev => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        <label className={styles.label}>Password</label>
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}

export default PasswordField