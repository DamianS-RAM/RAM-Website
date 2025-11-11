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
                                <h2>Ramos Arizpe Manufacturing</h2>
                                <div className='hero-card-text'>
                                    Ramos Arizpe Manufacturing (RAM) es una de las plantas más grandes y con más experiencia de pre-maquinado y acabados de componentes para motores de combustión interna. Nosotros estamos dedicados al maquinado de precisión de piezas de fundición con aleaciones de aluminio y hierro fundido. Nuestra operación de clase mundial localizada en Saltillo, Coahuila México, trabaja para la industria terminal en América del Norte y del Sur, así como en Asia y Europa.
                                </div>
                                <button type="button" className='hero-card-button'>Contáctanos</button>
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
                        <div className="hero-card">
                            <img src={manufacture} alt="RAM" className='hero-card-img'/>
                            <div className="hero-card-content">
                                <h2>Calidad</h2>
                                <div className='hero-card-text'>
                                    <ul>
                                        	<li>Laboratorio de medición CMM</li>
                                            <li>Laboratorio interno de análisis para sistemas de refrigerante</li>
                                            <li>Experiencia en sistemas de calidad GM, Chrysler y Ford</li>
                                            <li>Certificación ISO/TS  16949</li>
                                    </ul>
                                </div>
                                <button type="button" className='hero-card-button'>Nuestro Compromiso</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
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