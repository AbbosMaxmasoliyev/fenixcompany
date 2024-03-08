import React, { Component } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ThemeButton from './Element/ThemeButton/ThemeButton';


import Index7 from './Pages/Index7';
import Aboutus2 from './Pages/Aboutus/Aboutus2';

import Error404 from './Pages/Error/Error404';

import Expertise from './Pages/Expertise';
import Team from './Pages/Team';
import Faqs from './Pages/Faqs';
import Contact from './Pages/Contact';
import Service from './Pages/Service/Service.js';

import ScrollToTop from './Element/ScrollToTop';
import PortfolioFullWidth from './Pages/Portfolio/PortfolioFullWidth';

class Markup extends Component {
    render() {
        return (<>
            <div className="page-wraper">
                <Routes>
                    <Route index path='/' exact component={Index7} />
                    <Route path='/about-2' exact component={Aboutus2} />
                    <Route path='/expertise' exact component={Expertise} />
                    <Route path='/team' exact component={Team} />
                    <Route path='/faqs' exact component={Faqs} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/service' exact component={Service} />
                    <Route path='/portfolio-full-width' exact component={PortfolioFullWidth} />
                    <Route path='*' exact component={Error404} />
                </Routes>
            </div>
            <ScrollToTop />
            <ThemeButton />
        </>
        )
    }

}

export default Markup;