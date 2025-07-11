import createError from 'http-errors';
import { contactService } from '../services/contacts.js';

export const getAllContacts = async (req, res) => {
  const result = await contactService.getAllContacts();
  res.status(200).json({ status: 200, message: 'Contacts found', data: result });
};

export const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.getContactById(contactId);
  if (!result) throw createError(404, 'Contact not found');
  res.status(200).json({ status: 200, message: 'Contact found', data: result });
};

export const createContact = async (req, res) => {
  const newContact = await contactService.createContact(req.body);
  res.status(201).json({ status: 201, message: 'Successfully created a contact!', data: newContact });
};

export const updateContact = async (req, res) => {
  const updated = await contactService.updateContact(req.params.contactId, req.body);
  if (!updated) throw createError(404, 'Contact not found');
  res.status(200).json({ status: 200, message: 'Successfully patched a contact!', data: updated });
};

export const deleteContact = async (req, res) => {
  const deleted = await contactService.deleteContact(req.params.contactId);
  if (!deleted) throw createError(404, 'Contact not found');
  res.status(204).send();
};
