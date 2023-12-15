export const isProd = process.env.NODE_ENV === 'production';

export const ENABLE_ANALYTICS = true;

//todo: fork and deploy your self hosted analytics, see https://github.com/electerious/Ackee
export const ACKEE_ANALYTICS_URL =
  'https://portfolio-ackee-analytics.vercel.app/';
export const ACKEE_ANALYTICS_SCRIPT_URL =
  'https://portfolio-ackee-analytics.vercel.app/auth.js';
export const ACKEE_DOMAIN_ID = 'da0db0a3-1855-4a95-ac17-8938db1a6c1e';
export const RESUME_PATH = '/resume.pdf';

export const ENABLE_SESSION_TRACKING = true;

//todo: create free account at hotjar.com and update values below
export const HOTJAR_SITE_ID = 3722387;
export const HOTJAR_VERSION = 6;
