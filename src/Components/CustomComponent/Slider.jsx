import React from 'react';
import sliderimg from '../../images/Rectangle 3.png';
import classesIcon from '../../images/1.png';
import programIcon from '../../images/2.png';
import instructionIcon from '../../images/3.png';
import aboutus_image from '../../images/about-section-img.png';


export default function Slider() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sliderimg} className="d-block w-100" alt="sliderimg" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Experience the Rhythmic Splendor of Indian Dance</h5>
                            <p>Join Our Vibrant Dance Classes Today!</p>
                            <button className='btn btn-danger btn-lg rounded-0'>REGISTRATION</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={sliderimg} className="d-block w-100" alt="sliderimg" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Experience the Rhythmic Splendor of Indian Dance</h5>
                            <p>Join Our Vibrant Dance Classes Today!</p>
                            <button className='btn btn-danger btn-lg rounded-0'>REGISTRATION</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={sliderimg} className="d-block w-100" alt="sliderimg" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Experience the Rhythmic Splendor of Indian Dance</h5>
                            <p>Join Our Vibrant Dance Classes Today!</p>
                            <button className='btn btn-danger btn-lg rounded-0'>REGISTRATION</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="bannerBottom rounded-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 text-center">
                        <img className='p-3' src={classesIcon} alt="img" />
                        <h4>30+ CLASSES</h4>
                        <p>Lorem ipsum dolor sit amet, cectetur
                            adipiscing elit.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className='p-3' src={programIcon} alt="img" />
                        <h4>30+ CLASSES</h4>
                        <p>Lorem ipsum dolor sit amet, cectetur
                            adipiscing elit.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img className='p-3' src={instructionIcon} alt="img" />
                        <h4>30+ CLASSES</h4>
                        <p>Lorem ipsum dolor sit amet, cectetur
                            adipiscing elit.</p>
                    </div>

                </div>
            </div>
            <div className="aboutUsSection container m-auto row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="image">
                        <img src={aboutus_image} alt="img" />
                    </div>
                    <div className="blankDiv"></div>
                    <div className="video"></div>
                </div>
                <div className="col-md-6">
                    <div className="mainSectionHeadings">
                        <h2 className="secondaryHeading">LET'S SEE OUR</h2>
                        <h1 className="MainHeading">FEATURED CLASSES</h1>
                    </div>
                    <p>
                        This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.
                    </p>
                    <button className='btn btn-danger rounded-0'>KNOW MORE</button>
                </div>
            </div>
        </>
    )
}
