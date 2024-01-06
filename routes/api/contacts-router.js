import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import {
  isEmptyBody,
  isEmptyBodyFavorite,
  isValidId,
} from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post("/", isEmptyBody, contactsController.add);

contactsRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  contactsController.updateById
);

contactsRouter.delete("/:id", isValidId, contactsController.deleteById);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBodyFavorite,
  contactsController.updateStatusContact
);

export default contactsRouter;
