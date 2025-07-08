import React, { useState } from "react";

const Tasks = ({ tasks, projects, addTask, updateTaskStatus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    projectId: "",
    status: "Pending",
    dueDate: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({
      title: "",
      projectId: "",
      status: "Pending",
      dueDate: "",
    });
    setIsModalOpen(false);
  };
  const handleStatusChange = (taskId, status) => {
    updateTaskStatus(taskId, status);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Tasks</h1>
        <button
          className="bg-blue-950  hover: shadow-black text-white px-4 py-2 rounded-lg 
          flex items-center "
          onClick={() => setIsModalOpen(true)}
        >
          + Add Task
        </button>
      </div>
      {/* tasks lists  */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium
   text-gray-500 uppercase tracking-wider"
              >
                Task
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium
   text-gray-500 uppercase tracking-wider"
              >
                Project
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium
   text-gray-500 uppercase tracking-wider"
              >
                Due Date
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium
   text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium
   text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => {
              const project = projects.find((p) => p.id === task.projectId);
              return (
                <tr key={task.id}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {task.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gary-900">
                      {project ? project.name : "no ProjectS"}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                    {task.dueDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={task.status}
                      onChange={(e) =>
                        handleStatusChange(task.id, e.target.value)
                      }
                      className={`px-2 py-1 text-xs rounded-full ${
                        task.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : task.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-gray-800 hover:text-white">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-black">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* adding task Modal  */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-50 flex
         items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-lg w-full max-w-md">
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="projectId"
                >
                  Project
                </label>
                <select
                  id="projectId"
                  name="projectId"
                  value={newTask.projectId}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select a project</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="status"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={newTask.status}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="dueDate"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={newTask.dueDate}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
