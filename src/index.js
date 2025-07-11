import dotenv from 'dotenv';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

dotenv.config();

try {
  await initMongoConnection();
  await setupServer();
} catch (err) {
  console.error('App failed to start:', err);
  process.exit(1);
}
