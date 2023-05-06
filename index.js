const argv = require('yargs').argv;
const contacts = require('./contact');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'listContacts':
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case 'getContactById':
            const contact = await contacts.getContactById(id);
            return console.log(contact);
        case 'removeContact':
            const deletedContact = await contacts.removeContact(id);
            return console.log(deletedContact);
        case 'addContact':
            const addedContact = await contacts.addContact(name, email, phone);
            return console.log(addedContact);
        case 'help':
            return console.log(
                'listContacts - to see all contacts \ngetContactById - to see contact \nremoveContact - to remove contact \nremoveContact - to add contact \nhelp - to see all actions'
            );
        default:
            return console.log('Unknow action! Input "-- action help" to see all actions');
    }
};

invokeAction(argv);

// invokeAction({ action: "listContacts"});
// invokeAction({ action: 'getContactById', id: '1' });
// invokeAction({ action: 'removeContact', id: '_AXwvI6gtJ2fliGWr3Tiz' });
// invokeAction({
//     action: 'addContact',
//     name: 'Volodymyr',
//     email: 'mospan.volodymyr@gmail.com',
//     phone: '(063) 030-7592',
// });

//   {
//     "id": "1",
//     "name": "Volodymyr Mospan",
//     "email": "MospanVolodymyr@gmail.com",
//     "phone": "(063) 030-7592"
//   }
