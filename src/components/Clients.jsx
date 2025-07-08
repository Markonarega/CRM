import { useState } from "react";
import ClientTable from "./ClientTable";
import ClientModal from "./ClientModal";
import AddClientButton from "./AddClientButton";
const Clients = ({ clients, addClient }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(newClient);
    setNewClient({ name: "", email: "", phone: "" });
    setIsModalOpen(false);
  };

  return (
    <div>
      <AddClientButton setIsModalOpen={setIsModalOpen} />
      <ClientTable clients={clients} />
      <ClientModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        newClient={newClient}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Clients;
