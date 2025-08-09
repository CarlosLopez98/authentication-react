import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import youngManImg from "../../../assets/youngman.svg"
import InputField from '../../../components/common/InputField/InputField';
import PasswordField from '../../../components/common/PasswordField/PasswordField';
import useToast from '../../../hooks/useToast';
import { ToastTypes } from '../../../types/toast.d';
import styles from './login.module.css';

const Login: React.FC = () => {
  const { login } = useAuth();
  const { addToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (email.length == 0 || password.length == 0) throw new Error("Fill in the fields to login.");
      if (error) throw new Error("Email is not valid.")

      await login(email, password)
    } catch (e) {
      if (e instanceof Error) {
        addToast(e.message, ToastTypes.ERROR);
      } else {
        addToast("Unexpected error ocurred!", ToastTypes.ERROR);
      }
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value))
      setError(false);
    else
      setError(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bgShape}>
        <img src={youngManImg} alt="coding" width={200} />
      </div>

      <div className={styles.bgShapeDesktop}>
        <img src={youngManImg} alt="coding" width={350} />
      </div>

      <h1 className={styles.title}>Login</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.subtitle}>Welcome Back!</h2>
        <div className={styles.fields}>
          <InputField
            label="Email"
            placeholder="email@gmail.com"
            value={email}
            error={error}
            onChange={onChangeEmail}
          />

          <PasswordField
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <a className={styles.forgot} href="/login">Forgot Password</a>
        </div>

        <button type="submit">login</button>

        <p className={styles.signup}>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  )
}

export default Login