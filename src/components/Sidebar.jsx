const Sidebar = ({ activeTap, setActiveTap }) => {
  const menuItem = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'clients', label: 'Clients', icon: '👥' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'tasks', label: 'Tasks', icon: '🧾' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 text-xl font-bold text-black">
        Markon Crm
      </div>
      <nav className="flex-1 px-3 py-4">
        <ul>
          {menuItem.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTap(item.id)}
                className={`w-full flex items-center px-4 py-2 rounded-lg ${
                  activeTap === item.id
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="font-medium text-indigo-800">Markon Freelancer</p>
            <p className="text-sm text-gray-500">markonarega18@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
