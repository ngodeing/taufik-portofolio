import hardSkill from '../data/hardSkill.json';
import softSkill from '../data/softSkill.json';
export default function Skills() {
  return (
    <section id="skills" className="py-8 text-gray-300">
      <div className="container mx-auto px-3 lg:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-start">Hard Skills</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {hardSkill.map((skill, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 hover:bg-gray-950 lg:hover:scale-105 transition duration-200">
                  <img src={skill.image} alt={skill.title} className="w-24 h-24 mx-auto"/>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="mt-2 text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-start">Soft Skills</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {softSkill.map((skill, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 hover:bg-gray-950 lg:hover:scale-105 transition duration-200">
                  <img src={skill.image} alt={skill.title} className="w-24 h-24 mx-auto"/>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="mt-2 text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
