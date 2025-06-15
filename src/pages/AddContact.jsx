// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useNavigate } from "react-router-dom"; // Hook for navigation.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";

/// this is a page component for adding a new contact
export const AddContact = () => {

    // Access the global state and dispatch function using the useGlobalReducer hook.
    const { store, dispatch } = useGlobalReducer()

     
    const navigate = useNavigate();

    const handeleClick = () => {
        navigate("/");
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
                    <input type="text" id="inputName5" className="form-control" placeholder="Full Name " />

                    <label htmlFor="Email" className="form-label"> Email</label>
                    <input type="Email" id="email" className="form-control" placeholder=" Enter Email" />

                    <label htmlFor="phone" className="form-label"> Phone </label>
                    <input type="text" id="inputName5" className="form-control" placeholder="(000)-000-0000" />
                    
                    <label htmlFor="Address" className="form-label"> Address </label>
                    <input type="text" id="address" className="form-control" placeholder="Enter Address " />
               </div> 
            </div>
{/* // This section contains buttons for saving the contact and navigating back to the contacts list. */}
            <div className="d-grid gap-2 p-5">
                <button className="btn btn-primary" type="button"> Save Contact </button>
{/* //this button navigates back to the contacts list */}
                <Link to="/">
                    <button className="btn btn-link text-danger"> Back to Contacts </button>
                </Link>
            
            </div>
        </div>
    );



};