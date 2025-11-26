import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Quality from '@pages/Quality'

function App() {

    /* const [currentTime, setCurrentTime] = useState(0);
  
    useEffect(() => {
        const fetchData = async () => {
            fetch("http://localhost:5000/api/time")
            .then(res => res.json())
            .then(data => console.log(data.message));
      };

      fetchData();
    }, []); */

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quality" element={<Quality />} />
        </Routes>
    )
}


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


export default App
