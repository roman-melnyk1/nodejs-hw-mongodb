import dotenv from 'dotenv';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

dotenv.config();

try {
  await initMongoConnection();
  console.log('MongoDB connected successfully');
  
  await setupServer();
} catch (error) {
  console.error('Failed to start application:', error);
  process.exit(1);
}