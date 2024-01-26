const express = require("express");

const { validateBody, isValidId } = require("../middlewares");

const { schemas } = require("../models/contact");

const ctrl = require("../controllers/contactsControllers");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:id", isValidId, ctrl.getContactById);

contactsRouter.delete("/:id", isValidId, ctrl.removeContact);

contactsRouter.post(
  "/",
  validateBody(schemas.createContactSchema),
  ctrl.createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(schemas.updateContactSchema),
  ctrl.updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavotireSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
