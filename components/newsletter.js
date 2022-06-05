const Newsletter = () => {
    return (
        <>
            <section className="newsletter-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 text-white">
                            <h3>Our Newsletter</h3>
                        </div>
                        <div className="col-lg-9">
                            <form className="newsletter-form">
                                <input type="text" placeholder="Your E-mail" />
                                    <button className="site-btn sb-white">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter;