import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const emailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});