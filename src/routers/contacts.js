import express from 'express';
import * as ctrl from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

export const contactRouter = express.Router();

contactRouter.get('/', ctrlWrapper(ctrl.getAllContacts));
contactRouter.get('/:contactId', ctrlWrapper(ctrl.getContactById));
contactRouter.post('/', ctrlWrapper(ctrl.createContact));
contactRouter.patch('/:contactId', ctrlWrapper(ctrl.updateContact));
contactRouter.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));
