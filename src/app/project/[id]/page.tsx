"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import data from "../../data/projects.json";
import NextButton from "../../components/NextButton";

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = id as string;

  const project = data.find((item) => item.id === parseInt(projectId));

  if (!project) {
    return <h1 className="text-center text-2xl font-bold">Project Not Found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-center">{project.title}</h1>

      <div className="flex justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          className="rounded shadow-md"
        />
      </div>

      <p className="text-lg text-gray-500 rounded">{project.description}</p>

      <div>
        <h2 className="text-2xl font-semibold">Technologies Used:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {project.techstack?.map((tech, index) => (
            <li key={index} className="text-gray-500 p-2 rounded">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Media Gallery:</h2>
        {project.media?.map((media, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row mb-12 ${
              index % 2 !== 0 && "md:flex-row-reverse"
            }`}
          >
            <Image
              src={media}
              alt={project.media_title[index]}
              width={400}
              height={400}
              className="rounded shadow-md"
            />
            <div
              className={`mt-4 md:mt-0 md:ml-4 ${
                index % 2 !== 0 ? "md:text-right md:mr-4" : "md:text-left"
              }`}
            >
              <h3 className="text-xl font-semibold">{project.media_title[index]}</h3>
              <p className="text-gray-500 py-2 rounded">
                {project.media_desc[index]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-10">
        <NextButton href={project.link}>Visit the Project</NextButton>
      </div>
    </div>
  );
};

export default ProjectDetail;
