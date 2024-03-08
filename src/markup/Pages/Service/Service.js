import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/footer6';
import PageTitle from './../../Layout/PageTitle';
import SectionCounter from './../../Element/SectionCounter';
import FormStyle from './../../Element/FormStyle';

//Images
import bnr5 from './../../../images/banner/bnr5.jpg';
import bg1 from './../../../images/background/bg1.jpg';

const iconBox = [
	{icon: <i className="flaticon-devices" />, title:'Web dasturlash', info : `Mijoz talabidan kelib chiqib jahon standarti asosida web saytlar yaratamiz` },
	{icon: <i className="flaticon-pen" />, title:'Dizaynerlik xizmati', info : `Kreativlik bilan yondashilgan dizaynerlik xizmatlari` },
	{icon: <i className="flaticon-bar-chart" />, title:'SEO/SMO xizmatlari', info:`Bizensingiz 'Google'da eng yuqori o'rinda joy olsin`},
	{icon: <i className="flaticon-file" />, title:'Web sayt yuritish', info:`Web saytingizdan maksimal holatda foydalaning.` },
	{icon: <i className="flaticon-notebook" />, title:`Texnik xizmatlar`, info:`Web saytingiz yoki tizimingiz ishdan chiqdimi? Unda biz bor.` },
	{icon: <i className="flaticon-team" />, title:'SMM xizmatlari', info: `Biznesingizni ijtimoiy tarmoqlarda ham rivojlantiring`, },
];

class Service extends Component {


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr5 + ")" }}>
						<PageTitle motherMenu='Bizning xizmatlar'  activeMenu='Bizning xizmatlar' />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10">Bizning xizmatlar</h4>
                                    <h2 className="box-title m-tb0">Dasturlash & Marketing <span className="bg-primary"></span></h2>
                                    <p>Dasturiy ta'minotni dasturlashsiz tasavvur qila olmaymiz. Virtual bizneslarni esa SMM(Ijtimoiy tarmoqlar media marketingi)siz yuritish qiyin emas, balki, umuman iloji yo'qdir. </p>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row ">
									{iconBox.map((data, index)=>(
										<div className="col-md-4 col-sm-6 m-b30 "  key={index}>
											<div className="icon-bx-wraper expertise  bx-style-1 p-a30 center">
												<div className="icon-lg m-b20"> <Link to={"#"} className="icon-cell">{data.icon}</Link> </div>
												<div className="icon-content">
													<h5 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title}</Link></h5>
													<p>{data.info}</p>
												</div>
											</div>
										</div>
									))}	
                                </div>
                            </div>
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
							<SectionCounter />
                        {/* <!-- Why Chose Us End --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
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
export default Service;