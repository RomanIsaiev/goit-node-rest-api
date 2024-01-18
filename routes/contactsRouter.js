import express from "express";
import {
  getAllContacts,
  getContact,
  deleteContact,
  createContact,
  changeContactDate,
} from "../controllers/contactsControllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getContact);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", changeContactDate);

export default contactsRouter;
