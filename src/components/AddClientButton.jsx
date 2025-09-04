// The component is mostly correct, but here are a few improvements and fixes:
// 1. The button label should be more consistent in casing ("+ Add Client" instead of "+ADD Client").
// 2. Remove extra spaces in the className for the button.
// 3. The outer <div> is unnecessary; you can return the inner <div> directly.
// 4. Add PropTypes for better type checking and documentation.

import PropTypes from "prop-types";

const AddClientButton = ({ setIsModalOpen }) => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold text-gray-800">Clients</h1>
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-blue-950 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
    >
      + Add Client
    </button>
  </div>
);

AddClientButton.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default AddClientButton;
