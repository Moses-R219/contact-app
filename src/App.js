// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactCard from './components/ContactCard';
import Home from './components/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/f' element={<Home contact={contacts}/>}>
      <Route element={<ContactForm/>}></Route>
      <Route element={<ContactCard/>}></Route>
    </Route>
  ))
 
  return (
    <div className="container ">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
