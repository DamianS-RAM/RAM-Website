import React from 'react'
import './Policy.css'
import quality_1 from '@assets/images/quality/quality_1.webp'
import quality_2 from '@assets/images/quality/quality_2.webp'
import certificate_1 from '@assets/images/quality/Certificado IATF.jpg'
import certificate_2 from '@assets/images/quality/41797.jpg'
import { useTranslation } from 'react-i18next'

const Policy = () => {
    const { t } = useTranslation()
    return (
    <>
        <div className="policy-container odd-policy-container font-roboto">
            <div className="policy-block">
                <img src={quality_1} alt="" className='policy-block-img' />
                <div className="policy-block-txt">
                    <div className="section-pre-title">
                        CALIDAD EN CADA RESULTADO
                    </div>
                    <div className="section-title">
                        POLITICA DE CALIDAD
                    </div>
                    En Ramos Arizpe Manufacturing estamos comprometidos en cumplir y exceder las expectativas y satisfacción de nuestros clientes, enfocados en el cumplimiento de nuestros objetivos y requerimientos aplicables dirigido a la mejora continua de nuestro proceso de manufactura.
                </div>
            </div>
        </div>
        <div className="policy-container font-roboto">
            <div className="policy-block">
                <div className="policy-block-txt">
                    <div className="section-pre-title">
                        LA CALIDAD SE PRODUCE PASO A PASO
                    </div>
                    <div className="section-title">
                        CONTROL DE PROCESO
                    </div>
                    Nuestro proceso de calidad:
                    <ul>
                        <li>
                            Checklist de operaciones.
                        </li>
                        <li>
                            Control de cambio de herramienta.
                        </li>
                        <li>
                            Inspección de piezas de Gages.
                        </li>
                        <li>
                            Procedimiento de entrega de máquinas.
                        </li>
                    </ul>
                </div>
                <img src={quality_2} alt="" className='policy-block-img' />
            </div>
        </div>
        <div className="policy-container odd-policy-container font-roboto">
            <div className="policy-block">
                <div className="policy-block-txt">
                    <div className="section-pre-title">
                        POR UN FUTURO SOSTENIBLE
                    </div>
                    <div className="section-title">
                        POLITICA AMBIENTAL
                    </div>
                    En RAM estamos comprometidos en proteger al medio ambiente a través de:
                    <ul>
                        <li>
                            La prevención de la contaminación de nuestros procesos de manufactura;
                        </li>
                        <li>
                            El cumplimiento de los requisitos legales y otros requisitos que nos suscribamos;
                        </li>
                        <li>
                            El cumplimiento de nuestros objetivos e indicadores ambientales
                        </li>
                    </ul>
                    Todo ello enfocado siempre a la mejora continua de nuestro sistema de gestión ambiental.
                </div>
            </div>
        </div>
        <div className="policy-container font-roboto">
            <div className="certificate-block">
                <div className="section-pre-title">
                    NUESTRO COMPROMISO
                </div>
                <div className="section-title">
                    CERTIFICACIONES
                </div>
                <div className="certificates-container">
                    <div className="certificate-img">
                        <img src={certificate_2} alt="" />
                    </div>
                    <div className="certificate-img">
                        <img src={certificate_1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Policy