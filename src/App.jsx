import ContactList from './components/ContactList'
import './App.css'
import { useEffect, useState } from 'react';
import SingleContact from './components/SingleContact';

function App() {
  const [selectedId,setSelectedId] = useState(null);

 


  return (
    <>
    {
      selectedId  
       ? <SingleContact selectedId={selectedId} setSelectedId={setSelectedId}/>
       : <ContactList selectedContact={setSelectedId}/>
    }
   
       
    </>
  )
}

export default App
