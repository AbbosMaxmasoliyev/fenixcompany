import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/footer6';
import PageTitle from './../Layout/PageTitle';
import SectionCounter from './../Element/SectionCounter';
import FormStyle from './../Element/FormStyle';

//Images
import  bnr1 from './../../images/banner/bnr5.jpg';
import  flutter from './../../images/expertise/flutter.png';
import  react from './../../images/expertise/react.png';
import  after_effect from './../../images/expertise/after_effect.png';
import  laravel from './../../images/expertise/laravel.png';
import  photoshop from './../../images/expertise/photoshop.png';
import  ai from './../../images/expertise/ai.png';
import  corel from './../../images/expertise/corel.png';
import  cinema from './../../images/expertise/cinema.png';


import  python from './../../images/expertise/python-framework.png';
import bg1 from './../../images/background/bg1.jpg';

const imageBlog = [
	{image: python, title: 'Python Framework', info:`Python - ma'lumotlar bilan ishlash bo'yicha mahsuldor dasturlash tili hisoblanadi. Web saytlarda Pythonning frameworki bo'lgan Django ishlatiladi`},
	{image: react, title: 'ReactJS', info:`ReactJS - Web saytlarning foydalanuvchiga ko'rinadigan FrontEnd qismini yaratishda eng mukammal  framework hisoblanadi`},
	{image: laravel, title: 'Laravel', info:`Laravel - saytni to'liq modelda ishlab chiqish uchun yaratilgan PHP dasturlash tilining kutubxonasi hisoblanadi`},
	{image: flutter, title: 'Flutter', info : `Flutter - iOS va Android tizimda ishlaydigan smartfonlar uchun mobil ilovalar uchun asosiy framework hisoblanadi` },
	{image: after_effect, title: 'After Effect', info:`Videolar, video effektlarni bilan ishlovchi montaj dasturi` },
	{image: photoshop, title: 'Adobe Photoshop', info: `Rasmlar, effektlar bilan ishlovchi ommabop kompyuter dasturi` },
	{image: ai, title: 'Adobe Illustrator', info:`Chiziq(vektor)lar bilan ishlovchi, rasmlarning raqamli ko'rinishini ishlab chiquvchi texnologiya` },
	{image: cinema, title: 'Cinema 4D', info:`3D modelling 3D animatsiyalar bilan ishlovchi maxsus samarali texnologiyalardan biri hisoblanadi` },

];

class Expertise extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Mutaxassislik & Texnologiyalar' activeMenu='Mutaxassislik & Texnologiyalar' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-7">
                                        <div className="section-head text-black">
                                            <h4 className="text-gray-dark font-weight-300 m-b10">Texnologiyalar</h4>
                                            <h2 className="box-title m-tb0">Dunyo standartlaridagi bizning texnologiyalar<span className="bg-primary"></span></h2>
                                            <p>Har qanday IT mahsulot yoki xizmatlar bo'lsin ma'lum texnologiyalardan foydalanadi.</p>
                                            <p>Bizning jamoa dunyo standartidagi texnologiyalar va dasturlar asosida o'z IT mahsulot va xizmatlarini sizga taqdim qiladi.</p>
                                        </div>
                                        <div className="row serv">
											{imageBlog.map((data,index)=>(
												<div className="col-lg-6 col-md-12 col-sm-6 m-b30">
													<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
														<div className="icon-lg m-b20"> <Link to={"#"} className="icon-cell"><img src={data.image} alt=""/></Link> </div>
														<div className="icon-content">
															<h5 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title}</Link></h5>
															<p>{data.info}</p>
														</div>
													</div>
												</div>
											))}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 sticky-top">
                                        <form className="inquiry-form inner dzForm" action="script/contact.php">
                                            <div className="dzFormMsg"></div>
                                            <h3 className="box-title m-t0 m-b10">Keling shularni haqiqatga aylantiramiz<span className="bg-primary"></span></h3>
                                            <p>Biz sizga tajribali jamoa yordamida sizning biznesingizni yoki g'oyanggizni virtuallashtiramiz</p>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                            <input name="dzName" type="text" required className="form-control" placeholder="Ism" />
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
                                                            <input name="dzEmail" type="email" className="form-control" required placeholder="Sizning email pochtangiz" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
                                                            <input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Fayl yuklash" />
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
                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <div className='line'></div>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Expertise;