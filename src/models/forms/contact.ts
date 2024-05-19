import { z } from "zod";

const ContactSchema = z
  .object({
    name: z.string(),
    surname: z.string(),
    tel: z.string(),
    file: z.string().url(),
    email: z.string().email(),
    message: z.string(),
    subject: z.string().optional(),
  })
  .required({
    name: true,
    message: true,
  });

export { ContactSchema };
