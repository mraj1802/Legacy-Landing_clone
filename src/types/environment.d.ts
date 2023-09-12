export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SEND_GRID_KEY: string;
    }
  }
}
