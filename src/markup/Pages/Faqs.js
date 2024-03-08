import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/footer6';
import PageTitle from './../Layout/PageTitle';
import AccordionBlog from './../Element/AccordionBlog';
import VideoPopup from './../Element/VideoPopup';

import bnr1 from './../../images/background/faq.jpg';
import pattern from './../../images/pattern/pic1.jpg';
import about from './../../images/pattern/question.jpg';

const iconBlog = [
	{icon: <i className="flaticon-bar-chart" />, title:'Buni oson bajaring', info: `Biznes olamida o'z biznesingizni rivojlantirmoqchimisiz? Unda buni juda sodda va oddiy yo'l bilan amalga oshiring`},
	{icon: <i className="flaticon-trophy" />, title:'Chiroyli dizayn', info:`Insonning chiroyi hammaning diqqatini tortgani kabi  creativ, chiroyli va foydalanish uchun qulay dizayn hammani o'ziga tortadi` },
	{icon: <i className="flaticon-devices" />, title:`To'g'ri va chiroyli sayt`, info:`Ushbu xususiyatlarga ega saytga tashrif buyurgan xaridor sizning biznesinggizga qiziqishi ortadi` },
];


class Faqs extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu="FAQ"  activeMenu="FAQ" />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Your Faq --> */}
                        <div className="section-full overlay-white-middle content-inner" style={{ backgroundImage: "url(" + pattern + ")" }}>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h3>Sizda savol bormi?</h3>
                                    <div className="dlab-separator bg-primary"></div>
                                    <p>Bizda tajribali mutaxassislar tomonidan berilgan javoblarimi bor</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 m-b30" >
                                        <div className="faq-video">
											<VideoPopup />
                                            <img src={about} alt="" className="img-cover radius-sm" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <AccordionBlog />
                                    </div>
                                </div>
                                {/* <!-- Faq Info --> */}
                                <div className="row">
									{iconBlog.map((item,index)=>(
										<div className="col-lg-4 col-md-4 col-sm-6 m-b30">
											<div className="icon-bx-wraper bx-style-1 bg-white p-a30 left">
												<div className="icon-md text-primary m-b20">
													<Link to={"#"} className="icon-cell">{item.icon}</Link>
												</div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
													<p>{item.info}</p>
												</div>
											</div>
										</div>
									))}	
                                </div>
                                {/* <!-- Faq Info END --> */}
                            </div>
                        </div>
                        {/* <!-- Your Faq End --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Faqs;