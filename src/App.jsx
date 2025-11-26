import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Quality from '@pages/Quality'


function LanguageWrapper({ children }) {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Idiomas soportados
    const supportedLanguages = ['en', 'es'];
    
    if (lang && supportedLanguages.includes(lang)) {
      // Cambia el idioma si es diferente
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    } else {
      // Redirige a un idioma válido
      const defaultLang = i18n.language.split('-')[0] || 'en';
      const redirectLang = supportedLanguages.includes(defaultLang) ? defaultLang : 'en';
      navigate(`/${redirectLang}`, { replace: true });
    }
  }, [lang, i18n, navigate]);

  return children;
}


function App() {
    const { i18n } = useTranslation();

    return (
        <Routes>
            {/* Redirige la raíz al idioma detectado */}
            <Route 
                path="/" 
                element={<Navigate to={`/${i18n.language.split('-')[0] || 'en'}/home`} replace />} 
            />

            {/* Rutas con prefijo de idioma */}
            <Route path="/:lang/*" >
                <Route index path="home" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="quality" element={<Quality />} />
                <Route path="*" element={<LanguageWrapper><Navigate to={`/${i18n.language.split('-')[0] || 'en'}/home`} replace /></LanguageWrapper>} />
            </Route>

            {/* Ruta 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}




export default App
