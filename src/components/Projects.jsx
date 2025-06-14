import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import projectsData from "../dataJSON/projectsData.json";
// Yeni oluşturduğumuz projectImages dosyasını import ediyoruz
import projectImages from "../data/projectImages.js"; // Yolunuzu kontrol edin!

function Projects() {
  const [projects, setProjects] = useState([]);
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const ProjectCard = ({ project }) => {
    // Resim yolunu artık import ettiğimiz projectImages objesinden alıyoruz
    const imageSrc = projectImages[project.id];

    return (
      <div
        className={` from-blue-100 to-blue-300 shadow-lg rounded-lg w-[350px] overflow-hidden transform transition-all duration-300 hover:scale-105 ${
          darkMode ? "bg-gray-800" : ""
        }`}
      >
        <div className="relative h-64">
          {imageSrc ? (
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={imageSrc}
              alt={project.title}
            />
          ) : (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
              Resim bulunamadı
            </div>
          )}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div
          className={`p-6 ${
            darkMode ? "bg-gray-700" : "bg-white"
          } rounded-b-lg`}
        >
          <h5
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-blue-800"
            }`}
          >
            {language === "en" ? project["title-en"] : project["title-tr"]}
          </h5>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } mt-2`}
          >
            {language === "en"
              ? project["description-en"]
              : project["description-tr"]}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs hover:bg-blue-700 hover:cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <a
              className={`text-blue-700 font-semibold hover:underline ${
                darkMode ? "text-white" : ""
              }`}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub &rarr;
            </a>
            <a
              className={`text-blue-700 font-semibold hover:underline ${
                darkMode ? "text-white" : ""
              }`}
              href={project.appLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === "en" ? "App" : "Uygulama"} &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={`py-16 ${darkMode ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      <h4
        className={`text-4xl font-semibold text-center ${
          darkMode ? "text-blue-300" : "text-blue-700"
        } mb-10`}
      >
        {language === "en" ? "Projects" : "Projeler"}
      </h4>
      <div className="flex flex-wrap justify-center gap-10">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>
            {language === "en" ? "No projects available." : "Proje bulunamadı."}
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
