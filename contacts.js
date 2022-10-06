const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, "utf8");
    const arrayContacts = JSON.parse(contacts);
    console.table(arrayContacts);
  } catch (error) {
    console.log(error);
  }
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  try {
    const сontacts = await fs.readFile(contactsPath, "utf8");
    const arrayContacts = JSON.parse(сontacts);
    let lastElement = arrayContacts.slice(-1);
    // console.log(lastElement[0].id);
    const newId = parseInt(lastElement[0].id) + 1;
    // console.log(id);

    const newContact = `{
      "id": "${newId}",
      "name": "${name}",
      "email": "${email}",
      "phone": "${phone}",
    }`;
    fs.appendFile(contactsPath, newContact, "utf8");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
