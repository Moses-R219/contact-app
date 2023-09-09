// // src/App.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import Home from './components/Home';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


// const App = () => {
//   const contacts = useSelector(state => state.contacts.contacts);
  
 
//   return (
//     <div>
//     <Home contact={contacts}/>

//     </div>
//   );
// };

// export default App;

// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactCard from './components/ContactCard';

function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  console.log(contacts);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact List</h1>
      <ContactForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
