function addItem(newItem) {
  let contacts = getContacts();
  contacts.push(newItem);
  setContacts(contacts);
  return getContacts();
}

function deleteItem(email) {
  const contacts = getContacts();
  const newContacts = contacts.filter(function(item) {
    return item.email !== email;
  });

  setContacts(newContacts);
  return getContacts();
}

function getContacts () {
    try {
        return JSON.parse(window.localStorage.getItem('contacts'))
    } catch (e) {
        console.error('Uh-oh! Contacts in localStorage was not valid JSON')
        return null
    }
}

function setContacts (newContacts) {
    window.localStorage.setItem('contacts', JSON.stringify(newContacts))
}

export {addItem, deleteItem, getContacts, setContacts}