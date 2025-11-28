import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '@assets/images/logo_ram.webp'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ scroll_behaviour = 0 }) => {
    const { t } = useTranslation();
    
    const [scrolled, setScrolled] = useState(false);
    if (scroll_behaviour) {
        useEffect(() => {
            const handleScroll = () => {
                // Check if the page has been scrolled more than 0 pixels
                if (window.scrollY > 100) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            };
            
            // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        
        // Run once on mount to set initial state
        handleScroll();
        
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        }, []);
    } else {
        useEffect(() => {
            setScrolled(true);
        }, []);
    }

    const { lang } = useParams();
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = (newLang) => {
        // Obtiene la ruta actual sin el idioma
        const pathParts = location.pathname.split('/').filter(Boolean);
        const currentLang = pathParts[0];
        
        // Si el primer segmento es un idioma, lo reemplaza
        if (['en', 'es'].includes(currentLang)) {
        pathParts[0] = newLang;
        } else {
        // Si no hay idioma en la URL, lo agrega
        pathParts.unshift(newLang);
        }
        
        const newPath = '/' + pathParts.join('/');
        
        // Cambia el idioma
        i18n.changeLanguage(newLang);
        
        // Navega a la nueva ruta
        navigate(newPath);
    };

    return (
        <>
            <nav className={`navbar ${ scrolled ? "bg-color" : "bg-transparent"}`}>
                <div className="logo-container">
                    <img src={logo} alt="RAM logo" />
                </div>
                <ul className="nav-links">
                    <li className="dropdown-nav nav-item">
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px"><path d="M480-360 280-560h400L480-360Z"/></svg>
                        <div className="dropdown-container">
                            <div className="dropdown">
                                <a href="javascript:void(0)" onClick={() => changeLanguage('en')}>
                                    <div className="dropdown-item">
                                        English
                                    </div>
                                </a>
                                <a href="javascript:void(0)" onClick={() => changeLanguage('es')}>
                                    <div className="dropdown-item">
                                        Español
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <Link to={`/${lang}/home`}>
                        <li className='nav-item'>{t('nav.home')}</li>
                    </Link>
                    <Link to={`/${lang}/quality`}>
                        <li className='nav-item'>{t('nav.quality')}</li>
                    </Link>
                    <Link to={`/${lang}/contact`}>
                        <li className='nav-item'>{t('nav.contact')}</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar