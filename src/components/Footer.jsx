import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <footer
      className={`p-10 text-center flex flex-col md:flex-row items-center justify-center gap-10 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Slogan*/}
      <p
        className={`text-5xl mb-4 p-10 font-semibold leading-normal ${
          // lineHeight için Tailwind class'ı
          darkMode ? "text-white" : "text-black"
        } mb-3`}
      >
        {language === "tr" ? (
          <>
            Gelin, bir sonraki <br /> projeniz üzerinde birlikte çalışalım.
          </>
        ) : (
          <>
            Let’s work together on <br /> your next project.
          </>
        )}
        <div
          className={`w-[18rem] h-4 opacity-65 ${
            darkMode ? "bg-blue-400" : "bg-blue-600"
          } rounded-full mx-auto 
            mt-[-1%] translate-x-[15%] -translate-y-[700%]
            `} // Inline stiller Tailwind class'larına dönüştürüldü
        />
      </p>

      {/* Linkler */}
      <div className="flex flex-col space-y-4 md:space-y-2 text-lg font-bold">
        <a
          href="https://github.com/elfctn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={`text-black hover:underline ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {language === "tr" ? "Kişisel Blog" : "Personal Blog"}
        </a>

        <a
          href="https://linkedin.com/in/elifcetin-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:elifcetin.dev@gmail.com"
          className="text-red-500 hover:underline"
        >
          {language === "tr" ? "E-posta" : "Email"}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
