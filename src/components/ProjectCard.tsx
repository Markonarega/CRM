
function ProjectCard({project, clients}) {
    const client = clients.find((c) => c.id === project.clientId);
    return (
        <div
            key={project.id}
            className="bg-white rounded-xl shadow overflow-hidden"
        >
            <div className="p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 ">
                            {project.name}
                        </h3>
                        <p>{client ? client.name : "Unknown name"}</p>
                    </div>
                    <span
                        className={`px-2 py-1 text-xs rounded-full ${project.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : project.status === "In Progress"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                    >
                        {project.status}
                    </span>
                </div>

                <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                        <span className="text-gray-500"> Deadline</span>
                        <span className="font-medium ">{project.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500"> Budget</span>
                        <span className="font-medium ">${project.budget}</span>
                    </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between">
                    <button className="text-gray-900 hover:text-black">
                        View Detail
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard