import React from 'react'
import './Main.css'
import quality_cover from '@assets/images/quality_cover.jpg'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="cover-photo">
                <img src={quality_cover} alt="Pieza siendo medida." />
                <div className="cover-info">
                    <div className="section-cover-pre-title">
                        {t('quality.description')}
                    </div>
                    <div className="section-cover-title">
                        {t('quality.title')}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main