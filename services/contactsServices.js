// const Contact = require("../models/contact");

// const fs = require("fs/promises");
// const path = require("path");
// const { nanoid } = require("nanoid");

// const contactsPath = path.resolve("./db/contacts.json");

// const getAllContacts = async () => {
//   const result = await fs.readFile(contactsPath);
//   return JSON.parse(result);
// };

// const getContactById = async (id) => {
//   const contacts = await getAllContacts();
//   const result = contacts.find((item) => item.id === id);
//   return result || null;
// };

// const removeContact = async (id) => {
//   const contacts = await getAllContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(index, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return result;
// };

// const addContact = async (data) => {
//   const contacts = await getAllContacts();
//   const newContact = {
//     id: nanoid(),
//     ...data,
//   };

//   contacts.push(newContact);

//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return newContact;
// };

// const updateContactById = async (id, data) => {
//   const contacts = await getAllContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }

//   contacts[index] = { ...contacts[index], ...data };

//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//   return contacts[index];
// };

// module.exports = {
//   getAllContacts,
//   // getContactById,
//   // removeContact,
//   // addContact,
//   // updateContactById,
// };
