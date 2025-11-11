import React from 'react'
import './Main.css'
import quality_cover from '@assets/images/quality_cover.jpg'

const Main = () => {
  return (
    <>
        <div className="cover-photo">
            <img src={quality_cover} alt="Pieza siendo medida." />
            <div className="cover-info">
                <div className="section-cover-pre-title">
                    NUESTRO COMPROMISO
                </div>
                <div className="section-cover-title">
                    CALIDAD
                </div>
            </div>
        </div>
    </>
  )
}

export default Main