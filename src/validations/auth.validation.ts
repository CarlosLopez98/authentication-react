import { z } from 'zod';

export const signupFormSchema = z.object({
  firstname: z.string()
    .min(1, "Firstname is required")
    .max(50, "Firstname is too long")
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Firstname only can contain letters"),

  lastname: z.string()
    .min(1, "Lastname is required")
    .max(50, "Lastname is too long")
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Lastname only can contain letters"),

  email: z.string()
    .min(1, "Email is required")
    .email("Email is not valid"),

  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be at last 100 characters')
    .regex(/[A-Za-z]/, 'Password must be contain a letter')
    .regex(/\d/, 'Password mut be contain a number'),
})