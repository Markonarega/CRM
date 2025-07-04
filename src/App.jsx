import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Clients from './components/Clients'
import Projects from './components/Projects'
import Tasks from './components/Tasks'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [clients, setClients] = useState([])
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])

  const addClient = client => {
    setClients([...clients, { ...client, id: Date.now() }])
  }
  const addProject = project => {
    setProjects([...projects, { ...project, id: Date.now() }])
  }
  const addTask = task => {
    setTasks([...tasks, { ...task, id: Date.now() }])
  }

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t))
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'clients':
        return <Clients clients={clients} addClient={addClient} />
      case 'projects':
        return <Projects projects={projects} clients={clients} addProject={addProject} />
      case 'tasks':
        return <Tasks
          tasks={tasks}
          addTask={addTask}
          projects={projects}
          updateTaskStatus={updateTaskStatus}
        />
      default:
        return <Dashboard clients={clients} projects={projects} tasks={tasks} />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* pass the prop name your Sidebar expects */}
      <Sidebar activeTap={activeTab} setActiveTap={setActiveTab} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App
