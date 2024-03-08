import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header1 from './../Layout/Header1';
import Footer from './../Layout/footer6';
import Index7Slider from './../Element/Index7Slider';
import Index7ClientCarousel from './../Element/Index7ClientCarousel';

import icon4 from './../../images/icon/icon4.png';
import icon5 from './../../images/icon/icon5.png';
import icon6 from './../../images/icon/icon6.png';

import Samandar_pic from './../../images/testimonials/Samandar_pic.png';
import Shexroz_pic from './../../images/testimonials/shexroz_pic.png';
import Otajon_pic from './../../images/testimonials/Otajon_pic.jpg';
import Bobur_pic from './../../images/testimonials/bobur_pic.jpg';
import Husan_pic from './../../images/testimonials/Husan.jpg';
import Alixan_pic from './../../images/testimonials/alixan_pic.jpg';

import brandBook_bereket from './../../images/blog/default/bereket.png';
import Samytp_pic from './../../images/blog/recent-blog/Samytp_pic.png';
import Mexant_pic from './../../images/blog/recent-blog/Mexant_pic.png';
import Texnopark_pic from './../../images/blog/recent-blog/Texnopark.jpg';
import recent8 from './../../images/portfolio/polyglot.jpg';

import bg22 from './../../images/background/bg22.png';
import bg23 from './../../images/background/faq.jpg';


const wrpaerBlog = [
	{image: icon4, title:'Tajriba', info :`-IT Bozorida +3 yil tajribaga ega va +50 xalqaro hamda mahalliy kompaniyalar bilan hamkorlikda ishlash.` },
	{image: icon5, title:'Maqsad', info : `Xizmatlarimiz bilan mijozlarni xursand qilish va insonlar uchun foydali mahsulotlar yaratish.`},
	{image: icon6, title:'Nega biz?', info : '-Tajribali jamoaga o’z biznesingizni ishonishingiz mumkin. Har qanday turdagi xizmatlarni biz sizga sifatli qilib bera olamiz.'},
];

const expertBox = [
	{image: Samandar_pic, name:'Samandar Mahmudov', role : 'Fullstack Python developer', }, 
	{image: Bobur_pic, name:'Bobur Akhmadjonov', role : 'Marketolog', }, 
	{image: Shexroz_pic, name:'Shexroz Dehqonov', role : 'Grafik Dizayner', }, 
	{image: Alixan_pic, name:'Xasanxonov Alixon', role : 'Frontend Developer', }, 
	{image: Husan_pic, name:'Xukumov Xusan', role : 'Mobile Developer', }, 
	{image: Otajon_pic, name:'Maxmasoliyev Otajon', role : 'Project Manager', }, 

];

const hoverBlog = [
	{title: 'Shop', icon: <i className="flaticon-shop" />,},
	{title: 'Star', icon: <i className="flaticon-star" />,},
	{title: 'Play', icon: <i className="flaticon-play-button" />,},
	{title: 'Heart', icon: <i className="flaticon-like" />,},
];

