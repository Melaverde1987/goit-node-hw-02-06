import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import { isEmptyBody } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", contactsController.getById);

contactsRouter.post("/", isEmptyBody, contactsController.add);

contactsRouter.put("/:id", isEmptyBody, contactsController.updateById);

contactsRouter.delete("/:id", contactsController.deleteById);

export default contactsRouter;

/*
import contactsService from "../../models/contacts/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", async (req, res, next) => {
  const result = await contactsService.listContacts();
  res.json(result);
});

contactsRouter.get("/:contactId", async (req, res, next) => {
  const id = req.params.contactId;
  const result = await contactsService.getContactById(id);
  res.json(result || res.status(404).json({ message: "Not found" }));
});

contactsRouter.post("/", async (req, res, next) => {
  const contacts = await contactsService.listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
});

contactsRouter.delete("/:contactId", async (req, res, next) => {
  const contacts = await contactsService.listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
});

contactsRouter.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

export default contactsRouter;
*/
