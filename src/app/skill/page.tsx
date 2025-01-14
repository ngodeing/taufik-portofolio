import hardSkillWeb from '../data/hardSkillWeb.json';
import hardSkillMobile from '../data/hardSkillMobile.json';
import hardSkillGame from '../data/hardSkillGame.json';
import softSkill from '../data/softSkill.json';

export default function Skills() {
  return (
    <section id="skills" className="py-8 text-gray-300">
      <div className="container mx-auto px-3 lg:px-5">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-start">Web Development</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {hardSkillWeb.map((skill, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 hover:bg-gray-950 transition duration-200"
              >
                <img src={skill.image} alt={skill.title} className="w-16 h-16 md:w-24 md:h-24 mx-auto" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="mt-2 text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-start">Mobile Development</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {hardSkillMobile.map((skill, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 hover:bg-gray-950 transition duration-200"
              >
                <img src={skill.image} alt={skill.title} className="w-16 h-16 md:w-24 md:h-24 mx-auto" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="mt-2 text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-start">Game Development</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {hardSkillGame.map((skill, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 hover:bg-gray-950 transition duration-200"
              >
                <img src={skill.image} alt={skill.title} className="w-16 h-16 md:w-24 md:h-24 mx-auto" />
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {softSkill.map((skill, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 hover:bg-gray-950 transition duration-200"
              >
                <img src={skill.image} alt={skill.title} className="w-16 h-16 md:w-24 md:h-24 mx-auto" />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="mt-2 text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
