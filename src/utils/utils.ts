import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getDomain = (link: string) => new URL(link).hostname;

export const delay = (millis: number) =>
  new Promise((r) => setTimeout(r, millis));
