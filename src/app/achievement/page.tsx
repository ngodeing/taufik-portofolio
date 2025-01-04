import achievements from '../data/achievements.json';

export default function Achievements() {
  return (
    <section id="achievements" className="py-8 text-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 lg:px-5">
          {achievements.map((achievement, index) => (
            <a key={index} href={achievement.link} target="_blank" rel="noopener noreferrer" className="border border-gray-700 hover:bg-gray-950 lg:hover:scale-105 transition duration-200 rounded-lg overflow-hidden shadow-lg">
              <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="mt-2 text-gray-600">{achievement.description}</p>
                <div className='flex flex-row'>
                  <p className="mt-2 mr-3 text-gray-400 text-sm">Start: {new Date(achievement.startDate).toLocaleDateString()}</p>
                  <p className="mt-2 text-gray-400 text-sm">Until: {new Date(achievement.endDate).toLocaleDateString()}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
