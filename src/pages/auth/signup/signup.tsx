import React from 'react'
import useAuth from '../../../hooks/useAuth';
import useToast from '../../../hooks/useToast';
import { ToastTypes } from '../../../types/toast.d';
import InputField from '../../../components/common/InputField/InputField';
import PasswordField from '../../../components/common/PasswordField/PasswordField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupFormSchema } from '../../../validations/auth.validation';
import type { z } from 'zod';
import youngManImg from '../../../assets/youngman2.svg';
import styles from './signup.module.css';

type FormData = z.infer<typeof signupFormSchema>;

const Signup: React.FC = () => {
  const { signup } = useAuth();
  const { addToast } = useToast();

  const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({ resolver: zodResolver(signupFormSchema) });

  const onSubmit = async (data: FormData) => {
    try {
      await signup(data.firstname, data.lastname, data.email, data.password);
    } catch (e) {
      if (e instanceof Error) {
        addToast(e.message, ToastTypes.ERROR);
      } else {
        addToast("Unexpected error ocurred!", ToastTypes.ERROR);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.bgShape}>
        <img src={youngManImg} alt="coding" width={250} />
      </div>

      <div className={styles.bgShapeDesktop}>
        <img src={youngManImg} alt="coding" width={500} />
      </div>

      <h1 className={styles.title}>Sign up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.subtitle}>Join Us!</h2>

        <div className={styles.fields}>
          <InputField
            label="First Name"
            placeholder="Enter your name"
            {...register("firstname")}
            error={errors.firstname?.message}
          />

          <InputField
            label="Last Name"
            placeholder="Enter last name"
            {...register("lastname")}
            error={errors.lastname?.message}
          />

          <InputField
            label="Email"
            placeholder="Enter email"
            {...register("email")}
            error={errors.email?.message}
          />

          <PasswordField
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        <button type="submit">create account</button>

        <p className={styles.login}>If you already have an account <a href="/login">login</a></p>
      </form>
    </div>
  )
}

export default Signup