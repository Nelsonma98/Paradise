import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  connection: process.env.DB_TYPE || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'paradise',
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
}));