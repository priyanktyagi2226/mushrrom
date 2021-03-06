import Head from 'next/head'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import React, { useEffect } from "react";
//import foo from '../foo.js';

import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';
import ContactBanner from "../components/contactBanner";
import Newsletter from '../components/newsletter';
import ContactForm from '../components/contactForm';

export default function About() {

    return (
        <div>

            <Head>
                <title>Silly Mushroom</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>
            <div id="preloder">
                <div className="loader"></div>
            </div>
            <div className="sp-line"></div>


            <Header></Header>
            <div>
                <section className="page-info-section set-bg" data-setbg="/img/mush4.jpg">
                    <h2>The Brand</h2>
                </section>


                <section className="about-intor-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-lg-1 order-2">
                                <div className="about-text">
                                    <h2>Fashions fade, style is eternal</h2>
                                    <p>Maecenas facilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet effic-tur urna gravida vel. Cras augue diam, sollicitudin sit amet felis ut, eleifend faucibus dui. Proin euismod suscipit lacus, et scelerisque nisi aliquam anunc feugiat mattis quam, ut luctus enim ultrices at. Maecenas facilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet efficitur urna gravida vel. Cras augue diam, sollicitudin sit amet felis ut, eleifend faucibus dui. Proin euismod suscipit lacus, et scelerisque nisi aliquam a. Nunc feugiat mattis quam, ut luctus enim ultrices at.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 order-lg-2 order-1">
                                <img src="/img/logo.jpg" className="about-logo" alt="image" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="team-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="team-member">
                                    <a href="" className="member-pic">
                                        <img src="/img/team.webp" alt="image" />
                                    </a>
                                    <h3>Maria Smith</h3>
                                    <span>Fashion Editor</span>
                                    <p>Maecenas facilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet efficitur urna gravida vel. Cras augue diam, sollicitudin sit amet felis ut, eleifend faucibus dui. Proin euismod suscipit lacus, et scelerisque </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-member">
                                    <a href="" className="member-pic">
                                        <img src="/img/team.webp" alt="image" />
                                    </a>
                                    <h3>Jenny Williams</h3>
                                    <span>Brand Ambasador</span>
                                    <p>Facilisis facilisis consequat. Curabitur fringilla pel-lentesque neque, imperdiet efficitur urna gravida vel. Cras augue diam, sollicitudin sit amet felis ut, eleifend faucibus dui. Proin euismod suscipit lacus, et scelerisque ollicitudin </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-member">
                                    <a href="" className="member-pic">
                                        <img src="/img/team.webp" alt="image" />
                                    </a>
                                    <h3>Stan Smith</h3>
                                    <span>Public Relations</span>
                                    <p>Proin euismod cilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet efficitur urna gravida vel. Cras augue diam, sollicitudin sit amet felis ut, eleifend faucibus dui. Proin euismod suscipit lacus, augue diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-5">
                            <a href="" className="site-btn">Read More</a>
                        </div>
                    </div>
                </section>


                <section className="steps-section set-bg" data-setbg="/img/steps-bg.webp">
                    <div className="container">
                        <img src="/img/steps.webp" className="step-line" alt="" />
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="step">
                                        <h2>1</h2>
                                        <p>Maecenas facilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet efficitu.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="step">
                                        <h2>2</h2>
                                        <p>Facilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet efficitur urna gravida vel.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="step">
                                        <h2>3</h2>
                                        <p>Maecenas facilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet efficitu.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="step">
                                        <h2>4</h2>
                                        <p>Facilisis facilisis consequat. Curabitur fringilla pellentesque neque, imperdiet efficitur urna gravida vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center pt-5">
                                <a href="" className="site-btn sb-white">Discover the collection</a>
                            </div>
                    </div>
                </section>
            </div>
            <Newsletter></Newsletter>
            <Footer></Footer>



        </div>
    )
}
