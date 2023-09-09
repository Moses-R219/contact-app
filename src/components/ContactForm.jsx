// // src/components/ContactForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../features/contactSlice';

// const ContactForm = () => {
//     const dispatch=useDispatch();
//     const [name, setName] = useState('');
//     const [phone, setphone] = useState('');
//     const [status, setStatus] = useState('');
  
//       const handleSubmit=(e)=>{
//         e.preventDefault();
//         const newCont={name,phone,status};
//         dispatch(addContact(newCont))
//         setName('');
//         setStatus('active');
//         setphone('');
//       }
//     return (
//       <div className=" s-screen flex items-center justify-center max-w-md mx-auto mt-4 p-4 border rounded-lg shadow-lg ">
//         <form onSubmit={handleSubmit}>
//         <h2 className="text-2xl font-semibold mb-4">Add Contact</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2 "  htmlFor="name">
//               Name
//             </label>
//             <input
//               className="border rounded w-full py-2 px-3"
//               type="text"
//               id="name"
//               placeholder="Enter Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
//               Phone
//             </label>
//             <input
//               className="border rounded w-full py-2 px-3"
//               type="number"
//               id="number"
//               placeholder="Enter Phone"
//               value={phone}
//               onChange={(e) => setphone(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
//             <div>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   className="form-radio text-blue-500"
//                   name="status"
//                   value="active"
//                   checked={status === 'active'}
//                   onChange={(e) => setStatus(e.target.value)}
//                 />
//                 <span className="ml-2">Active</span>
//               </label>
//               <label className="inline-flex items-center ml-4">
//                 <input
//                   type="radio"
//                   className="form-radio text-red-500"
//                   name="status"
//                   value="inactive"
//                   checked={status === 'inactive'}
//                   onChange={(e) => setStatus(e.target.value)}
//                 />
//                 <span className="ml-2">Inactive</span>
//               </label>
//             </div>
//           </div>
//           <div className="text-center">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
//               type="submit"
//             >
//               Add Contact
//             </button>
//           </div>
//         </form>
//       </div>
//   );
// };

// export default ContactForm;

// ContactForm.js
import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {addContact} from '../features/contactSlice'
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(), // Generate a unique ID
      name,
      phone,
      status,
    };
    dispatch(addContact(newContact));
    setName('');
    setPhone('');
    setStatus('active');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="rounded-md p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            Status:
            <input
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
              className="ml-2 form-radio text-blue-500"
            />
            <span className="ml-1 text-blue-500">Active</span>
          </label>
          <label className="flex items-center ml-4">
            <input
              type="radio"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
              className="ml-2 form-radio text-red-500"
            />
            <span className="ml-1 text-red-500">Inactive</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
