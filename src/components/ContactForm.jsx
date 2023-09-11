import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import {addContact} from '../features/contactSlice'
import { nanoid } from '@reduxjs/toolkit';
import ContactCard from './ContactCard';

const ContactForm = ({contact}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id:Date.now(), 
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
      <h1>Contact</h1>
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
      <ContactCard contact={contact}/>
    </div>
  );
};

export default ContactForm;
