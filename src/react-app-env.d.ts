/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}

type JSONValue = null | boolean | string | number | JSONValue[] | Record<string, JSONValue>
