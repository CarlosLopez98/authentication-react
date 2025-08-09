import React, { useRef, useState } from 'react'
import { ToastContext } from './contexts'
import Toast from '../components/common/Toast/Toast'
import { ToastTypes } from '../types/toast.d';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState("Toast message");
  const [type, setType] = useState<ToastTypes>(ToastTypes.SUCCESS);
  const [show, setShow] = useState(false);
  const timeout = useRef<number>(0);
  const timeoutGap = useRef(0);

  const addToast = (message: string, type: ToastTypes) => {
    clearTimeout(timeout.current);

    if (show) {
      clearTimeout(timeoutGap.current);
      setShow(false);

      timeoutGap.current = setTimeout(() => {
        setMessage(message);
        setType(type);
        setShow(true)
      }, 350);
    } else {
      setMessage(message);
      setType(type);
      setShow(true);
    }

    timeout.current = setTimeout(() => {
      setShow(false);
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      <div style={{
        position: "fixed",
        top: show ? 0 : -100,
        left: 0,
        right: 0,
        maxWidth: 400,
        padding: "12px 16px",
        margin: "0 auto",
        zIndex: 99,
        transition: "top ease-in-out 300ms",
      }}>
        <Toast message={message} type={type} onClose={() => { }} />
      </div>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider