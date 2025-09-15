import z from "zod";

//basic validation
/*
const signupSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),

})
*/

//better validation
export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .regex(/^[a-zA-Z/s]+$/, "Name can only contain letters and spaces"),

  //annotate
  email: z
    .string()
    .email("Invalid email address")
    .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Only Gmail and Yahoo emails are allowed",
    }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "password must not exceed 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@$!%*?&)"
    ),
});