class Index7 extends Component {
    componentDidMount() {
		var i = 0;
		
		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function(event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}
		
		
		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function(event) {
				var inputValue = this.value;	
				if ( inputValue === '' ) {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');  
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}	
    }
    render() {
        return (
            <>
                <Header1 />

                <div className="page-content">
					<div className="owl-slider-banner main-slider dz-style-1">
						<Index7Slider />
					</div>
					
                    {/* <!-- About Us --> */}
                    <div className="section-full bg-white p-b30">
                        <div className="container">
                            <div className="row about-1">
                                <div className="icon-bx-wraper col-md-4 bg-white col-lg-4 p-tb30 p-l30 p-r50">
                                    <div className="icon-md m-b20">
                                        <span className="icon-cell">
                                            <img src="images/icon/icon3.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dez-tilte"> Marketing xizmatlari</h3>
                                        <p>-Biznesni rivojlantirish </p>
                                        <p>-Ijtimoiy tarmoqlar saxifalarni professional yuritish</p>
                                        <p>-Biznesning muamolarini o'rganish va yechim tavsiya etish</p>
                                        <p>-Ijtimoiy tarmoklarda reklama (Targeting)</p>
                                        <p>-Yangi mijozlar topish va oqimini oshirish</p>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper bg-primary p-lr30 about-scale text-white col-md-4 col-lg-4 p-tb30">
                                    <div className="icon-md m-b20">
                                        <span className="icon-cell">
                                            <img src="images/icon/icon1.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dez-tilte">Dasturlash xizmatlari</h3>
                                        <ul className="list-arrow-right m-b0">
                                            <li><i className="fa fa-arrow-right"></i>-Sayt yaratish</li>
                                            <li><i className="fa fa-arrow-right"></i>-Internet do’kon yaratish</li>
                                            <li><i className="fa fa-arrow-right"></i>-Landing page yaratish</li>
                                            <li><i className="fa fa-arrow-right"></i>-CRM tizimini yaratish</li>
                                            <li><i className="fa fa-arrow-right"></i>-Telegram bot yasash</li>
                                            <li><i className="fa fa-arrow-right"></i>-Mobile Dasturlar yasash</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="icon-bx-wraper p-l50 p-r30 col-md-4 bg-white col-lg-4 p-tb30">
                                    <div className="icon-md m-b20">
                                        <span className="icon-cell">
                                            <img src="images/icon/icon2.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="dez-tilte">Logo & Branding xizmatlari</h3>
                                        <p>-Nomlash</p>
                                        <p>-Logo</p>
                                        <p>-Brandbook </p>
                                        <p>-Brendni ommaga tanitish</p>
                                        <p>-PR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Us END --> */}
                    {/* <!-- Our Services --> */}
                    <div className="section-full content-inner-2 bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 section-head text-center">
                                    <h5 className="title-small">Foydali Tanlov</h5>
                                    <h2 className="title-head m-b0">Siz uchun maqsadli tanlov</h2>
                                </div>
                            </div>
                            <div className="row">
								{wrpaerBlog.map((data,index)=>(
									<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index}>
										<div className="icon-bx-wraper our-service center">
											<div className="icon-lg text-primary m-b20">
												<Link to={"#"} className="icon-cell"><img src={data.image} alt="" /></Link>
											</div>
											<div className="icon-content p-lr50">
												<h5 className="dez-tilte text-uppercase">{data.title}</h5>
												<p>{data.info}</p>
											</div>
										</div>
									</div>
								))}
                               
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Services END --> */}
                    {/* <!-- Experts --> */}
                    <div className="section-full content-inner-2 our-team-bx bg-primary">
                        <div className="container">
                            <div className="row">
                                <div className="section-head text-white col-lg-12 text-center">
                                    <h5 className="title-small">Bizning Jamoa</h5>
                                    <h2 className="title-head m-b0">Yuqori darajadagi expertlar jamoasi</h2>
                                </div>
                            </div>
                            <div className="row">
								{expertBox.map((data,index)=>(
									<div className="col-lg-4 col-md-6 col-sm-6" key={index}>
										<div className="experts-box text-white p-a20" > 
											<div className="clearfix experts-info-bx">
												<div className="experts-img">
													<img src={data.image} alt="" />
												</div>
												<div className="experts-info">
													<h5 className="experts-name">{data.name}</h5>
													<h6 className="experts-service">{data.role}</h6>
												</div>
											</div>
											<ul className="dez-social-icon">
												<li><a href='https://Facebook.com/fenixcompany.uz' className="fa text-white fa-facebook"></a></li>
												<li><a href='https://Instagram.com/fenixcompany.uz' className='fa text-white fa-instagram'></a></li>
												<li><a href='https://T.me/fenixcompany_uz' className='fa text-white fa-telegram'></a></li>
												<li><a href='https://fenixcompanyuz@gmail.com' className='fa text-white fa-google-plus'></a></li>
											</ul>
										</div>
									</div>
								))}
                            </div>
                        </div>
                    </div>
                    {/* <!-- Experts END -->	 */}
                    {/* <!-- Pricing Table --> */}
                    <div className="section-full content-inner-2 bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="section-head col-lg-12 text-center">
                                    <h5 className="title-head">Narxlar Jadvali</h5>
                                </div>
                            </div>
                            <div className="row p-lr15">
                                <div className="col-lg-4 col-md-4 p-a0">
                                    <div className="pricingtable-wrapper style3">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-head bg-gray">
                                                <div className="pricingtable-title">
                                                    <h2>SMM</h2>
                                                    <p>'Start' ta'rif rejasi</p>
                                                </div>
                                                <div className="pricingtable-price text-primary">
                                                    <span className="pricingtable-bx"><span>$</span>380</span>
                                                    <span className="pricingtable-type text-gray-dark">Oyiga</span>
                                                </div>
                                                </div>
                                            <ul className="pricingtable-features">
                                                <li>Instagram, Facebook & Telegram post<span>12</span></li>
                                                <li>Stories<span>17</span></li>
                                                <li>Moution video<span>1</span></li>
                                                <li>Target<span>3</span></li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <Link to={"/contact"} className="site-button radius-xl button-md outline outline-1 btn-block">Buyurtma berish</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 p-a0">
                                    <div className="pricingtable-wrapper style3">
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-head bg-primary text-white">
                                                <div className="pricingtable-title">
                                                    <h2>Sayt yaratish xizmati</h2>
                                                    <p>Boshlanish narxi </p>
                                                </div>
                                                <div className="pricingtable-price">
                                                    <span className="pricingtable-bx"><span>$</span>270</span>
                                                </div>
                                                <p className="pricingtable-content">O'z biznesinggizni internet tarmog'ida bo'lishini xohlayapsizmi? Yoki biznesingizni avtomatlashtirmoqchimisiz? Unda biz Sizga yordam beramiz.</p>
                                            </div>
                                            <ul className="pricingtable-features">
                                                <li>Informatsion Werb sayt<span>$ 300 dan</span></li>
                                                <li>CRM(Avtomatlashtirish)<span>$ 2000 dan</span></li>
                                                <li>Internet do'kon<span>$ 600 dan</span></li>
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <Link to={"/contact"} className="site-button radius-xl button-md btn-block">Buyurtma berish</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 p-a0">
                                    <div className="pricingtable-wrapper style3" >
                                        <div className="pricingtable-inner">
                                            <div className="pricingtable-head bg-gray">
                                                <div className="pricingtable-title">
                                                    <h2>Logo & Branding xizmati</h2>
                                                    <p>-Logo yasash boshlang’ich narxi</p>
                                                </div>
                                                <div className="pricingtable-price text-primary">
                                                    <span className="pricingtable-bx"><span>$</span>74</span>
                                                    <span className="pricingtable-type text-gray-dark">dan boshlanadi</span>
                                                </div>
                                                </div>
                                            <ul className="pricingtable-features">
                                                <li>-2 ta Logo 3ta mock up bilan</li>
                                                <li>-6xil tanlov uchun ranglari bilan</li>
                                                
