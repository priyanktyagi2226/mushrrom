import Head from 'next/head'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import React, { useEffect } from "react";
//import foo from '../foo.js';

import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';
import ShopBanner from "../components/shopBanner";
import Newsletter from '../components/newsletter';


export default function Shop() {

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
            <ShopBanner></ShopBanner>

            <section className="shop-section shop-section-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p1.webp" alt="" />
                                    <h3>Black Coat</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p2.webp" alt="" />
                                    <h3>Black Dress</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p3.webp" alt="" />
                                    <h3>White Shirt</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p1.webp" alt="" />
                                    <h3>Black Coat</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p2.webp" alt="" />
                                    <h3>Black Dress</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p3.webp" alt="" />
                                    <h3>White Shirt</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p1.webp" alt="" />
                                    <h3>Black Coat</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p2.webp" alt="" />
                                    <h3>Black Dress</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="shop-item">
                                <img src="/img/p3.webp" alt="" />
                                    <h3>White Shirt</h3>
                                    <h6>$235</h6>
                                    <a href="" className="add-card">Add to cart</a>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            <Newsletter></Newsletter>
            <Footer></Footer>



        </div>
    )
}
