
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer6 extends Component {
	render() {
		return (
			<>
				<footer className="site-footer">
					<div className="footer-top bg-gray-dark">
						<div className="container">
							<div className="row">
								<div className="col-5 col-lg-2 col-md-6 col-sm-6 footer-col-4">
									<div className="widget widget_services border-0">
										<h5 className="m-b30 text-white">Company</h5>
										<ul>
											<li><Link to={"/"}>Bosh sahifa </Link></li>
											<li><Link to={"/about-2"}>Biz haqimizda </Link></li>
											<li><Link to={"/contact"}>Bog'lanish</Link></li>
										</ul>
									</div>
								</div>

								<div className="col-lg-4 col-md-6 col-sm-6 footer-col-4">
									<div className="widget widget_getintuch">
										<h5 className="m-b30 text-white">Manzil & Telefon</h5>
										<ul>
											<li><i className="ti-location-pin"></i><strong>Manzil</strong>15 Bulvar, Samarqand, O'zbekiston</li>
											<li><i className="ti-mobile"></i><strong>Telefon raqam:</strong>+998 (95) 778 88 68</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 footer-col-4 ">
									<div className="widget">
										<h5 className="m-b30 text-white">Biz siz uchun....</h5>
										<p className="text-capitalize m-b20">Biz siz uchun eng yaxshilarini beramiz. Raqobatchilaringiz orasida esa sizni yuqorida turishingizni xohlaymiz.</p>
									</div>
									<div className="m-b10">
										<span><h5>Ijtimoiy tarmoqlar</h5></span>
										<ul className="list-inline socail-icon m-t15 m-a0">
											<li><a href='https://www.facebook.com/Fenix-Soft-102993012405991' className="site-button white facebook"><i className="fa fa-facebook"></i></a></li>
											<li><a href="https://www.instagram.com/fenixsoft.uz/" className="site-button white instagram"><i className="fa fa-instagram"></i></a></li>
											<li><a href='https://t.me/fenixcompany_uz' className="site-button white telegram"><i className="fa fa-telegram"></i></a></li>
											<li><a href="https://fenixcompanyuzb@gmail.com" className="site-button white google-plus"><i className="fa fa-google-plus"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>

			</>
		);
	}
}

export default Footer6;