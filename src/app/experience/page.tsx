import experiences from '../data/experiences.json'

export default function Experience() {
    return (
      <section id="experience" className="py-8 text-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 lg:px-5">
          {experiences.map((experience, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 hover:bg-gray-950 lg:hover:scale-105 transition duration-200">
              <img src={experience.image} alt={experience.title} className="w-24 h-24 mx-auto rounded-lg"/>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <p className="mt-2 text-gray-600">{experience.description}</p>
                <p className="mt-2 text-gray-400 text-sm">
                  Start Date: {new Date(experience.startDate).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-400 text-sm">
                  End Date: {new Date(experience.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  };
  