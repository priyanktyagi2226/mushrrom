const ContactForm = () => {
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="text-center contact-title">
                        <h2>Get in touch</h2>
                    </div>
                    <form className="contact-form">
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Your E-mail" />
                            </div>
                            <div className="col-lg-12">
                                <input type="text" placeholder="Subject" />
                                    <textarea placeholder="Message"></textarea>
                                    <div className="text-center">
                                        <button className="site-btn">Send</button>
                                    </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>


            <div className="contact-info-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info-box">
                                <img src="/img/logo.jpg" alt="image" style={{height:"90px"}} />
                                    <ul>
                                        <li><span>Address:</span>Main Str, no 23, New York</li>
                                        <li><span>Phone:</span>+546 990221 123</li>
                                        <li><span>Mail:</span><a href="" className="__cf_email__" ></a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=746%20sector%206&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ContactForm;