import { FaUsers } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { BiHourglass } from "react-icons/bi";

const Dashboard = ({ clients, projects, tasks }) => {
  const completedProjects = projects.filter(
    (p) => p.status === "Completed"
  ).length;
  const inProgressTasks = tasks.filter(
    (t) => t.status === "in Progress"
  ).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your overview.</p>
      </div>

      {/* stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Clients */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg mr-4">
              <FaUsers size={20} />
            </div>
            <div>
              <p className="text-gray-500">Total Clients</p>
              <h3 className="text-2xl font-bold">{clients.length}</h3>
            </div>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg mr-4">
              <FaAddressBook size={20} />
            </div>
            <div>
              <p className="text-gray-500">Completed Projects</p>
              <h3 className="text-2xl font-bold">{completedProjects}</h3>
            </div>
          </div>
        </div>

        {/* In‑Progress Tasks */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg mr-4">
              <BiHourglass size={20} />
            </div>
            <div>
              <p className="text-gray-500">In Progress Tasks</p>
              <h3 className="text-2xl font-bold">{inProgressTasks}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Project */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Project
          </h2>
          <button
            className="text-indigo-600 hover:text-indigo-800"
            onClick={() => projects.Id}
          >
            View all
          </button>
        </div>
        {/* …your recent project list/table goes here… */}
      </div>
    </div>
  );
};

export default Dashboard;
