/// <reference types="vite/client" />

const obj = {
  __NAME__, // Don't define object shorthand property names
  __KEY__: value, // Don't define object key
}


declare interface ImportMetaEnv {
  VITE_APP_API_URL: string;
}