                                            </ul>
                                            <div className="pricingtable-footer">
                                                <Link to={"/contact"} className="site-button radius-xl button-md outline outline-1 btn-block">Buyurtma berish</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pricing Table END --> */}
                    {/* <!-- Ticket KIt Section --> */}
                    <div className="section-full content-inner bg-primary" style={{ backgroundImage: "url(" + bg22 + ")", backgroundPosition: "center" }}>
                        <div className="container">
                            <div className="row kow-image">
                                <div className="thumb-img m-b80"><img src={Shexroz_pic} alt="" /></div>
                                
                                <div className="col-lg-7 offset-lg-1 col-md-7 text-white m-b30">
                                    <div className="tickit-info">
                                        <h2 className="font-50">...IT ga qadam qo'yishingiz shart.</h2>
                                        <p>“Yuqori natijalarga erishish uchun qiyin yoʻldan emas toʻgʻri yoʻldan yurish kerak! Agar kelajakda peshqadamlar qatorida boʻlishni istasangiz hozir IT ga qadam qo'yishingiz shart.”</p>
                                        <span>-Shexroz Dehqonov, 'Fenix Company' Direktor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Ticket KIt Section End --> */}
                    {/* <!-- Contact Form --> */}
                    <div className="section-full content-inner bg-primary contact-2" style={{ backgroundImage: "url(" + bg23 + ")", backgroundPosition:"center", backgroundSize:"cover"}}>
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-7">
                                    <div className="" >
                                        <div className="support-form support-box-form bg-white">
                                            <div className="support-title m-b30">
                                                <h6 className="text-uppercase font-weight-500 m-b10">Qo'llab quvvatlash xizmati</h6>
                                                <h2 className="font-40 font-weight-400 m-tb0">Yordam kerakmi?</h2>
                                            </div>
                                            <div className="dezPlaceAni">
                                                <div className="dzFormMsg"></div>
                                                <form method="post" className="" action="">
                                                    <input type="hidden" value="Contact" name="dzToDo" />
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Sizning ismingiz</label>
                                                                    <input name="dzName" type="text" required="" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Telefon</label>
                                                                    <input name="dzOther[Phone]" type="text" required="" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Sizning Email pochtangiz</label>
                                                                    <input name="dzEmail" type="email" className="form-control" required="" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="form-group">
                                                                <div className="input-group">
                                                                    <label>Sizning xabaringiz...</label>
                                                                    <textarea name="dzMessage" rows="4" className="form-control" required="" placeholder=""></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                            <button name="submit" type="submit" value="Submit" className="site-button radius-xl button-md m-t10">Jo'natish</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="contact-info-bx p-a30 text-white" >
                                        <div className="m-b10">
                                            <span>manzil</span>
                                            <h3>15 Bulvar<br />Samarkand, Uzbekistan </h3>
                                        </div>
                                        <div className="m-b10">
                                            <span>E-mail</span>
                                            <h3>fenixcompanyuz@gmail.com</h3>
                                        </div>
                                        <div className="m-b10">
                                            <span>Telefon</span>
                                            <h3>(+998) 95 778 88 68</h3>
                                        </div>
                                        {/* className="site-button white facebook   fa fa-facebook   */}
                                        <div className="m-b10">
                                            <span>Ijtimoiy tarmoqlar</span>
                                            <ul className="list-inline socail-icon m-t15 m-a0">
                                                <li><a href='https://www.facebook.com/Fenix-Soft-102993012405991' className="site-button white facebook"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href='https://www.instagram.com/fenixsoft.uz/' className="site-button white instagram"><i className="fa fa-instagram"></i></a></li>
                                                <li><a href='http://T.me/fenixcompany_uz' className="site-button white telegram"><i className="fa fa-telegram"></i></a></li>
                                                <li><a href='fenixcompanyuz@gmail.com' className="site-button white google-plus"><i className="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Services End --> */}
                    <div className="section-full content-inner our-stories bg-white">
                        <div className="container">
                            <div className="section-head text-black text-center">
                                <h2 className="title-head m-b0">So'nggi loyihalar</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="blog-post blog-lg" >
                                        <div className="dez-post-media dez-img-effect radius-sm">
                                            <Link to={"#"}><img src={brandBook_bereket} alt="" /></Link>
                                        </div>
                                        <div className="dez-info">
                                            <div className="dez-post-tags">
                                                <span>MARKETING</span>
                                            </div>
                                            <div className="dez-post-title">
                                                <h4 className="post-title">Sifatli go'sht mahsulotlari bilan bozorda tanilayotgan "Bereket Dunyasi" Turkiya brendi uchun tayyorlangan Logo va Brandbook</h4>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={Samytp_pic} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>Marketing</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>Samarqand Yoshlar Texnoparkining Marketing xizmati</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={Mexant_pic} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>Web Site</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>Mexant Biznes klubi uchun qilingan Web Sayt</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={Texnopark_pic} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>SMM</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>Samarqand Yoshlar Texnoparki SMM Xizmatlari uchun qilingan postlar</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="blog-post blog-lg" >
                                                <div className="dez-post-media dez-img-effect radius-sm">
                                                    <Link to={"#"}><img src={recent8} alt="" /></Link>
                                                </div>
                                                <div className="dez-info">
                                                    <div className="dez-post-tags">
                                                        <span>Brending</span>
                                                    </div>
                                                    <div className="dez-post-title">
                                                        <h4 className="post-title"><Link to={"#"}>Polyglot o'quv markazi uchun qilingan web sayt.</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Stories Blog End --> */}
                    {/* <!-- Contact Form END --> */}
                    <div className="section-full bg-primary-dark p-tb15">
                        <div className="container">
							<Index7ClientCarousel /> 
                        </div>
                    </div>
                    {/* <!-- Partners Logo --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Index7;