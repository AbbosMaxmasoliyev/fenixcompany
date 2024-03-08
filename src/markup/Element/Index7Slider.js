import React, {Component} from 'react';
import Slider from "react-slick";

import Slider5 from './../../images/main-slider/slide5.jpg';
import Slider4 from './../../images/main-slider/slide4.png';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next flaticon-right-arrow"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev flaticon-left-arrow" onClick={onClick} style={{zIndex:1 }}/>
	</div>
  );
}

class Index7Slider extends Component{
	
	render(){
		var settings = {		
			arrows: true,
			dots: false,
            slidesToShow: 1,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
					
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
					
				  }
				}
			]
        };
		return(
			
			<Slider className="owl-slider owl-carousel owl-theme" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider4} className="w-100" alt=""/></div>
					<div className="slide-content overlay-black-dark">
						<div className="slide-content-box container">
							<div className="max-w600 text-white ">
								<h2 className="dz-title">IT Dasturlash xizmatlari<br/></h2>
								<p>Sizning biznesingiz internetda yo’qmi demak siz biznesda yo’qsiz!</p>
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider5} className="w-100" alt=""/></div>
					<div className="slide-content overlay-black-dark">
						<div className="slide-content-box container">
							<div className="max-w600 text-white justify-content-center">
								<h2 className="dz-title">Marketing xizmatlari<br/></h2>
								<p>Sizning biznesingiz internetda yo’qmi demak siz biznesda yo’qsiz!</p>
							</div>
						</div>
					</div>
				</div>
			</Slider>	
		)
		
	}
	
}

export default Index7Slider;