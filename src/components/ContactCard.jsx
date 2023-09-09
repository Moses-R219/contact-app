// src/components/ContactCard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, deleteContact } from '../features/contactSlice';

const ContactCard = ({ contact }) => {
  console.log(contact);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedPhone, setEditedphone] = useState(contact.phone);
  const [editedStatus, setEditedStatus] = useState(contact.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(
      editContact({
        id: contact.id, 
        updatedContact: { name: editedName, phone: editedPhone, status: editedStatus },
      })
    );
    setIsEditing(false);
  };
  

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="border p-4 m-4">
      {isEditing ? (
               <form className="space-y-4">
               <div className="mb-4">
                 <label htmlFor="editedName" className="block font-semibold text-lg mb-2">
                   Name:
                 </label>
                 <input
                   type="text"
                   id="editedName"
                   value={editedName}
                   onChange={e => setEditedName(e.target.value)}
                   className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                 />
               </div>
               <div className="mb-4">
                 <label htmlFor="editedPhone" className="block font-semibold text-lg mb-2">
                   Phone:
                 </label>
                 <input
                   type="text"
                   id="editedPhone"
                   value={editedPhone}
                   onChange={e => setEditedphone(e.target.value)}
                   className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                 />
               </div>
               <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-500"
                name="status"
                value={'active'}
                onChange={(e) => setEditedStatus(e.target.value)}
              />
              <span className="ml-2">Active</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                className="form-radio text-red-500"
                name="status"
                value={'inactive'}
                onChange={(e) => setEditedStatus(e.target.value)}
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
          </div>
               <button
                 onClick={handleSave}
                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
               >
                 Save
               </button>
             </form>
     
      ) : (
        
          <div className='bg-gray-400 ' key={contact.id}>
            <p className="text-xl font-semibold mb-2">Name: {contact.name}</p>
            <p className="text-lg mb-4">Phone: {contact.phone}</p>
            <button
              onClick={handleEdit}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
            >
              Edit
            </button>
            <button
              onClick={()=>handleDelete(contact.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
            >
              Delete
            </button>
          </div>
        
        )}
    </div>
  );
};

export default ContactCard;
