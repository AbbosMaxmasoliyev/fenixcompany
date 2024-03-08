import React, { useEffect, useState, Component } from 'react';
import useScrollPosition from "use-scroll-position";
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-3.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import './App.css';
import 'react-modal-video/css/modal-video.min.css';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ThemeButton from './markup/Element/ThemeButton/ThemeButton';


import Index7 from './markup/Pages/Index7.js';
import Aboutus2 from './markup/Pages/Aboutus/Aboutus2';

import Error404 from './markup/Pages/Error/Error404';

import Expertise from './markup/Pages/Expertise';
import Team from './markup/Pages/Team';
import Faqs from './markup/Pages/Faqs';
import Contact from './markup/Pages/Contact';
import Service from './markup/Pages/Service/Service.js';

import ScrollToTop from './markup/Element/ScrollToTop';
import PortfolioFullWidth from './markup/Pages/Portfolio/PortfolioFullWidth';

function App() {

	return (
		<>
			<div className="page-wraper">
				<Routes>
					<Route index path='/' element={<Index7 />} />
					<Route path='/about-2' element={<Aboutus2 />} />
					<Route path='/expertise' element={<Expertise />} />
					<Route path='/team' element={<Team />} />
					<Route path='/faqs' element={<Faqs />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/service' element={<Service />} />
					<Route path='/portfolio-full-width' element={<PortfolioFullWidth />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</div>
			<ScrollToTop />
			<ThemeButton />
		</>
	);
}

export default App;
