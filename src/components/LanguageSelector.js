import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const FlagSVG = {
  en: (
    <svg className="w-4 h-4" viewBox="0 0 640 480">
      <g fillRule="evenodd">
        <path fill="#012169" d="M0 0h640v480H0z"/>
        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
        <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
      </g>
    </svg>
  ),
  fr: (
    <svg className="w-4 h-4" viewBox="0 0 640 480">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h640v480H0z"/>
        <path fill="#00267f" d="M0 0h213.3v480H0z"/>
        <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
      </g>
    </svg>
  )
};

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const languages = [
    { 
      code: 'en', 
      name: t('EN'),     
      fullName: t('EN'),
      hint: 'Switch to English' 
    },
    { 
      code: 'fr', 
      name: t('FR'),
      fullName: t('FR'),
      hint: 'Passer en français' 
    }
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium hover:text-gray-600 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          {FlagSVG[i18n.language || 'en']}
        </span>
        <span>
          {languages.find(lang => lang.code === i18n.language)?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="group relative flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                role="menuitem"
              >
                <span className="flex items-center mr-3">
                  {FlagSVG[language.code]}
                </span>
                <span>{language.fullName}</span>
                
                {/* Tooltip */}
                <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  {language.hint}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;