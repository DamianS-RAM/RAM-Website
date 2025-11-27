import './Footer.css'
import logo from '@assets/images/logo_ram.webp'
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const { lang } = useParams();

    return (
        <>
            <div className='footer'>
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="RAM logo" />
                    </div>
                    <ul className="footer-list">
                            <li className="footer-item">
                        <Link to={`/${lang}/home`}>
                                {t('nav.home')}
                        </Link>
                            </li>
                            <li className="footer-item">
                        <Link to={`/${lang}/quality`}>
                                {t('nav.quality')}
                        </Link>
                            </li>
                            <li className="footer-item">
                        <Link to={`/${lang}/contact`}>
                                {t('nav.contact')}
                        </Link>
                            </li>
                        {/* <Link to={`/${lang}/home`}>
                            <li className="footer-item">Providers</li>
                        </Link> */}
                    </ul>
                </div>
                <div className="footer-line">
                    2025 © All rights reserved
                </div>
            </div>
        </>
    )
}

export default Footer