let contacts = [
    { id: 1, nom: "Jean Dupont", email: "jean@email.com", tel: "0123456789" },
    { id: 2, nom: "Marie Martin", email: "marie@email.com", tel: "0987654321" }
  ]
  
  export async function getContacts() {
    return contacts
  }
  
  export async function getContact(id) {
    console.log('getContacts called');
    return contacts.find(contact => contact.id === Number(id))
  }
  
  export async function updateContact(id, updates) {
    contacts = contacts.map(contact => {
      if (contact.id === Number(id)) {
        return { ...contact, ...updates }
      }
      return contact
    })
    return contacts.find(contact => contact.id === Number(id))
  }
  
  export async function deleteContact(id) {
    const contact = contacts.find(contact => contact.id === Number(id))
    contacts = contacts.filter(contact => contact.id !== Number(id))
    return contact
  }
  
  export async function createContact() {
    const id = Math.random().toString(36).substring(2, 9)
    const contact = { id, createdAt: Date.now() }
    contacts.unshift(contact)
    return contact
  }