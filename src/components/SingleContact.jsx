import { useState, useEffect } from "react";
import AddressView from "./AddressView";

export default function SingleContact({ selectedId, setSelectedId }) {
  const [contact, setContact] = useState([]);
  const [address,setAddress] =useState([]);
  const [company,setCompany] = useState([]);

  useEffect(() => {
    async function fetchSingleContact() {
      try{
        const response = await fetch(
            `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedId}`
          );
          const data = await response.json();
          setContact(data)
          setAddress(data.address);
          setCompany(data.company);
          
          
      }catch(e){
        console.error(e)
      }

    }
    fetchSingleContact();
  }, []);


  
  return(
   <div className="single-card">

    <h2 className="horizontal">{"Name : "+contact.name}</h2>
    <h3 className="horizontal">{"Email : "+contact.email}</h3>
    <h3 className="horizontal">{"User Name : "+contact.username}</h3>
    <h3 className="horizontal">{"Phone : "+contact.phone}</h3>
    <h3 className="horizontal">{"Website : "+contact.website}</h3>
 
    <div className="horizontal">
        <h3>Address : </h3>
         <AddressView street={address.street} suite={address.suite} city={address.city} zipcode={address.zipcode}/>
    </div>
    
    <h3>Company : </h3>
    
      <p>{company.name}</p>  
      <p>{company.catchPhrase}</p> 
      <p>{company.bs}</p>
      <div><button className="close-button" onClick={()=>setSelectedId(null)}>Close</button></div>
      </div>

   
  );  
    
    


}
