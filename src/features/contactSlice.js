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
          id: Date.now(),
          name: name,
          phone: phone,
          status: status,
        };
        console.log(newContact);
        state.contacts.push(newContact);
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const contactIndex = state.contacts.findIndex((contact) => contact.id === id);
    
      if (contactIndex !== -1) {
        
        state.contacts[contactIndex] = {
          ...state.contacts[contactIndex],
          name: updatedContact.name,
          phone: updatedContact.phone,
          status: updatedContact.status,
        };
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
