import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({selectedContact}) {
  const [contacts, setContacts] = useState(dummyContacts);


  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        setContacts(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="4"><h1>CONTACT LIST</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h3>Name</h3></td>
            <td><h3>Email</h3></td>
            <td><h3>Phone</h3></td>
          </tr>
          {contacts.map((contact) => {
            return (
              <tr onClick={()=>selectedContact(contact.id)}>
                <ContactRow
                
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
              />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
