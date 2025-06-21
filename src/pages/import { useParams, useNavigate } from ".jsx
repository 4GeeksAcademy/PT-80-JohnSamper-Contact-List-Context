import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const APIBaseUrl = "https://playground.4geeks.com/contact";
const username = "Mocha";

export const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`${APIBaseUrl}/agendas/${username}/contacts/${id}`)
      .then(res => res.json())
      .then(data => setContact(data));
  }, [id]);

  const handleSave = async () => {
    const updatedContact = {
      name: contact.name,
      email: contact.email,
      agenda_slug: username,
      address: contact.address,
      phone: contact.phone
    };
    const response = await fetch(`${APIBaseUrl}/agendas/${username}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact)
    });
    if (response.ok) {
      navigate("/");
    } else {
      alert("Failed to update contact");
    }
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Contact</h2>
      <input value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} placeholder="Name" className="form-control mb-2" />
      <input value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} placeholder="Email" className="form-control mb-2" />
      <input value={contact.address} onChange={e => setContact({ ...contact, address: e.target.value })} placeholder="Address" className="form-control mb-2" />
      <input value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} placeholder="Phone" className="form-control mb-2" />
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};