import React, { useState, useEffect } from 'react';
import './hero.css'
import building from '@assets/images/hero_cover.jpg'
import services from '@assets/images/services.jpg'
import manufacture from '@assets/images/manuf.jpg'
import analisys from '@assets/images/analisys.jpg'
import ford_logo from '@assets/images/clients/ford_logo.webp'
import brp_logo from '@assets/images/clients/brp_logo.svg'
import nemak_logo from '@assets/images/clients/nemak_logo.webp'
import stellantis_logo from '@assets/images/clients/stellantis_logo.webp'
import gm_logo from '@assets/images/clients/gm_logo.svg'
import Products from '@components/home/products/Products'

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
                    <div className="card odd-card">
                        <div className="hero-card">
                            <img src={services} alt="RAM" className='hero-card-img'/>
                            <div className="hero-card-content">
                                <div className="section-pre-title">
                                    RAMOS ARIZPE MANUFACTURING
                                </div>
                                <div className="section-title">
                                    NUESTRA HISTORIA
                                </div>
                                <div className='hero-card-text font-roboto'>
                                    La empresa “RAM” es instituida legalmente a finales del segundo cuarto del 2009 como Powertrain Production Systems (“PPS”) a Royal Oak Industries. “PPS” ahora “RAM” fue establecida en el año 2005 quien abre operaciones con una Planta de 6700 metros cuadrados ubicada en Gorrión Lote 13 Manzana 3 Parque Industrial FINSA Ramos Arizpe, Coahuila C.P. 25904 México. <br /><br />
                                    Ramos Arizpe Manufacturing es una de las plantas más grandes y con más experiencia de pre-maquinado y acabados de piezas para motores. 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="hero-card">
                            <div className="hero-card-content">
                                <h2>Proceso de Producción</h2>
                                <div className='hero-card-text'>
                                    <ul>
                                        <li>Estamos a la vanguardia en maquinado CNC</li>
                                        <li>Verificación de fugas y sellado</li>
                                        <li>Sistemas óptimos de producción</li>
                                        <li>Certificación ISO 14001</li>
                                        <li>Manufactura por lotes de alto y mediano volumen</li>
                                    </ul>
                                </div>
                            </div>
                            <img src={analisys} alt="RAM" className='hero-card-img'/>
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