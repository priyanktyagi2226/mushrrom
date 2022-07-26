
import React, { useState, useEffect } from "react";
import { request } from "graphql-request";
import Link from 'next/link';
const Shop = () => {
    const [products, setProducts] = React.useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          const productData = await request(
            "https://api-ap-south-1.graphcms.com/v2/cl4a15udk1og201w85mlc2gn1/master",
            `
            query getProduct {
                mushrooms(where: {featured: true}) {
                  price
                  smallDescription
                  thumbnail {
                    url
                  }
                  title
                  url
                  id
                }
            }
            `
          );
    
          setProducts(productData);
        
          //
        };
    
        fetchProducts();
        
      }, []);
      console.log("pro",products)
    return (
        <>
            <section className="shop-section">
                <div className="container">
                    <div className="row">
                        { products && products.mushrooms && products.mushrooms.map((item) => {
                            return(
                                <div className="col-lg-4 col-sm-6" key={item.id}>
                                    <div className="shop-item">
                                        <img src={ item.thumbnail && item.thumbnail.url } alt="" />
                                            <h3> { item.title } </h3>
                                            <h6>Rs. { item.price }</h6>
                                            <Link href={`product/${item.url}`}><a className="add-card">Buy</a></Link>
                                    </div>
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;