import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import { initMongoConnection } from '../db/initMongoConnection.js';
import { Contact } from '../db/models/contacts.js';

dotenv.config();

async function importContacts() {
  try {
    await initMongoConnection();
    console.log('Connected to MongoDB');

    const contactsFilePath = path.join(process.cwd(), 'contacts.json');
    const contactsData = await fs.readFile(contactsFilePath, 'utf-8');
    const contacts = JSON.parse(contactsData);

    console.log(`Found ${contacts.length} contacts to import`);

    await Contact.deleteMany({});
    console.log('Cleared existing contacts');

    const result = await Contact.insertMany(contacts);
    console.log(`Successfully imported ${result.length} contacts`);

    const totalContacts = await Contact.countDocuments();
    console.log(`Total contacts in database: ${totalContacts}`);

    process.exit(0);
  } catch (error) {
    console.error('Error importing contacts:', error);
    process.exit(1);
  }
}
importContacts();