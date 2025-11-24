import React from 'react'
import './Products.css'
import pentastar from '@assets/images/home/Pentastar Head.png'
import t6 from '@assets/images/home/T6 Block.png'
import t4 from '@assets/images/home/T4 Block.png'
import i4 from '@assets/images/home/MPC I4 Block.png'
import maverick from '@assets/images/home/Maverick IEM Head.png'
import nano from '@assets/images/home/Nano Head.png'
import css from '@assets/images/home/CSS675 Block.png'
import sge from '@assets/images/home/GM SGE Head.png'
import product from '@assets/images/home/car_example/penta_car.webp'
import t6_example from '@assets/images/home/car_example/T6 Example.webp'
import challenger from '@assets/images/home/car_example/Challenger.webp'
import ford from '@assets/images/home/car_example/Ford.webp'

const Products = () => {
  return (
    <>
        <div className="card">
            <div className="products-card">
                <div className="client-title">
                    <div className="section-pre-title">
                        ALIADOS EN LA INDUSTRIA
                    </div>
                    <div className="section-title">
                        NUESTROS PRODUCTOS
                    </div>
                </div>
                <div className="products-container">
                    <div className="product-show">
                        <div className="product">
                            <div className="product-title-container">
                                <div className="product-title">
                                    PENTASTAR
                                </div>
                            </div>
                            <img src={pentastar} alt="RAM" className='product-img' />
                            <div className="product-description font-roboto">
                                Cylinder Head 3.6L Classic, 3.6L Upgrade, 3.2L
                            </div>
                        </div>
                        <img src={product} alt="RAM" className='cover-img' />                        
                    </div>
                    <div className="product-show">
                        <div className="product">
                            <div className="product-title-container">
                                <div className="product-title">
                                    T6
                                </div>
                            </div>
                            <img src={t6} alt="RAM" className='product-img' />
                            <div className="product-description font-roboto">
                                Inline 6-Cylinder block
                            </div>
                        </div>
                        <img src={challenger} alt="RAM" className='cover-img' />
                    </div>
                    <div className="product-show">
                        <div className="product">
                            <div className="product-title-container">
                                <div className="product-title">
                                    MPC I4
                                </div>
                            </div>
                            <img src={i4} alt="RAM" className='product-img' />
                            <div className="product-description font-roboto">
                                2.0L / 2.3L Block
                            </div>
                        </div>
                        <img src={ford} alt="RAM" className='cover-img' />
                    </div>
                    <div className="product-show">
                        <div className="product">
                            <div className="product-title-container">
                                <div className="product-title">
                                    T4
                                </div>
                            </div>
                            <img src={t4} alt="RAM" className='product-img' />
                            <div className="product-description font-roboto">
                                Inline 4-Cylinder block
                            </div>
                        </div>
                        <img src={t6_example} alt="RAM" className='cover-img' />
                    </div>
                    {/* 
                    <img src={t4} alt="RAM" className='product-img' />
                    <img src={i4} alt="RAM" className='product-img' />
                    <img src={maverick} alt="RAM" className='product-img' />
                    <img src={nano} alt="RAM" className='product-img' />
                    <img src={css} alt="RAM" className='product-img' />
                    <img src={sge} alt="RAM" className='product-img' /> */}
                    {/* <img src={} alt="RAM" className='clients-logo' />
                    <img src={} alt="RAM" className='' height='90px' width='120px' />
                    <img src={} alt="RAM" className='clients-logo' /> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Products