const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

async function listContacts() {
    const listContacts = await fs.readFile(contactsPath);
    return JSON.parse(listContacts);
}

async function getContactById(contactId) {
    const allContact = await listContacts();
    const contact = allContact.find(contact => contact.id === contactId);
    return contact || null;
}

async function removeContact(contactId) {
    const allContact = await listContacts();
    const contactIndex = allContact.findIndex(contact => contact.id === contactId);
    if (contactIndex === -1) {
        return null;
    }
    const contact = allContact.splice(contactIndex, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContact, null, 2));
    return contact;
}

function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
};
