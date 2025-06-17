// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useNavigate } from "react-router-dom"; // Hook for navigation.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";


import { useState , useEffect } from "react";



/// this is a page component for adding a new contact
export const AddContact = () => {

    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()

     
    const navigate = useNavigate();

    const handeleClick = () => {
        navigate("/");
    };
// https://playground.4geeks.com/contact/agendas/Mocha/contacts
 const APIBaseUrl = "https://playground.4geeks.com/contact";
 const username = "Mocha";

  const [fullName, setFullName] = useState("");
  const [ Address , setAddress ] = useState("");
  const [ PhoneNumber , setPhoneNumber ] = useState("");
  const [Email, setEmail] = useState("");



  const handleSaveContact = async () => {
    // Create a new contact object with the form data.
     const newContact = {
        full_name: fullName,
        email: Email,
        agenda_slug: "Mocha",
        address: Address,
        phone: PhoneNumber
  };

  try{
    // Send a POST request to the API to save the new contact.
        const response = await fetch(`${APIBaseUrl}/agendas/${username}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newContact)
        });

        if (response.ok) {
            // If the request is successful, dispatch an action to update the global state.
            dispatch({ type: "ADD_CONTACT", payload: newContact });
            navigate("/"); // Navigate back to the contacts list.
        } else {
            console.error("Failed to save contact");
        }
    } catch (error) {
        console.error("Error saving contact:", error);
  }

  console.log("Contact saved:", newContact);
  console.log(handleSaveContact)
    };



//this component renders a form for adding a new contact
    return (

        <div>

          <div className="container position-relative pt-5">
            <h1 className="text-center text-white">Add a New Contact</h1>
            <FontAwesomeIcon icon={faUserXmark}  className="position-absolute top-0 end-0 m-3 p-4" size="2x"
            onClick={handeleClick} style={{ cursor: "pointer", color: "red" }}
            />
          </div>
            
{/* /// This section contains the form for entering contact details. */}

            <div className="container p-5 "> 
               <div className=" input-group-lg row g-3 ">
                    <label htmlFor="inputName5" className="form-label"> Full Name</label>
                    <input type="text" id="inputName5" className="form-control" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder="Full Name " />

                    <label htmlFor="Email" className="form-label"> Email</label>
                    <input type="Email" id="email" className="form-control"  onChange={(e) => setEmail(e.target.value)} value={Email} placeholder=" Enter Email" />

                    <label htmlFor="phone" className="form-label"> Phone </label>
                    <input type="text" id="inputName5" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} value= {PhoneNumber}placeholder="(000)-000-0000" />
                    
                    <label htmlFor="Address" className="form-label"> Address </label>
                    <input type="text" id="address" className="form-control" onChange = {(e)=> setAddress(e.target.value)} placeholder="Enter Address " />
               </div> 
            </div>
{/* // This section contains buttons for saving the contact and navigating back to the contacts list. */}
            <div className="d-grid gap-2 p-5">
                <button className="btn btn-primary" type="button" onClick={handleSaveContact}> Save Contact </button>
{/* //this button navigates back to the contacts list */}
                <Link to="/">
                    <button className="btn btn-link text-danger"> Back to Contacts </button>
                </Link>
            
            </div>
        </div>
    );



};