const ClientModal = ({
  isModalOpen,
  handleSubmit,
  handleInputChange,
  newClient,
  setIsModalOpen,
}) => {
  if (!isModalOpen) return null;
  return (
    <div>
      {isModalOpen && (
        <div className="bg-white rounded-lg w-full max-w-md">
          <div className="border-b p-4 flex justify-between items-center">
            <h3 className="text- font-semibold"> Add new Client </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-red-950 font-bold"
            >
              X
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newClient.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={newClient.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={newClient.phone}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="mr-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Client
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ClientModal;
