const Shop = () => {
    return (
        <>
            <section className="shop-section">
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
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;