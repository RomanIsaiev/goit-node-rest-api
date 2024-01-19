import { nanoid } from "nanoid";
import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("./db/contacts.json");

async function readFileContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

export async function listContacts() {
  try {
    return await readFileContacts();
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export async function getContactById(contactId) {
  try {
    const contacts = await readFileContacts();
    const contact = contacts.find((c) => c.id === contactId);
    return contact || null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function removeContact(contactId) {
  try {
    const contacts = await readFileContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index !== -1) {
      const removedContact = contacts.splice(index, 1)[0];
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
      return removedContact;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function addContact(name, email, phone) {
  try {
    const contacts = await readFileContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };

    contacts.push(newContact);

    await fs.writeFile(
      contactsPath,
      JSON.stringify(contacts, null, 2),
      "utf-8"
    );

    return newContact;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export async function updateContact(contactId, data) {
  try {
    const contacts = await readFileContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index === -1) {
      return null;
    }

    if (data.name !== undefined) {
      contacts[index].name = data.name;
    }
    if (data.email !== undefined) {
      contacts[index].email = data.email;
    }
    if (data.phone !== undefined) {
      contacts[index].phone = data.phone;
    }

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return contacts[index];
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
