const express = require("express");

const validateBody = require("../helpers/validateBody");

const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas");

const ctrl = require("../controllers/contactsControllers");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAll);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.removeContact);

contactsRouter.post("/", validateBody(createContactSchema), ctrl.addContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  ctrl.updateContactById
);

module.exports = contactsRouter;
