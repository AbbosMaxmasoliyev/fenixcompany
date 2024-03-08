import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Header from './../../Layout/Header1';
import Footer from './../../Layout/footer6';
import PageTitle from './../../Layout/PageTitle';

// var bg1 = require('images/banner/bnr2.jpg');
import bnr1 from './../../../images/banner/bnr1.png';
import bnr2 from './../../../images/background/bg1.png';
import about1 from './../../../images/about-us/about1.jpg';
import about2 from './../../../images/about-us/about2.jpg';
import about3 from './../../../images/about-us/team.jpg';
import bnr3 from './../../../images/pattern/pic1.jpg';
import work1 from './../../../images/about-us/problem.png';
import work3 from './../../../images/about-us/approach.png';
import work5 from './../../../images/about-us/choose.jpg';
import bnr4 from './../../../images/background/bg1.jpg';

const imageblog =[
	{image: work1, title:`O'rganish`, info:`Biz mijozimizning barcha fikrlari, g'oyalar bilan tanishamiz. Muammolar o'rganiladi.`},
	{image: work3, title:'Yondashuv', info:`Fikr va g'oyaga qarab har bir buyurtmachi uchun individual tarzda nostandart yechimlar foydalangan holda yondashamiz.`},
	{image: work5, title:'Tanlov', info:`Mahsulot uchun yuqoridagi elementlarni hisobga olib, sizga eng keraklisini tanlab beramiz.`},
];
const counterBlog = [
	{icon: <i className="icon flaticon-bar-chart text-primary" />, num: '5',  title: 'Bajarilgan loyihalar',},	
	{icon: <i className="icon flaticon-avatar text-primary" />, num: '9',    title: 'Mamnun mijozlar',},	
	{icon: <i className="icon flaticon-file text-primary" />, num: '1500',   title: 'Savollarga javob berildi',},	
	{icon: <i className="icon flaticon-pen text-primary" />, num: '20', title: 'Buyurtmalar',},	
];

class Aboutus2 extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
                        <PageTitle motherMenu='Biz haqimizda' activeMenu='Biz haqimizda' />
                    </div>
                    <div className="content-block">
						<div className="section-full bg-white content-inner" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-team"></i></Link>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Bizning jamoa</h5>
                                                    <p>O'zining va mijozlarining qadriyatlarini har doim 1-o'ringa qo'yadigan jamoa</p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-bar-chart"></i></Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">Har doim o'sishda davom etadigan</h5>
                                                    <p>Har doim yangi texnologiyalar va trenddagi loyihalar o'rganadigan, yangi trendlar yaratadigan jamoa</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6">
                                            <div className="icon-bx-wraper">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-devices"></i></Link>
                                                </div>
                                                <div className="icon-content m-b30">
                                                    <h5 className="dlab-tilte">Eng yaxshi qurilmalar</h5>
                                                    <p>Mahsulotlarimiz sifatli bo'lishi uchun yuqori texnologiyalar bilan qurollanganmiz </p>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper  m-b30">
                                                <div className="icon-md text-black m-b20">
                                                    <Link to ={"#"} className="icon-cell text-black"><i className="flaticon-trophy"></i></Link>
                                                </div>
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">To'g'ri tanlov</h5>
                                                    <p>Shunchaki bizning jamoani tanlang. Biz esa sizga eng yaxshilarini ravo ko'ramiz...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6 m-b30">
                                            <div className="dlab-media dlab-img-overlay6 gradient radius-sm">
                                                <img src={about1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6 col-lg-3 col-md-6 col-sm-6" >
                                            <div className="dlab-media dlab-img-overlay6 gradient radius-sm">
                                                <img src={about2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full ">
                            <div className="container-fluid">
                                <div className="row dzseth">
                                    <div className="col-lg-6 col-md-6 col-xs-12 p-a0 img-fix">
                                        <img src={about3} alt="" className="img-cover" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-12 bg-black-light p-lr0 dis-tbl">
                                        <div className="p-a30 dis-tbl-cell">
                                            <div className="max-w500 m-auto p-tb30">
                                                <div className="row">
                                                    <div className="col-lg-12 text-white">
                                                        <h2>Sizga eng yaxshilarini ravo ko'ramiz</h2>
                                                        <h5 className="m-b30">Biz tashkil etilganimizdan buyon siaftli mahsulotlarimizni mijozlarimizga taqdim etamiz</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 m-b30 text-gray">
                                                        <p>Zamonaviy dunyoda biznes uchun<b> IT mahsulotlar (web sayt, onlayn do'kon, CRM(biznesning avtomatlashtirish) SMM xizmatlari)</b> suv va havodek zarur.</p>
                                                        <p>Shunday ekan virtuallashib borayotgan zamonaviy dunyoda zamonaviy biznes yuritish uchun albatta IT xizmatlarimizdan foydalanishga to'gri keladi. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner" style={{ backgroundImage: "url(" + bnr3 + ")" }}>
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2 className="text-uppercase m-b10">Kompaniya haqida</h2>
                                    <p>Shunchaki zamonaviy dunyoga zamonaviy qarash bilan qarang, biz esa xizmatdamiz...</p>
                                </div>
                                <div className="row text-center">
									{imageblog.map((item,index)=>(
										<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
											<div className="dlab-box">
												<div className="dlab-media dlab-img-effect rotate"> <Link to ={"#"}><img src={item.image} alt="" /></Link> </div>
												<div className="dlab-info p-a30 border-1 bg-white">
													<h5 className="dlab-title m-t0"><Link to ={"#"}>{item.title}</Link></h5>
													<p className="m-b0">{item.info}</p>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>

                        <div className="section-full content-inner overlay-primary bg-img-fix text-white" style={{ backgroundImage: "url(" + bnr4 + ")" }}>
                            <div className="container">
                                <div className="section-content">
                                    <div className="row">
										{counterBlog.map((data,index)=>(
											<div className="col-6 col-lg-3 col-md-6 col-sm-6 col-12 m-b30" key={index}>
												<div className="counter-style-1">
													<div className="">{data.icon}<span className="counter"><CountUp end={data.num} duration={4}/></span></div>
													<span className="counter-text">{data.title}</span>
												</div>
											</div>
										))}	
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-full p-tb80">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="text-center max-w600 m-auto ">
                                            <div className="m-b20"><i className="fa fa-quote-left font-45 text-primary"></i></div>
                                            <h4 className="text-uppercase font-weight-700 font-30">Biz sizning yangi loyihalaringiz haqida eshitishni xohlaymiz.</h4>
                                            <Link to={"#"} className="site-button radius-xl outline outline-2"><span className="p-lr10">Yangi loyiha boshlash</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </>
        )
    }
}
export default Aboutus2;