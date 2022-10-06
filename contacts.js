const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    const arrayContacts = JSON.parse(contacts);
    console.table(arrayContacts);
    return contacts;
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

    const id = parseInt(lastElement[0].id) + 1;
    const newId = id.toString();

    const newContact = {
      id: newId,
      name,
      email,
      phone,
    };
    arrayContacts.push(newContact);
    // console.log(arrayContacts);
    fs.writeFile(contactsPath, JSON.stringify(arrayContacts));
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
