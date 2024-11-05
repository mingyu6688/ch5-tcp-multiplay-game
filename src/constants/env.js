import dotenv from 'dotenv';

dotenv.config();

export const HOST = process.env.HOST || '127.0.0.1';
export const PORT = process.env.PORT || '5555';
export const CLIENT_VERSION = process.env.CLIENT_VERSION || '1.0.0';

export const DB1_NAME = process.env.DB1_NAME || 'user_db';
export const DB1_USER = process.env.DB1_USER || 'root';
export const DB1_PASSWORD = process.env.DB1_PASSWORD || 'aaaa4321';
export const DB1_HOST = process.env.DB1_HOST || '127.0.0.1';
export const DB1_PORT = process.env.DB1_PORT || '3306';
