
import React, { useEffect } from "react";
import $ from 'jquery';
import ReactDOM from "react-dom";
import Script from 'next/script';
import Slider from "react-slick";
import Image from 'next/image'





const Banner = () => {
    useEffect(() => {
    
        // $('.hero-slider').owlCarousel({
        //     loop: true,
        //     margin: 0,
        //     dots: false,
        //     margin: 0,
        //     items: 1,
        //     nav:true,
        //     animateOut: 'fadeOut',
        //     animateIn: 'fadeIn',
        //     navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        //     autoplay: true
        // });
    
    },[])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };
    return (
        <>
        <section className="hero-section">
            <div className="hero-social-links">
                <a href="#"><i className="fa fa-pinterest"></i></a>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-behance"></i></a>
            </div>
            <div className="brand-text">We love our brand</div>
            <div className="hero-slider owl-carousel">
            <Slider {...settings}>
                <div className="hero-slider-item set-bg" data-setbg="/img/slider1.jpg">
                    <div className="hs-content">
                        <div className="container">
                            <h2>Mushroom</h2>
                            <a href="#" className="site-btn sb-white">Read More</a>
                            <a href="#" className="site-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="hero-slider-item set-bg" data-setbg="/img/mush4.jpg">
                    <div className="hs-content">
                        <div className="container">
                            <h2>Mushroom</h2>
                            <a href="#" className="site-btn sb-white">Read More</a>
                            <a href="#" className="site-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="hero-slider-item set-bg" data-setbg="/img/mush1.jpg">
                    <div className="hs-content">
                        <div className="container">
                            <h2>Mushroom</h2>
                            <a href="#" className="site-btn sb-white">Read More</a>
                            <a href="#" className="site-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </Slider>
            
            </div>
        </section>
       
     </>
    )
}

export default Banner;