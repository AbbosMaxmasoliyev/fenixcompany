import React, { Component } from 'react';
import Header from './../Layout/Header1';
import Footer from './../Layout/footer6';

import bgimg from './../../images/background/contact.jpg';

class Contact extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row text-white">
                                        <div className="col-lg-12 col-md-6 m-b30" >
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                        Kompaniya manzili
													</h5>
                                                    <p>15 Bulvar, Samarqand, Uzbekistan </p>
                                                    <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> Ish vaqti</h6>
                                                    <p className="m-b0">Dushanba-Shanba - 09.00-18.00</p>
                                                    <p>Yakshanba - Dam olish kuni</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                        Ijtimoiy tarmoqlar
													</h5>
                                                    <a href='https://fenixcompanyuz@gmail.com' className="m-b0">fenixcompanyuz@gmail.com</a>
                                                    <a href='https://t.me/fenixcompany_uz' className="m-b0">t.me/fenixcompany_uz</a>
                                                    <a href='https://instagram.com/fenixsoft.uz/' className="m-b0">instagram.com/fenixsoft.uz</a>
                                                    <a href='https://facebook.com/Fenix-Soft-102993012405991'>facebook.com/Fenix-Soft-102993012405991</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-mobile"></i></span>
                                                        Telefon raqam
														</h5>
                                                    <p>+998 (95) 778 88 68</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xs-8">
                                    <form className="inquiry-form dzForm"  action="script/contact.php">
                                        <div className="dzFormMsg"></div>
                                        <h3 className="box-title m-t0 m-b10">Keling fikrlarni realikka aylantiramiz<span className="bg-primary"></span></h3>
                                        <p>Biz sizga tajribali jamoa yordamida sizning biznesingizni yoki g'oyanggizni virtuallashtiramiz</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                        <input name="dzName" type="text" required className="form-control" placeholder="Ismingiz" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Telefon raqam" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="Elektron pochta manzilingiz" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                        <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="fayl yuklash" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-file text-primary"></i></span>
                                                        <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Fayl yuklash" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Bizga biznesingiz va g'oyangiz haqida gapirib bering"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" value="Submit" className="site-button button-lg"> <span>Jo'natish</span> </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Contact;