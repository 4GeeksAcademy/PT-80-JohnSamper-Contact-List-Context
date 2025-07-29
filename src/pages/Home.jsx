import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom";
import { Contact } from "../components/Contact"

import { useState , useEffect } from "react";



const API_URL = "https://playground.4geeks.com/contact"
const Username = "Mocha"




export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


  const [fullName, setFullName] = useState("");
  const [ Address , setAddress]  = useState("");
  const [PhoneNumber , setPhoneNumber ] = useState("");
  const [Email, setEmail] = useState("");


  useEffect(() => {
  const createAgendaAndFetchContacts = async () => {
  
    try {
      // should hopfuy creat an agenda if it doesn't exist

       await fetch(`${API_URL}/agendas/${Username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      //fetchees
      const response = await fetch(`${API_URL}/agendas/${Username}`);
      const data = await response.json();
      console.log("Fetched contacts:", data.contacts);
      dispatch({ type: "SET_CONTACTS", payload: data.contacts });
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  };

   createAgendaAndFetchContacts();
}, []);
 
console.log("Store contacts:", store.contacts);

const handleDeleteContact = async (contactId) => {
  try {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/Mocha/contacts/${contactId}`,
      { method: "DELETE" }
    );
    if (response.ok) {
      // Remove from local state
      dispatch({
        type: "SET_CONTACTS",
        payload: store.contacts.filter(c => c.id !== contactId)
      });
    } else {
      alert("Failed to delete contact.");
    }
  } catch (error) {
    alert("Error deleting contact: " + error.message);
  }
};


	return (
		<div className="container   ">
			<div className="d-flex">
				<div className="ms-auto p-4 ">
					<Link to="/AddContact">
						<button className="btn btn-success onClick={onDelete} ">Add New Contact </button>
					</Link>
				</div>
			</div> 
			<div className=" d-flex flex-column gap-3" style={{ maxWidth: "85rem" }}>

				  {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
        store.contacts.map((contact, index) => (
            <Contact key={contact.id} contact={contact} onDelete={() => handleDeleteContact(contact.id)} />
        ))
    ) : (
        <div className="text-center text-muted p-5">
            No contacts yet. Click "Add New Contact" to get started!
        </div>
    )}
									
			</div>
			
			
			   
		</div>
	);
};