import React from 'react'
import './Policy.css'
import quality_1 from '@assets/images/quality/quality_1.webp'
import quality_2 from '@assets/images/quality/quality_2.webp'
import certificate_1 from '@assets/images/quality/Certificado IATF.jpg'
import certificate_2 from '@assets/images/quality/41797.jpg'
import ctpat from '@assets/images/quality/ctpat_logo.webp'
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
                        {t('quality.policy.pretitle')}
                    </div>
                    <div className="section-title">
                        {t('quality.policy.title')}
                    </div>
                    {t('quality.policy.content')}
                </div>
            </div>
        </div>
        <div className="policy-container font-roboto">
            <div className="policy-block">
                <div className="policy-block-txt">
                    <div className="section-pre-title">
                        {t('quality.process.pretitle')}
                    </div>
                    <div className="section-title">
                        {t('quality.process.title')}
                    </div>
                    {t('quality.process.content')}
                    <ul>
                        <li>
                            {t('quality.process.steps.step1')}
                        </li>
                        <li>
                            {t('quality.process.steps.step2')}
                        </li>
                        <li>
                            {t('quality.process.steps.step3')}
                        </li>
                        <li>
                            {t('quality.process.steps.step4')}
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
                        {t('quality.ambiental.pretitle')}
                    </div>
                    <div className="section-title">
                        {t('quality.ambiental.title')}
                    </div>
                        {t('quality.ambiental.content')}
                    <ul>
                        <li>
                            {t('quality.ambiental.steps.step1')}
                        </li>
                        <li>
                            {t('quality.ambiental.steps.step2')}
                        </li>
                        <li>
                            {t('quality.ambiental.steps.step3')}
                        </li>
                    </ul>
                    {t('quality.ambiental.content2')}
                </div>
            </div>
        </div>
        <div className="policy-container font-roboto">
            <div className="certificate-block">
                <div className="section-pre-title">
                    {t('quality.certifications.pretitle')}
                </div>
                <div className="section-title">
                    {t('quality.certifications.title')}
                </div>
                <div className='certificates'>
                    <div className="certificates-container">
                        <div className="certificate-img">
                            <img src={certificate_2} alt="" />
                        </div>
                        <div className="certificate-img">
                            <img src={certificate_1} alt="" />
                        </div>
                    </div>
                    <img src={ctpat} className='ctpat' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Policy