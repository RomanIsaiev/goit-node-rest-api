const express = require("express");

const { validateBody, isValidId, authenticate } = require("../middlewares");

const { schemas } = require("../models/contact");

const ctrl = require("../controllers/contacts");

const contactsRouter = express.Router();

contactsRouter.get("/", authenticate, ctrl.getAll);

contactsRouter.get("/:id", authenticate, isValidId, ctrl.getContactById);

contactsRouter.delete("/:id", authenticate, isValidId, ctrl.removeContact);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(schemas.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.updateContactSchema),
  ctrl.updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavotireSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
