import { FaBell, FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-3 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-900">
        Freelancer Dashboard
      </h1>

      <div className="flex items-center space-x-4">
        {/* Notifications button */}
        <button className="relative p-1 text-blue-950 hover:text-gray-700">
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          <FaBell />
        </button>

        {/* Search field with icon */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-950">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search…"
            className="pl-10 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
