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
import Home from './components/Home';

function App() {
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <div className="container mx-auto p-4">
      <Home contact={contacts}/>
      
    </div>
  );
}

export default App;
