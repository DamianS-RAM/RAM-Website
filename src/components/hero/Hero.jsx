import React, { useState, useEffect } from 'react';
import './Hero.css'
import building from '@assets/images/hero_cover.JPG'
import ford_logo from '@assets/images/clients/ford_logo.webp'
import brp_logo from '@assets/images/clients/brp_logo.svg'
import nemak_logo from '@assets/images/clients/nemak_logo.webp'
import stellantis_logo from '@assets/images/clients/stellantis_logo.webp'
import gm_logo from '@assets/images/clients/gm_logo.svg'
import Products from '@components/home/products/Products'
import about_us from '@assets/images//home/about_us.webp'
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="hero">
                <div className='hero-carousel'>
                    <img src={building} alt="RAM building"/>
                    <div className="hero-banner">
                        <div className="hero-banner-content">
                            <span>{t('home.banner')}</span>
                        </div>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="card">
                        <div className="hero-card">
                            <div className="hero-card-title">
                                <div className="section-pre-title">
                                    {t('home.history.pretitle')}
                                </div>
                                <div className="section-title">
                                    {t('home.history.title')}
                                </div>
                            </div>
                            <div className="hero-card-content">
                                <img src={about_us} alt="RAM" className='hero-card-img'/>
                                <div className='hero-card-text font-roboto'>
                                    {t('home.history.content1')}
                                    <br /><br />
                                    {t('home.history.content2')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card odd-card">
                        <div className="clients-card">
                            <div className="client-title">
                                <div className="section-pre-title">
                                    {t('home.clients.pretitle')}
                                </div>
                                <div className="section-title">
                                    {t('home.clients.title')}
                                </div>
                            </div>
                            <div className="client-logos">
                                <img src={nemak_logo} alt="RAM" className='clients-logo' />
                                <img src={brp_logo} alt="RAM" className='' height='90px' width='120px' />
                                <img src={stellantis_logo} alt="RAM" className='clients-logo' />
                                <img src={gm_logo} alt="RAM" className='' height='90px' width='120px' />
                                <img src={ford_logo} alt="RAM" className='clients-logo' />
                            </div>
                        </div>
                    </div>
                    <Products></Products>
                </div>
            </div>
        </>
    )
}

export default Hero