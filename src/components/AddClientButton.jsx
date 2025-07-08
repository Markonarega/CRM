const AddClientButton = ({ setIsModalOpen }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-950   hover:bg-blue-700 text-white px-4 py-2 rounded-lg 
          flex items-center "
        >
          +ADD Client
        </button>
      </div>
    </div>
  );
};

export default AddClientButton;
