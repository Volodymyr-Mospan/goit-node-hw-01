const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  const listContacts = await fs.readFile(contactsPath);
  return JSON.parse(listContacts);
}

async function getContactById(contactId) {
  const allContact = await listContacts();
  const contact = allContact.find((contact) => contact.id === contactId);
  return contact;
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
  listContacts,
  getContactById,
};
