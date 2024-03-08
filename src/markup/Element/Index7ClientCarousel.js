import React, {Component} from 'react';
import Slider from "react-slick";

import logo1 from './../../images/client-logo/yoshlar_ittifoq.png';
import logo2 from './../../images/client-logo/yoshlar_agentligi.png';
import logo3 from './../../images/client-logo/epam.svg';
import logo5 from './../../images/client-logo/empire.png';
import logo6 from "./../../images/client-logo/mininstry.png"


const imgblog =[
	{image:logo1, }, {image:logo2, }, {image:logo3, }, {image:logo2, }, {image:logo5, },{image:logo6, }
]



class Index7ClientCarousel extends Component{	
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
            infinite: true,
			autoplay: true,
			speed: 2000,
			responsive: [
				
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 591,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 360,
				  settings: {
					slidesToShow: 2,
				  }
				},
			]
        };
		return(
			<Slider className="img-carousel owl-carousel owl-none" {...settings}>
				{imgblog.map((item,index)=>(	
					<div className="item">
						<div className="client-logo text-center">
							<img src={item.image} height={'150px'}/>
						</div>
					</div>
				))}
			</Slider>			
		)
		
	}
	
}

export default Index7ClientCarousel;