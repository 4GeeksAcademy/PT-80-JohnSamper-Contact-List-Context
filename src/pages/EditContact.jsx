import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const APIBaseUrl = "https://playground.4geeks.com/contact";
const username = "Mocha";

export const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`${APIBaseUrl}/agendas/${username}/contacts/${id}`);
        const data = await response.json();
        setFullName(data.name);
        setAddress(data.address);
        setPhoneNumber(data.phone);
        setEmail(data.email);
      } catch (err) {
        console.error("Error fetching contact:", err);
      }
    };
    fetchContact();
  }, [id]);

  const handleClick = () => {
    navigate("/");
  };

  const handleSave = async () => {
    const updatedContact = {
      name: fullName.trim(),
      email: Email.trim(),
      agenda_slug: username,
      address: Address.trim(),
      phone: PhoneNumber.trim()
    };

    try {
      const response = await fetch(`${APIBaseUrl}/agendas/${username}/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact)
      });

      if (response.ok) {
        navigate("/");
      } else {
        const errData = await response.json();
        alert("Failed to update contact: " + (errData.msg || JSON.stringify(errData)));
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Error updating contact: " + error.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="container position-relative pt-5">
        <h1 className="text-center text-white">Edit Contact</h1>
        <FontAwesomeIcon
          icon={faUserXmark}
          className="position-absolute top-0 end-0 m-3 p-4"
          size="2x"
          onClick={handleClick}
          style={{ cursor: "pointer", color: "red" }}
        />
      </div>

      {/* Form */}
      <div className="container p-5">
        <div className="input-group-lg row g-3">
          <label htmlFor="inputName5" className="form-label">Full Name</label>
          <input type="text" id="inputName5" className="form-control" onChange={(e) => setFullName(e.target.value)} value={fullName} placeholder="Full Name" />

          <label htmlFor="Email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={Email} placeholder="Enter Email" />

          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" id="phone" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} value={PhoneNumber} placeholder="(000)-000-0000" />

          <label htmlFor="Address" className="form-label">Address</label>
          <input type="text" id="address" className="form-control" onChange={(e) => setAddress(e.target.value)} value={Address} placeholder="Enter Address" />
        </div>
      </div>

      {/* Buttons */}
      <div className="d-grid gap-2 p-5">
        <button className="btn btn-primary" type="button" onClick={handleSave}>Save Contact</button>
        <Link to="/">
          <button className="btn btn-link text-danger">Back to Contacts</button>
        </Link>
      </div>
    </div>
  );
};