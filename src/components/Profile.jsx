import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Profile = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      className={`flex justify-center items-center my-8 p-8 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div
        className={`flex flex-col justify-center md:flex-row w-full md:w-2/3 gap-24`}
      >
        {/* Profil Bilgileri */}
        <div
          className={`flex flex-col w-full md:w-1/2 p-6 md:ml-24 rounded-lg border-2 hover:scale-105 ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          } shadow-lg shadow-[15px_15px_20px_rgba(0,0,0,95)]`}
        >
          <h2 className="text-2xl font-bold mb-2">
            {language === "tr" ? "Profil" : "Profile"}
          </h2>
          <h3 className="text-red-500 font-bold mb-4">
            {language === "tr" ? "Temel Bilgiler" : "Basic Information"}
          </h3>

          {/* Bilgi Listesi */}
          <div className="space-y-4">
            {/* İsim Soyisim */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">
                {language === "tr" ? "İsim-Soyisim " : "Full Name"}
              </p>
              <p className="font-normal sm:w-1/2">
                {language === "tr" ? " ELİF ÇETİN" : "ELIF CETIN "}
              </p>
            </div>

            {/* Doğum Tarihi */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">
                {language === "tr" ? "Doğum Tarihi" : "Birth Date"}
              </p>
              <p className="font-normal sm:w-1/2">
                {language === "tr" ? "07.01.1998" : "07.01.1998"}
              </p>
            </div>

            {/* İkamet Şehri */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">
                {language === "tr" ? "İkamet Şehri" : "Residence City"}
              </p>
              <p className="font-normal sm:w-1/2">
                {language === "tr" ? "Sakarya" : "Sakarya"}
              </p>
            </div>

            {/* Eğitim Durumu */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">
                {language === "tr" ? "Eğitim Durumu" : "Education"}
              </p>
              <p className="font-normal sm:w-1/2">
                {language === "tr"
                  ? "Sakarya Unv-Çevre Mühendisliği, 2021"
                  : "Sakarya Unv-Environmental Engineering, 2021"}
              </p>
            </div>

            {/* Tercih Ettiği Rol */}
            <div className="flex flex-col sm:flex-row">
              <p className="font-bold sm:w-1/2">
                {language === "tr" ? "Tercih Ettiği Rol" : "Preferred Role"}
              </p>
              <p className="font-normal sm:w-1/2">
                {language === "tr"
                  ? "Full-Stack Yazılım geliştirici"
                  : "Full-Stack Software Developer"}
              </p>
            </div>
          </div>
        </div>

        {/* About Me Bölümü */}
        <div
          className={`flex flex-col w-full md:w-1/3 p-6 rounded-lg ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <h3
            className={`text-2xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            } 
    mb-3`}
          >
            {language === "tr" ? "Hakkımda" : "About Me"}
            <div
              className={`w-[5rem] h-4 opacity-65 ${
                darkMode ? "bg-blue-400" : "bg-blue-600"
              } rounded-full mx-auto ml-[-1%] mt-[-3%]`}
            />
          </h3>

          {/* Hakkımda metnini sınırlamak ve taşmaması için */}
          <p className="max-w-sm mt-3 overflow-hidden text-ellipsis">
            {language === "tr"
              ? "Mühendislik alanındaki teknik ve ticari deneyimlerimin ardından, teknoloji tutkumu bir kariyere dönüştürmeye karar verdim. Şimdi, sürekli gelişime açık, yeni beceriler edinmeye ve zorlukların üstesinden gelmeye hevesli, motivasyonu yüksek bir full-stack yazılım geliştiriciyim. Güçlü analitik ve problem çözme becerilerimi; iş birlikçi bir ruh, etkili iletişim ve uyum sağlama yeteneğiyle birleştiriyorum. Takım çalışmasına yatkınım, sorumluluk almaktan keyif alırım ve tüm bu niteliklerin yüksek kaliteli yazılımlar oluşturmak için kritik olduğuna inanıyorum."
              : "After gaining technical and commercial experience in engineering, I decided to turn my passion for technology into a career. I am now a highly motivated full-stack software developer, eager for continuous improvement, acquiring new skills, and overcoming challenges. I combine my strong analytical and problem-solving skills with a collaborative spirit, effective communication, and adaptability. I am a team player, enjoy taking responsibility, and believe all qualities are crucial for creating high-quality software."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
