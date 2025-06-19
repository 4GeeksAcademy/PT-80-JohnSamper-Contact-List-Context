import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import React from "react";




export const Contact = ({ contact, onDelete }) => {
    if(!contact) return null; 


    // const [fullName, setFullName] = useState("");
    // const [ Address , setAddress ] = useState("");
    // const [ PhoneNumber , setPhoneNumber ] = useState("");
    // const [Email, setEmail] = useState("");


    return (
        <div className="card d-flex  flex-row allign-items-center p-3  mx-auto px-5 py-4 custom-card-bg w-100 " >
            <div className= " contact-image v-20 " style={{ width: "285px"   }}>
                <img src="https://miro.medium.com/v2/resize:fit:736/1*YqfVlyCe06DfcPsR3kpYrw.jpeg"  className=" img-fluid  rounded-circle mx-auto d-block "   style={{ objectFit: "cover", objectPosition: "2px center", height: "200px", width: "200px" }}  />
            </div>
          
            <ul className="list-group list-group-flush border-0  p-3  " style={{ width: "100%" }}>
                <li className="list-group-item border-0 fs-3 bg-transparent text-white" placeholder="John Doe"  ><p><strong >
                     {contact.name} </strong></p> </li>
                <li className="list-group-item border-0 fs-5 bg-transparent text-white" placeholder="5000 University dr , 33178 "> <FontAwesomeIcon icon={faLocationDot} className="me-3 text-primary" />
                {contact.address} </li>
                 <li className="list-group-item border-0 fs-5 bg-transparent text-white " placeholder="(000)-000-0000"> <FontAwesomeIcon icon={faPhone} className="me-3 text-success"  /> 
                 {contact.phone} </li>
                <li className="list-group-item border-0 fs-5 bg-transparent text-white " placeholder="email@gmail.com"> <FontAwesomeIcon icon={faEnvelope} className="me-3 text-white"   /> 
                {contact.email} </li>
                
            </ul>
            <div className=" btn btn-link d-flex flex-colum justify-content-center align-items-center ms-auto pe-4 " onClick={() => navigate(`/edit/${contact.id}`)}>
                <Link to="/AddContact">
                    <FontAwesomeIcon icon={faPenToSquare} className=" p-4 fs-4 text-white  " />
                </Link>
                 
                <button
                    className="btn btn-link text-danger"
                    onClick={onDelete}
                    aria-label="Delete contact"
                  >
                    <FontAwesomeIcon icon={faTrash} className="fs-4" />
                  </button>
            </div>

           

            



        </div>
    );
};


