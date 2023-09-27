import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sliderimages from '../../images/Rectangle 3.png';
import orangeArrow from '../../images/orangeArrow.png'

export default function FeaturedClasses() {
    const options = {
        items: 3,
        autoplay: true,
        slideBy: 1,
        loop: true,
        margin: 20,
        nav:true,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            998: {
                items: 3
            },
        }
    };
    return (
        <div className="featuredMainSection container-fluid">
            <div className="container">
                <div className="mainSectionHeadings">
                    <h2 className="secondaryHeading">LET'S SEE OUR</h2>
                    <h1 className="MainHeading">FEATURED CLASSES</h1>
                </div>
                <div className="FeaturedClassesSliderSection">
                    <OwlCarousel {...options}>
                        <div className="item p-3 carouselItems">
                            <img className='sliderImage' src={sliderimages} alt="sliderImg" />
                            <div className="textSection">
                                <h2>bharatnatyam</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus.</p>
                                <button className='btn btn-link text-decoration-none d-flex'><p>learn more</p> <img className='orangeArrow'  src={orangeArrow} alt="arrow" /></button>
                            </div>
                        </div>
                        <div className="item p-3 carouselItems">
                            <img className='sliderImage' src={sliderimages} alt="sliderImg" />
                            <div className="textSection">
                                <h2>bharatnatyam</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus.</p>
                                <button className='btn btn-link text-decoration-none d-flex'><p>learn more</p> <img className='orangeArrow'  src={orangeArrow} alt="arrow" /></button>
                            </div>
                        </div>
                        <div className="item p-3 carouselItems">
                            <img className='sliderImage' src={sliderimages} alt="sliderImg" />
                            <div className="textSection">
                                <h2>bharatnatyam</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus.</p>
                                <button className='btn btn-link text-decoration-none d-flex'><p>learn more</p> <img className='orangeArrow'  src={orangeArrow} alt="arrow" /></button>
                            </div>
                        </div>
                        <div className="item p-3 carouselItems">
                            <img className='sliderImage' src={sliderimages} alt="sliderImg" />
                            <div className="textSection">
                                <h2>bharatnatyam</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus.</p>
                                <button className='btn btn-link text-decoration-none d-flex'><p>learn more</p> <img className='orangeArrow'  src={orangeArrow} alt="arrow" /></button>
                            </div>
                        </div>
                        <div className="item p-3 carouselItems">
                            <img className='sliderImage' src={sliderimages} alt="sliderImg" />
                            <div className="textSection">
                                <h2>bharatnatyam</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus.</p>
                                <button className='btn btn-link text-decoration-none d-flex'><p>learn more</p> <img className='orangeArrow'  src={orangeArrow} alt="arrow" /></button>
                            </div>
                        </div><div className="item p-3 carouselItems">
                            <img className='sliderImage' src={sliderimages} alt="sliderImg" />
                            <div className="textSection">
                                <h2>bharatnatyam</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus.</p>
                                <button className='btn btn-link text-decoration-none d-flex'><p>learn more</p> <img className='orangeArrow'  src={orangeArrow} alt="arrow" /></button>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}
