import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '@assets/images/logo_ram.webp'
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ scroll_behaviour = 0 }) => {
    const { t } = useTranslation();
    const { lang } = useParams();

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

    return (
        <>
            <nav className={`navbar ${ scrolled ? "bg-color" : "bg-transparent"}`}>
                <div className="logo-container">
                    <img src={logo} alt="RAM logo" />
                </div>
                <ul className="nav-links">
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