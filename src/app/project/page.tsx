import projects from '../data/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="py-8 text-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 lg:px-5">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="border border-gray-700 hover:bg-gray-950 lg:hover:scale-105 transition duration-200 rounded-lg overflow-hidden shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className='flex flex-row'>
                  <p className="mt-2 mr-3 text-gray-400 text-sm">Start: {new Date(project.startDate).toLocaleDateString()}</p>
                  <p className="mt-2 text-gray-400 text-sm">Until: {new Date(project.endDate).toLocaleDateString()}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};