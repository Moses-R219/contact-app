// // src/components/ContactCard.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { editContact, deleteContact } from '../features/contactSlice';

// const ContactCard = ({ contact }) => {
//   const contacts=useSelector(state=>state.contacts.contacts)
//   console.log(contacts);
//   const dispatch = useDispatch();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedName, setEditedName] = useState(contact.name);
//   const [editedPhone, setEditedphone] = useState(contact.phone);
//   const [editedStatus, setEditedStatus] = useState(contact.status);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     console.log("moses");
//     dispatch(
//       editContact({
//         id: contact.id, 
//         updatedContact: { name: editedName, phone: editedPhone, status: editedStatus },
//       })
//     );
//     setIsEditing(false);
//   };
  

//   const handleDelete = (contactId) => {
//     dispatch(deleteContact(contactId));
//   };

//   return (
//     <div className="border p-4 m-4">
//       {isEditing ? (
//                <form className="space-y-4">
//                <div className="mb-4">
//                  <label htmlFor="editedName" className="block font-semibold text-lg mb-2">
//                    Name:
//                  </label>
//                  <input
//                    type="text"
//                    id="editedName"
//                    value={editedName}
//                    onChange={e => setEditedName(e.target.value)}
//                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                  />
//                </div>
//                <div className="mb-4">
//                  <label htmlFor="editedPhone" className="block font-semibold text-lg mb-2">
//                    Phone:
//                  </label>
//                  <input
//                    type="text"
//                    id="editedPhone"
//                    value={editedPhone}
//                    onChange={e => setEditedphone(e.target.value)}
//                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
//                  />
//                </div>
//                <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 className="form-radio text-blue-500"
//                 name="status"
//                 value={'active'}
//                 onChange={(e) => setEditedStatus(e.target.value)}
//               />
//               <span className="ml-2">Active</span>
//             </label>
//             <label className="inline-flex items-center ml-4">
//               <input
//                 type="radio"
//                 className="form-radio text-red-500"
//                 name="status"
//                 value={'inactive'}
//                 onChange={(e) => setEditedStatus(e.target.value)}
//               />
//               <span className="ml-2">Inactive</span>
//             </label>
//           </div>
//           </div>
//                <button
//                  onClick={handleSave}
//                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//                >
//                  Save
//                </button>
//              </form>
     
//       ) : (
//         <div>
//         {
//           contacts.map(contact=>(
//             <div className='bg-gray-400 ' >
//             <p className="text-xl font-semibold mb-2">Name: {contact.name}</p>
//             <p className="text-lg mb-4">Phone: {contact.phone}</p>
//             <button
//               onClick={handleEdit}
//               className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={()=>handleDelete(contact.id)}
//               className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
//             >
//               Delete
//             </button>
//           </div>
        
//           ))
//         }
//          </div> 
//         )}
//     </div>
//   );
// };

// export default ContactCard;



// ContactCard.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact, deleteContact } from '../features/contactSlice';


const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(contact.name);
  const [editedPhone, setEditedPhone] = useState(contact.phone);
  const [editedStatus, setEditedStatus] = useState(contact.status);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedContact = {
      id: contact.id,
      name: editedName,
      phone: editedPhone,
      status: editedStatus,
    };
    dispatch(editContact({ id: contact.id, updatedContact }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
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
                checked={editedStatus === 'active'}
                onChange={() => setEditedStatus('active')}
                className="ml-2 form-radio text-blue-500"
              />
              <span className="ml-1 text-blue-500">Active</span>
            </label>
            <label className="flex items-center ml-4">
              <input
                type="radio"
                value="inactive"
                checked={editedStatus === 'inactive'}
                onChange={() => setEditedStatus('inactive')}
                className="ml-2 form-radio text-red-500"
              />
              <span className="ml-1 text-red-500">Inactive</span>
            </label>
          </div>
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save
          </button>
        </>
      ) : (
        <>
        <div>
                    <div className="text-lg font-semibold">Name: {contact.name}</div>
                    <div className="text-lg">Phone: {contact.phone}</div>
                    <div className="text-lg">Status: {contact.status}</div>
        </div>
          <div className='flex justify-evenly'> 
          <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
            Edit
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Delete
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactCard;
