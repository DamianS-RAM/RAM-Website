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

const Hero = () => {

    return (
        <>
            <div className="hero">
                <div className='hero-carousel'>
                    <img src={building} alt="RAM building"/>
                    <div className="hero-banner">
                        <div className="hero-banner-content">
                            <span>20 años de experiencia en maquinado CNC para empresas.</span>
                        </div>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="card">
                        <div className="hero-card">
                            <div className="hero-card-title">
                                <div className="section-pre-title">
                                    RAMOS ARIZPE MANUFACTURING
                                </div>
                                <div className="section-title">
                                    NUESTRA HISTORIA
                                </div>
                            </div>
                            <div className="hero-card-content">
                                <img src={about_us} alt="RAM" className='hero-card-img'/>
                                <div className='hero-card-text font-roboto'>
                                    La empresa “RAM” es instituida legalmente a finales del segundo cuarto del 2009 como Powertrain Production Systems (“PPS”) a Royal Oak Industries. “PPS” ahora “RAM” fue establecida en el año 2005 quien abre operaciones con una Planta de 6700 metros cuadrados ubicada en Gorrión Lote 13 Manzana 3 Parque Industrial FINSA Ramos Arizpe, Coahuila C.P. 25904 México. <br /><br />
                                    Ramos Arizpe Manufacturing es una de las plantas más grandes y con más experiencia de pre-maquinado y acabados de piezas para motores.Nosotros estamos dedicados al maquinado de precisión de piezas de fundición con aleaciones de aluminio y hierro. Nuestra operación de clase mundial trabaja para múltiples OEM en América del Norte y del Sur, así como en Asia y Europa. 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card odd-card">
                        <div className="clients-card">
                            <div className="client-title">
                                <div className="section-pre-title">
                                    ALIADOS EN LA INDUSTRIA
                                </div>
                                <div className="section-title">
                                    NUESTROS CLIENTES
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