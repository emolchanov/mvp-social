declare module '*.css';

/**
 * we don't have to specify these modules (declare module '*.module.css', declare module '*.module.scss')
 * manually because they are already imported here `next-env.d.ts:1`
 */

declare namespace NodeJS {
  interface ProcessEnv {}
}

interface Window {
  env: Record<string, string | undefined> & {};
}
