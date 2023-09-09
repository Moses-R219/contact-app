// src/features/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
const initialState={
    contacts:[
    
]

}

const newContact = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
        const { name, phone, status } = action.payload;
        const newContact = {
          id: nanoid(),
          name: name,
          phone: phone,
          status: status,
        };
        state.contacts.push(newContact);
    },
    editContact: (state, action) => {
        const { id, updatedContact } = action.payload;
        const index = state.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
          // Make sure you update only the specific contact at 'index'
          state.contacts[index] = updatedContact;
        }
      },
      
    deleteContact: (state, action) => {
        
            const contactIdToDelete = action.payload;
            state.contacts = state.contacts.filter((contact) => contact.id !== contactIdToDelete);
    },
  },
});

export const { addContact, editContact, deleteContact } = newContact.actions;
export default newContact.reducer;
