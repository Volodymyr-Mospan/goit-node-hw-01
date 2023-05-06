const { Command } = require('commander');
// const argv = require('yargs').argv;
const contacts = require('./contact');

const program = new Command();
program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);
        case 'get':
            const contact = await contacts.getContactById(id);
            return console.log(contact);
        case 'remove':
            const deletedContact = await contacts.removeContact(id);
            return console.log(deletedContact);
        case 'add':
            const addedContact = await contacts.addContact(name, email, phone);
            return console.log(addedContact);
        case 'help':
            return console.log(
                'list - to see all contacts \nget - to see contact \nremove - to remove contact \nadd - to add contact \nhelp - to see all actions'
            );
        default:
            return console.warn(
                '\x1B[31m Unknow action! Input "-- action help" to see all actions'
            );
    }
};

invokeAction(argv);
