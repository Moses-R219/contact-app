import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact, deleteContact } from "../features/contactSlice";

const ContactCard = ({ contact }) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name || " ");
  const [editedPhone, setEditedPhone] = useState(contact.phone || " ");
  const [editedStatus, setEditedStatus] = useState(contact.status || " ");
  const [currentContactId, setCurrentContactId] = useState(null); // Store the current contact id

  const handleEdit = (id) => {
    setCurrentContactId(id); 
    setIsEditing(true);
  };

  const handleSave = (name, phone, status ) => {
    dispatch(
      editContact({
        id: currentContactId,
        updatedContact: { name:name, phone:phone, status },
      })
    );
    console.log(name,phone,status);
    setIsEditing(false);
  };

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md space-y-2">
      {isEditing ? (
        <>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          value={editedPhone}
          onChange={(e) => setEditedPhone(e.target.value)}
          className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="active"
              checked={editedStatus === "active"}
              onChange={() => setEditedStatus("active")}
              className="ml-2 form-radio text-blue-500"
            />
            <span className="ml-1 text-blue-500">Active</span>
          </label>
          <label className="flex items-center ml-4">
            <input
              type="radio"
              value="inactive"
              checked={editedStatus === "inactive"}
              onChange={() => setEditedStatus("inactive")}
              className="ml-2 form-radio text-red-500"
            />
            <span className="ml-1 text-red-500">Inactive</span>
          </label>
        </div>
        <button
          onClick={()=>handleSave(editedName,editedPhone,editedStatus)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </>
      ) : (
        <>
          {contacts.map((contact) => (
            <div key={contact.id}>
              <div>
                <div className="text-lg font-semibold">Name: {contact.name}</div>
                <div className="text-lg">Phone: {contact.phone}</div>
                <div className="text-lg">Status: {contact.status}</div>
              </div>
              <div className="flex justify-evenly">
                <button
                  onClick={() => handleEdit(contact.id)} // Pass the contact id to handleEdit
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={()=>handleDelete(contact.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ContactCard;
