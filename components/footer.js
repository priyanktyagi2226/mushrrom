
import Script from 'next/script';
import React , { useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Head from 'next/head';
import Image from 'next/image'



const Footer = () => {
   useEffect(() => {
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");
    $('.header-section .container').append('<div class="mobile-nav-switch"><i class="fa fa-bars"></i></div><ul class="mobile-menu"></ul>')
     var m1 = $('.main-menu-left ').children().clone();
     var m2 = $('.main-menu-right ').children().clone();
     $('.mobile-menu').append(m1,m2);
     $('.mobile-nav-switch').on('click', function () {
         $('.mobile-menu').slideToggle();
     });
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
     // Portfolio item height 
     var PorfolioItemFix = function () {
        var portfolioItem = $('.portfolio-item');
        var PIheight = portfolioItem.width();
        var h = PIheight;
        var wideH = (h * 2);
        portfolioItem.css('height',h);
        if(window.innerWidth > 479){
            $('.portfolio-item.--big').css('height',wideH);
        } else {
            $('.portfolio-item.--big').css('height',h);
        }
        
    }
    PorfolioItemFix();

    $(window).on('resize',function(){
        PorfolioItemFix();
    });

    
   },[])
   
   
    return (
        <>
           
            
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-7 order-md-1 order-2">
                            <img src="/img/logo.jpg" alt="" className="footer-logo" />
                                {/* <div className="copyright">
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved | This template
                                    is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="h"
                                        target="_blank">Priyank Tyagi</a>
                                </div> */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 order-md-2 order-1">
                            <ul className="footer-contact-list">
                                <li><span>Address:</span>Main Str, no 23, New York</li>
                                <li><span>Phone:</span>+546 990221 123</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>

            <Script src="https://use.fontawesome.com/1ae56ae90f.js"></Script>
           
        </>
    )
}
export default Footer;
