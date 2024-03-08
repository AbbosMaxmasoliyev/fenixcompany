import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class HeaderMenu extends Component {

	render() {
		return (
			<>
				<ul className="nav navbar-nav">
					<li><Link to={'/'}>Bosh sahifa </Link></li>
					<li><Link to={'/about-2'} className="dez-page">Biz haqimizda</Link></li>
					<li><Link to={'#'}>Sahifalar <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'/expertise'} className="dez-page">Mutaxassislar</Link></li>

							<li><Link to={'/team'} className="dez-page">Bizning jamoa</Link></li>
							<li><Link to={'/faqs'} className="dez-page">FAQ</Link></li>
						</ul>
					</li>
					<li><Link to={'/service'} className="dez-page">Xizmatlarimiz</Link></li>

					<li><Link to={'/portfolio-full-width'} className="dez-page">Portfolio</Link></li>


				</ul>
			</>
		)
	}
}
export default HeaderMenu;