import React from 'react'
import './Main.css'
import RAM_building from '@assets/images/contactos2.jpg'
import { useTranslation } from 'react-i18next'

const Main = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="contact-us">
                <div className="section-pre-title">
                    {t('contact.pretitle')}
                </div>
                <div className="section-title">
                    {t('contact.title')}
                </div>
                <div className="contact-form-container">
                    <div className="find-us-container contact-form-item font-roboto">
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg viewBox="0 -2 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" height="80px" width="80px">
                                    <path d="M5.73268 2.043C6.95002 0.832583 8.95439 1.04804 9.9737 2.40962L11.2347 4.09402C12.0641 5.20191 11.9909 6.75032 11.0064 7.72923L10.7676 7.96665C10.7572 7.99694 10.7319 8.09215 10.76 8.2731C10.8232 8.6806 11.1635 9.545 12.592 10.9654C14.02 12.3853 14.8905 12.7253 15.3038 12.7887C15.4911 12.8174 15.5891 12.7906 15.6194 12.78L16.0274 12.3743C16.9026 11.5041 18.2475 11.3414 19.3311 11.9305L21.2416 12.9691C22.8775 13.8584 23.2909 16.0821 21.9505 17.4148L20.53 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7187 19.6654 8.28659 15.2584C4.14868 11.144 3.35462 7.556 3.25415 5.78817L4.00294 5.74562L3.25415 5.78817C3.20335 4.89426 3.62576 4.13796 4.16308 3.60369L5.73268 2.043ZM8.77291 3.30856C8.26628 2.63182 7.322 2.57801 6.79032 3.10668L5.22072 4.66737C4.8908 4.99542 4.73206 5.35695 4.75173 5.70307C4.83156 7.10766 5.47286 10.3453 9.34423 14.1947C13.4057 18.2331 17.1569 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4724 17.7636L20.8929 16.3511C21.4704 15.777 21.343 14.7315 20.5252 14.2869L18.6147 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6296 13.8909L16.1008 13.359C16.6296 13.8909 16.6289 13.8916 16.6282 13.8923L16.6267 13.8937L16.6236 13.8967L16.6171 13.903L16.6025 13.9166C16.592 13.9262 16.5799 13.9367 16.5664 13.948C16.5392 13.9705 16.5058 13.9959 16.4659 14.0227C16.3858 14.0763 16.2801 14.1347 16.1472 14.1841C15.8764 14.285 15.5192 14.3392 15.0764 14.2713C14.2096 14.1384 13.0614 13.5474 11.5344 12.0291C10.0079 10.5113 9.41194 9.36834 9.2777 8.50306C9.20906 8.06061 9.26381 7.70331 9.36594 7.43225C9.41599 7.29941 9.47497 7.19378 9.5291 7.11389C9.5561 7.07405 9.58179 7.04074 9.60446 7.01368C9.6158 7.00015 9.6264 6.98817 9.63604 6.9777L9.64977 6.96312L9.65606 6.95666L9.65905 6.95363L9.66051 6.95217C9.66122 6.95146 9.66194 6.95075 10.1908 7.48258L9.66194 6.95075L9.94875 6.66556C10.3774 6.23939 10.4374 5.53194 10.0339 4.99297L8.77291 3.30856Z"></path>
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    +52 (844) 134 2950 <br />
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M176.26-187.27q-28.35 0-48.27-19.92-19.91-19.91-19.91-48.27v-449.08q0-28.36 19.91-48.27 19.92-19.92 48.27-19.92h607.48q28.35 0 48.27 19.92 19.91 19.91 19.91 48.27v449.08q0 28.36-19.91 48.27-19.92 19.92-48.27 19.92H176.26ZM480-460.71 164.04-663.12v407.58q0 5.39 3.46 8.85t8.85 3.46h607.3q5.39 0 8.85-3.46t3.46-8.85v-407.58L480-460.71Zm0-58.48 309-197.58H171l309 197.58ZM164.04-663.12v-53.65V-255.54q0 5.39 3.46 8.85t8.85 3.46h-12.31v-419.89Z"/></svg>
                                </div>
                                <div className="contact-info">
                                    contacto@ram-mx.com
                                </div>
                            </div>
                            <div className="contact-method flex-100">
                                <div className="contact-icon">
                                    <svg viewBox="-6 -2 37 37" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location" sketch:type="MSShapeGroup" transform="translate(-104.000000, -411.000000)"> </path>
                                    </svg>
                                </div>
                                <div className="contact-info">
                                    Gorrión Lote 13, Manzana 3, Parque Industrial FINSA, Ramos Arizpe, Coahuila. México
                                </div>
                            </div>
                        </div>
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.6221474371514!2d-100.98128152380318!3d25.517645277506006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868814674fe63677%3A0x849a1be10aaff44f!2sRamos%20Arizpe%20Manufacturing!5e0!3m2!1sen!2smx!4v1761588811891!5m2!1sen!2smx" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <form action="/contact" className="flex-item font-roboto" method='POST'>
                        <div className="contact-form contact-form-item">
                            <div className="contact-form-title">
                                <div className="pre-title">
                                    {t('contact.form.pretitle')}
                                </div>
                                <h3>
                                    {t('contact.form.title')}
                                </h3>
                            </div>
                            <div className="form-element">
                                <div className="label">
                                    {t('contact.form.name')}
                                </div>
                                <input type="text" name="name" id="name" placeholder={t('contact.form.name_input')} autoComplete="off" autoFocus required />
                            </div>
                            <div className="form-element">
                                <div className="label">
                                    {t('contact.form.email')}
                                </div>
                                <input type="email" name="email" placeholder={t('contact.form.email_input')} required />
                            </div>
                            <div className="form-element">
                                <div className="label">
                                    {t('contact.form.phone')}
                                </div>
                                <input type="tel" name="phone" id="phone" placeholder={t('contact.form.phone_input')} />
                            </div>
                            <div className="form-element">
                                <div className="label">
                                    {t('contact.form.company')}
                                </div>
                                <input type="text" name="company" placeholder={t('contact.form.company_input')} />
                            </div>
                            <div className="form-element">
                                <div className="label">
                                    {t('contact.form.message')}
                                </div>
                                <textarea name="message" rows="3" placeholder={t('contact.form.message_input')} required></textarea>
                            </div>
                            <button type="submit" className="submit-button">
                                {t('contact.form.send')}
                                <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Main