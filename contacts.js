const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    const arrayContacts = JSON.parse(contacts);
    console.table(arrayContacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  const contactIdString = contactId.toString();
  try {
    const сontacts = await fs.readFile(contactsPath, "utf8");
    const arrayContacts = JSON.parse(сontacts);
    const findContactbyId = arrayContacts.find(
      (item) => item.id === contactIdString
    );
    console.log(findContactbyId);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  const contactIdString = contactId.toString();
  try {
    const сontacts = await fs.readFile(contactsPath, "utf8");
    const arrayContacts = JSON.parse(сontacts);
    const newArrayContacts = arrayContacts.filter(
      (item) => item.id !== contactIdString
    );

    fs.writeFile(contactsPath, JSON.stringify(newArrayContacts), (err) => {
      if (err) console.error(err);
    });
  } catch (error) {
    console.log(error);
  }
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
    const newArrayContacts = JSON.stringify([...arrayContacts, newContact]);
    fs.writeFile(contactsPath, newArrayContacts, (err) => {
      if (err) console.error(err);
    });
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
