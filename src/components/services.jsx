import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className="inner-page">
                <div className="slider-item" style={{ backgroundImage: `url(${require("../assets/images/slider/slider-9.png")})` }}>

                    <div className="container" style={{position:'relative'}}>
                        <div className="row slider-text align-items-center justify-content-center">
                            <div className="col-md-8 text-center col-sm-12 pt-5">
                                <h1 className="pt-5" style={{textAlign:"start", marginLeft:"unset"}}><span>Our Services</span></h1>
                                <p className="mb-5 w-75" style={{margin:"unset", textAlign:"start"}}>
                                    Discover Our Comprehensive Range Of Services, From Custom Jewelry Design To Expert Gemstone Consultations. We’re Dedicated To Ensuring Your Journey With Diamonds Is Seamless And Extraordinary.
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-12 pt-5"></div>
                        </div>
                        <img className='service-slide-over-image' src={require("../assets/images/feature-images/diamond-22.jpg")} alt=""  />
                    </div>

                </div>
            </div>
            <div className="container" style={{marginTop:"200px"}}>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <img className='service-card-image' src={require("../assets/images/feature-images/diamond-24.jpg")} alt="" />
                        </div>
                        <div className="col-lg-7 col-12">
                            <h3>Persistent Assortment</h3>
                            <p>
                                If you buy certified diamonds in bulk for your jewelry, you need to have a consistent grade. We ensure that all our diamonds are first carefully selected for size, color, clarity, dimension and carat and then packaged. Additionally, our in-house manufacturing facility allows us to ensure regular supply. So when you place an order with us, you can sit back and relax and leave the rest to us.Experience the ease of a reliable supply chain and the confidence that comes with consistently curated assortments.Elevate your jewelry creations with our commitment to precision and a seamless, reliable supply chain.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mt-5">
                        <div className="col-lg-5 col-12">
                            <img className='service-card-image' src={require("../assets/images/feature-images/payment.jpg")} alt="" />
                        </div>
                        <div className="col-lg-7 col-12">
                            <h3>Simplified Payment Solutions</h3>
                            <p>
                                We not only offer cost-effective certified diamonds but also endeavor to ensure a seamless purchasing process for you. Upon verification of your references, we collaborate with you to establish a tailored payment plan that aligns with your requirements. Whether it’s defining terms or setting up a long-term memo program, we are dedicated to finding solutions that work for you. Our mantra remains: your success is our success. Enhance your buying experience with our focus on affordability and personalized payment options. Enjoy the simplicity of acquiring top-notch diamonds while retaining financial flexibility. 
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            <ScrollAnimation animateIn="fadeIn">
                <section className="section mt-5" style={{ backgroundImage: `url(${require("../assets/images/banner/banner-14.jpg")})`, backgroundSize:'cover', boxShadow:'inset 0px 0px 300px #000000' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="text-white mb-0">Brilliance Beyond Compare: Unveiling BDIAM's Exclusive Services</h2>
                                <p className="text-white lead">
                                    Step into a world of unparalleled service excellence with BDIAM. From personalized consultations to bespoke designs, our dedicated team is committed to providing you with an extraordinary diamond experience. Discover the difference with BDIAM's exclusive services, where your satisfaction is our highest priority.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>
            
            <div className="container" style={{marginTop:"50px"}}>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mt-5">
                        <div className="col-lg-7 col-12">
                            <h3>Eternal Supply</h3>
                            <p>
                                Embark on a journey of uninterrupted brilliance with BDIAM's seamless services. Our commitment to excellence ensures a continuous supply of exquisite diamonds, tailored to meet your every need. Experience the convenience and reliability of BDIAM's unparalleled service, where quality and consistency are always guaranteed. 
                                <br/>
                                At BDIAM, we understand the importance of a steady and reliable supply of diamonds for your business. Our continuous supply services are designed to ensure that you never have to worry about disruptions in your operations.
                            </p>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img className='service-card-image' src={require("../assets/images/feature-images/diamond-23.jpg")} alt="" />
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mt-5">
                        <div className="col-lg-7 col-12">
                            <h3>Personal Production</h3>
                            <p>
                                Personal Production at BDIAM offers a bespoke experience like no other. From concept to creation, our expert craftsmen work closely with you to bring your vision to life, ensuring that every detail reflects your unique style and personality. Whether you're designing a custom engagement ring or a one-of-a-kind jewelry piece, our personalized approach ensures that your creation is as extraordinary as you are. Experience the luxury of personalized service and unparalleled craftsmanship with BDIAM's Personal Production.
                            </p>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img className='service-card-image' src={require("../assets/images/feature-images/diamond-25.jpg")} alt="" />
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </>
    )
}

export default Services