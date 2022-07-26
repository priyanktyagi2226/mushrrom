const About = () => {
    return (
        <>
            <section className="about-secton">
                <div className="container">
                    <img src="/img/mushroom.png" className="about-img" alt="image" />
                        <div className="row">
                            <div className="col-lg-7 about-text">
                                <h2>Nature alone is antique, and the oldest art a mushroom</h2>
                                <p>Mushrooms are miniature pharmaceutical factories, and of the thousands of mushroom species in nature, our ancestors and modern scientists have identified several dozen that have a unique combination of talents that improve our health.</p>
                                <img src="/img/sign.webp" alt="image" />
                            </div>
                        </div>
                </div>
                <div className="about-img-box-warp">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 p-0">
                                <div className="about-img-box">
                                    <img src="/img/mush7.jpg" alt="image" />
                                </div>
                            </div>
                            <div className="col-lg-6  d-lg-flex align-items-center p-0">
                                <div className="about-text-box-warp">
                                    <div className="about-text">
                                        <h2>Mushroom has high protein.</h2>
                                        <p>It takes approximately 15 weeks to complete an entire production cycle, from the start of composting to the final steaming off after harvesting has ended. For this work a mushroom grower can expect anywhere from 0 to 4 lbs. per square foot; the national average for 1980 was 3.12 lbs. per square foot. Final yield depends on how well a grower has monitored and controlled the temperature, humidity, pests, and so on.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;