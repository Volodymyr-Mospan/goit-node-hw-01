const contacts = require("./contact");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getContactById":
      const contact = await contacts.getContactById();
      return console.log(contact);
  }
};

// console.log(contacts.listContacts());
invokeAction({ action: "getContactById", id: 1 });
