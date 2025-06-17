import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {


    return (
        <div className="card d-flex  flex-row allign-items-center p-3  mx-auto px-5 py-4 custom-card-bg w-100 " >
            <div className= " contact-image v-20 " style={{ width: "285px"   }}>
                <img src="https://miro.medium.com/v2/resize:fit:736/1*YqfVlyCe06DfcPsR3kpYrw.jpeg"  className=" img-fluid  rounded-circle mx-auto d-block "   style={{ objectFit: "cover", objectPosition: "2px center", height: "200px", width: "200px" }}  />
            </div>
          
            <ul className="list-group list-group-flush border-0  p-3  " style={{ width: "100%" }}>
                <li className="list-group-item border-0 fs-3 bg-transparent text-white"  ><p><strong > John Doe </strong></p> </li>
                <li className="list-group-item border-0 fs-5 bg-transparent text-white"> <FontAwesomeIcon icon={faLocationDot} className="me-3 text-primary" />5000 university dr , 33178 </li>
                 <li className="list-group-item border-0 fs-5 bg-transparent text-white "> <FontAwesomeIcon icon={faPhone} className="me-3 text-success"  /> (000)-000-0000 </li>
                <li className="list-group-item border-0 fs-5 bg-transparent text-white "> <FontAwesomeIcon icon={faEnvelope} className="me-3 text-white"   /> Johndoe@gmail.com </li>
                
            </ul>
            <div className="d-flex flex-colum justify-content-center align-items-center ms-auto pe-4  ">
                <Link to="/AddContact">
                    <FontAwesomeIcon icon={faPenToSquare} className=" p-4 fs-4 text-white  " />
                </Link>
                 
                <FontAwesomeIcon icon={faTrash} className=" fs-4 "/>
            </div>

           

            



        </div>
    );
};


