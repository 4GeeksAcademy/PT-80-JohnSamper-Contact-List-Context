import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Navbar } from "../components/Navbar"
import { Link } from "react-router-dom";
import { Contact } from "../components/Contact"
export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container ">
			<div className="d-flex">
				<div className="ms-auto p-4 ">
					<Link to="/AddContact">
						<button className="btn btn-success ">Add New Contact </button>
					</Link>
				</div>
			</div>
			<Contact className=" g-3 "/>
			
			
		</div>
	);
}; 