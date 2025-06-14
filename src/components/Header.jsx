// styled import'u şimdilik duruyor, diğer styled components kullanıldığı için
import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import profilePic from "../assets/elf-linkedn.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import cvLogo from "../assets/cv-logo.png";
import CustomSwitch from "./CustomSwitch";
import mailLogo from "../assets/mail.png";

// HeaderContainer Styled Component'ı kaldırıldı
// const HeaderContainer = styled.div` ... `

// HeaderContent Styled Component'ı kaldırıldı
// const HeaderContent = styled.header` ... `

const ProfilePicture = styled.div`
  background-color: #ec4899;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  overflow: hidden;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 4rem;
  right: 1rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    position: relative;
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
  }
`;

// Title Styled Component'ı kaldırıldı
// const Title = styled.h1` ... `

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1rem;
  margin-left: 1.75rem;

  img {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 0.5rem;
    filter: ${({ darkMode }) =>
      darkMode ? "brightness(0) invert(1)" : "none"};
    transition: opacity 0.3s ease;
  }

  img:hover {
    opacity: 0.7; /* Hover durumunda opaklık azalır */
    transform: scale(1.1); /* Hover durumunda logo biraz büyür */
  }
`;

const SwitchText = styled.span`
  font-size: 0.875rem;
  cursor: pointer;
  color: ${({ darkMode }) => (darkMode ? "white" : "black")};
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isChecked, setIsChecked] = useState(darkMode);

  const handleSwitchChange = () => {
    toggleDarkMode();
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`h-auto flex justify-center items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <header className="w-full p-4 md:p-10">
        <div className="flex justify-end items-center mb-4 space-x-4 mr-20">
          <div className="flex items-center space-x-2">
            <CustomSwitch
              isChecked={isChecked}
              handleSwitchChange={handleSwitchChange}
            />
            <SwitchText darkMode={darkMode}>
              {darkMode
                ? language === "tr"
                  ? "Aydınlık Mod"
                  : "Light Mode"
                : language === "tr"
                ? "Karanlık Mod"
                : "Dark Mode"}
            </SwitchText>
          </div>

          <SwitchText darkMode={darkMode} onClick={toggleLanguage}>
            {language === "en" ? (
              <>
                <span>Switch to </span>
                <span className="text-pink-500">Turkish</span>
              </>
            ) : (
              <>
                <span className="text-pink-500">İngilizce</span>
                <span>'ye geç </span>
              </>
            )}
          </SwitchText>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-4 md:w-1/2">
            {/* Title yerine h1 kullanıldı ve stilleri Tailwind class'larına dönüştürüldü */}
            <h1 className="text-3xl font-normal ml-10 mb-4 md:text-6xl">
              {language === "tr" ? "Merhaba! 👋" : "Hi! 👋"}
            </h1>
            <Subtitle>
              {language === "tr"
                ? "Ben yazılım geliştiriciyim. Sağlam ve ölçeklenebilir ürünler geliştirebilirim."
                : "I'm a Software Developer. I can craft solid and scalable products. "}
            </Subtitle>
          </div>

          <ProfilePicture>
            <img
              src={profilePic}
              alt={language === "tr" ? "Profil Fotoğrafı" : "Profile Picture"}
            />
          </ProfilePicture>
        </div>

        <SocialIcons darkMode={darkMode}>
          <a
            href="https://linkedin.com/in/elifcetin-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/elfctn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" />
          </a>

          <a
            href="https://drive.google.com/file/d/15wCfG8BMfGDNdY3GEL5Eyxs63BNI-CZM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cvLogo}
              alt="cv"
              style={{ width: "3rem", height: "3rem", marginTop: "-0.35rem" }}
            />
          </a>

          <a
            href="mailto:elifcetin.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mailLogo}
              alt="cv"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginTop: "-0.1rem",
                filter:
                  "drop-shadow(0 0 0 white) invert(100%) hue-rotate(180deg) saturate(0%) brightness(100%),borderRadius:100% ",
              }}
            />
          </a>
        </SocialIcons>
      </header>{" "}
    </div>
  );
};

export default Header;
