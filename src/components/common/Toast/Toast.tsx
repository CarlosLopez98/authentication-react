import React, { useEffect } from 'react'
import styles from "./Toast.module.css";
import { ToastTypes, type ToastProps } from '../../../types/toast.d';

const Toast: React.FC<ToastProps> = ({ message, type = ToastTypes.SUCCESS, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const setType = () => {
    if (type == ToastTypes.INFO)
      return styles.info

    if (type == ToastTypes.SUCCESS)
      return styles.success

    if (type == ToastTypes.WARNING)
      return styles.warning

    if (type == ToastTypes.ERROR)
      return styles.error
  }

  return (
    <div className={`${styles.container} ${setType()}`}>{message}</div>
  )
}

export default Toast