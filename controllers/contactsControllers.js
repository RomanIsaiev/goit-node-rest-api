import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await listContacts();
    return res.json({
      status: "success",
      code: 200,
      data: contacts,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ status: error, code: 500, message: "Internal server error" });
  }
};

export const getContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const contact = await getContactById(contactId);
    if (contact) {
      return res.json({
        status: "success",
        code: 200,
        data: contact,
      });
    } else {
      return res
        .status(404)
        .json({ status: error, code: 404, message: "Contact not found" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(404)
      .json({ status: error, code: 404, message: "Not found" });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const contact = await removeContact(contactId);
    if (contact) {
      return res.json({
        status: "success",
        code: 200,
        data: contact,
      });
    } else {
      return res
        .status(404)
        .json({ status: error, code: 404, message: "Contact not found" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(404)
      .json({ status: error, code: 404, message: "Not found" });
  }
};

export const createContact = async (req, res) => {
  try {
    const { error, value } = createContactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { name, email, phone } = value;
    const contact = await addContact(name, email, phone);
    res.status(201).json({
      status: "success",
      code: 201,
      data: contact,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const changeContactDate = async (req, res) => {
  try {
    const { error } = updateContactSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        status: error,
        code: 400,
        message: "Body must have at least one field",
      });
    }

    const contactId = req.params.id;
    const contact = await getContactById(contactId, req.body);

    if (contact) {
      return res.json({
        status: "success",
        code: 200,
        data: contact,
      });
    } else {
      return res
        .status(404)
        .json({ status: error, code: 404, message: "Contact not found" });
    }
  } catch (error) {}
};
