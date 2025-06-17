import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom";
import { Contact } from "../components/Contact"

import { useState , useEffect } from "react";



const API_URL = "https://playground.4geeks.com/contact "
const Username = "Mocha%20 "




export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


  const [fullName, setFullName] = useState("");
  const { Address , setAddress } = useState("");
  const { PhoneNumber , setPhoneNumber } = useState("");
  const [Email, setEmail] = useState("");





	return (
		<div className="container   ">
			<div className="d-flex">
				<div className="ms-auto p-4 ">
					<Link to="/AddContact">
						<button className="btn btn-success ">Add New Contact </button>
					</Link>
				</div>
			</div>
			<div className=" d-flex flex-column gap-3 " style={{ maxWidth: "85rem" }} >
				<Contact />
				
			</div>
			
			
			   
		</div>
	);
}; 