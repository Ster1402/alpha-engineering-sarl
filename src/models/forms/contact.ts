import { z } from 'zod';

const ContactSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
    subject: z.string().optional(),
  })
  .required({
    name: true,
    message: true,
  });

export { ContactSchema };
