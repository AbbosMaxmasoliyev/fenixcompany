import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header1';
import Footer from './../Layout/footer6';
import PageTitle from './../Layout/PageTitle';

import bnr from './../../images/background/team_back.png';
import pic1 from './../../images/testimonials/shexroz_pic.png';
import pic2 from './../../images/testimonials/Samandar_pic.png';
import pic3 from './../../images/testimonials/Otajon_pic.jpg';
import pic4 from './../../images/testimonials/bobur_pic.jpg';
import Alixon from './../../images/testimonials/alixan_pic.jpg';
import Husan from './../../images/testimonials/Husan.jpg';

const teamBlog=[
	{images: pic1, name : "Dehqonov Shexroz", role : "Director"}, {images: pic2, name:"Samandar Mahmudov", role : "Fullstack python developer"},
	{images: pic4, name: "Bobur Ahmadjonov", role : "Marketolog"}, {images: pic3, name : "Otajon Makxmasoliyev", role : "Project Manager"},
	{images: Alixon, name: "Alixon Hasanxonov", role : "Front End devloper"}, {images: Husan, name : "Husan Hukumov", role : "Mobile developer"},
]

class Team extends Component {
	componentDidMount() {
    }
    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr + ")" }}>
                        <PageTitle motherMenu='Bizning jamoa' activeMenu='Bizning jamoa'  />
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {/* <!-- contact area --> */}
                    <div className="content-block">
                        {/* <!-- Team Section --> */}
                        <div className="section-full text-center bg-white content-inner-1">
                            <div className="container">
                                <div className="section-head text-black text-center">
                                    <h2>Bizning jamoa bilan tanishing</h2>
                                    <p>O'z g'ayrati va mehrini mijozlarining ishonchi uchun sarflaydigan jamoa.</p>
                                </div>
                                <div className="row images">
									{teamBlog.map((data,index)=>(
										<div className="col-lg-3 col-md-6 col-sm-6 m-b5" key={index}>
											<div className="dlab-box">
												<div className="dlab-media dlab-img-overlay6 dlab-img-effect radius-sm"> 
													<img src={data.images} alt="" />
													<div className="overlay-bx">
														<div className="overlay-icon">
															<ul className="dlab-social-icon">
																<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
																<li><Link to={"#"} className="fa text-white fa-twitter"></Link></li>
																<li><Link to={"#"} className="fa text-white fa-linkedin"></Link></li>
																<li><Link to={"#"} className="fa text-white fa-facebook"></Link></li>
															</ul>
														</div>
													</div>
												</div>
												<div className="dlab-title-bx p-a10">
													<h5 className="text-black m-a0">{data.name}</h5>
													<span className="clearfix">{data.role}</span>
												</div>
											</div>
										</div>
									))}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Team Section END --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Team;