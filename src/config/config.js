import { DB1_HOST, DB1_NAME, DB1_PASSWORD, DB1_PORT, DB1_USER } from '../constants/env.js';

export const config = {
  database: {
    database: DB1_NAME,
    host: DB1_HOST,
    password: DB1_PASSWORD,
    port: DB1_PORT,
    user: DB1_USER,
  },
};
