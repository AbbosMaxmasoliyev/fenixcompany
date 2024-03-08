import React, {Component,useState,useEffect,Fragment } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header from '../../Layout/Header1';
import Footer from '../../Layout/footer6';
import PageTitle from '../../Layout/PageTitle';
import Masonry from 'react-masonry-component';

//images
import bnr1 from './../../../images/banner/bnr1.jpg';
import box1 from './../../../images/portfolio/polyglot.jpg';
import box2 from './../../../images/portfolio/Resto_pic.png';
import box3 from './../../../images/portfolio/flowers_pic.jpg';
import box4 from './../../../images/portfolio/bereket_pic.jpg';
import box5 from './../../../images/portfolio/impulsoil_pic.jpg';
import box6 from './../../../images/portfolio/storytelling.jpg';




const imageBlog = [
	{  Large: box1 , name:`Polyglot`, info:`Polyglot til o'quv markazi uchun qilingan Web sayt`, tag: ['Web','Advertising',] , },
	{  Large: box2 , name:`Resto`, info:`"Resto" restoran va kafesi uchun qilingan web sayt`,tag: [ 'Design', 'Web' ] , }, 
	{  Large: box3 , name:`Fresh Flowers`, info:`"Fresh Flowers" gul do'koni uchun qilingan web sayt`, tag: ['Advertising', 'Web', ] , }, 
	{  Large: box4 , name:`Bereket Dunyasi`, info:`"Bereket Dunyasi" Turkiya restoran xizmati uchun qilingan logo`, tag: ['Design', 'Branding' ], },
	{  Large: box5 , name:`Impuls Oil`, info:`"Impuls Oil" motor moylari biznesi uchun qilingan logo`, tag: ['Design', 'Branding' ], },
	{  Large: box6 , name:`StoryTelling`, info:`"Storytelling" Abdukarim Mirzayev maktabi uchun qilingan logo variant`, tag: ['Design', ], },


	
]

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link portfolio-fullscreen" >
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

const TagLi = ({name, handlesettag, tagActive}) => {                                                               
	return ( 
			
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}` } onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"} className="site-button-secondry radius-sm" ><span>{name} {''}</span> </Link>
		</li> 
	);
};


class PortfolioFullWidth extends Component{
	render(){
		return(
			<Fragment>	
			<Header />
			<div className="page-content bg-white">
				{/*  banner  */}
				<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
					<PageTitle motherMenu="Portfolio"  activeMenu="Portfolio"  />
				</div>
				{/*  Section-1 Start  */}
				<PortfolioItem />
				
			</div>	
			<Footer />
			</Fragment>			
		)
	}
} 
function PortfolioItem(){
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
		<>
			<div className="section-full content-inner-1 portfolio text-uppercase">		
				<div className="site-filters clearfix center  m-b40">
					<ul className="filters" data-toggle="buttons">
						<TagLi name="All"  handlesettag={setTag} tagActive={ tag === 'All' ? true : false }	/>
						<TagLi name="Web"  handlesettag={setTag} tagActive={ tag === 'Web' ? true : false }	/>
						<TagLi name="Advertising" handlesettag={setTag} tagActive={ tag === 'Advertising' ? true : false }	 />
						<TagLi name="Branding"  handlesettag={setTag} tagActive={ tag === 'Branding' ? true : false }	/>
						<TagLi name="Design"  handlesettag={setTag} tagActive={ tag === 'Design' ? true : false }	/>
					</ul>
				</div>
				<SimpleReactLightbox>
					<SRLWrapper >
						<div className="clearfix">
							<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
								<Masonry
									className={'my-gallery-class'} // default ''
									options={masonryOptions} // default {}
									disableImagesLoaded={false} // default false
									updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
									imagesLoadedOptions={imagesLoadedOptions} // default {}
								>
									{filteredImages.map((item, index)=>(
										<li className="web design card-container col-lg-3.5 col-md-6 col-xs-12 col-sm-6 p-a0" key={index}>
											<div className="dlab-box dlab-gallery-box">
												<div className="dlab-media dlab-img-overlay1 dlab-img-effect"> 
													<img src={item.Large} alt="" />
													<div className="overlay-bx">
														<div className="overlay-icon align-b text-white text-left">
															<div className="text-white text-left port-box">
																<h5>{item.name}</h5>
																<p>{item.info}</p>
																<Iconimage />
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									))}	
								</Masonry>	
							</ul>
						</div>
					</SRLWrapper>
				</SimpleReactLightbox>	
				
			</div>
		</>
	);
}
export {box1, box2, box3, box4, box5, box6,  imageBlog};
export default PortfolioFullWidth;
