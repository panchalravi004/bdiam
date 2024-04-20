import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className="inner-page">
                <div className="slider-item" style={{ backgroundImage: `url(${require("../assets/images/banner/banner-15.jpg")})` }}>

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

            <h2 className='text-center text-secondary' style={{marginTop:"150px", fontWeight:"lighter"}}>Discover Your Diamond Journey</h2>
            <h6 className='text-center text-secondary' style={{fontWeight:"lighter"}}>Transforming Visions into Brilliant Realities: Explore Our Services.</h6>
            
            <div className="container" style={{marginTop:"50px", backgroundImage:`url(${require("../assets/images/jewellary/jw-5.jpg")})`, backgroundPosition:"center",height:"300px", borderRadius:"10px"}}></div>

            <div className="container " style={{marginTop:"50px"}}>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <img className='service-card-image' src={require("../assets/images/jewellary/jw-2.jpg")} alt="" />
                        </div>
                        <div className="col-lg-7 col-12">
                            <h3>Elegant Flourishes Craftsmanship Defined</h3>
                            <p>
                                At BDIAM, elegance isn't just a feature; it's the essence of our jewelry. Each piece is meticulously crafted by our skilled artisans, who infuse every design with exquisite details and impeccable craftsmanship. From delicate filigree to intricate engraving, our jewelry reflects the timeless beauty of classical elegance while embracing modern sophistication. 
                                <br/>
                                Explore our collection and discover how our craftsmanship defines elegance in every piece, making each creation a true work of art.
                            </p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mt-5">
                        <div className="col-lg-5 col-12">
                            <img className='service-card-image' src={require("../assets/images/jewellary/jw-3.jpg")} alt="" />
                        </div>
                        <div className="col-lg-7 col-12">
                            <h3>Perfect sizing solutions</h3>
                            <p>
                                Find the perfect fit with BDIAM's sizing solutions. Whether it's resizing a ring to fit just right or customizing the length of a bracelet, our expert craftsmen ensure that every piece is tailored to perfection. Enjoy the comfort and confidence of jewelry that's made just for you.
                                <br/>
                                At BDIAM, we understand that the perfect piece of jewelry is not only about its design but also about how it fits and feels. That's why we offer comprehensive sizing solutions to ensure that your jewelry fits you perfectly. Our expert craftsmen pay meticulous attention to detail, whether it's resizing a ring to fit just right or adjusting the length of a necklace for optimal comfort. 
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
                            <img className='service-card-image' src={require("../assets/images/jewellary/jw-4.jpg")} alt="" />
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="row mt-5">
                        <div className="col-lg-7 col-12">
                            <h3>Enveloping And Fluting</h3>
                            <p>
                                We want to reduce the overhead costs for our customers. So, we give you the option of bagging and fluting where we create sorted batches for you based on your specific requirements. We make sure that you get just what you’re looking for at no extra costs.Streamline your sourcing process with us, where efficiency meets affordability. 
                                <br/>
                                Trust in our dedication to providing solutions that go beyond expectations, making us your preferred partner in every diamond endeavor. we deliver tailored solutions that prioritize your needs. Our bagging and fluting service not only reduces overhead costs but also adds a layer of convenience to your diamond sourcing journey. 
                            </p>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img className='service-card-image' src={require("../assets/images/jewellary/jw-5.jpg")} alt="" />
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            <div className="container mt-5" >
                <Carousel>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover', borderRadius:'10px'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-1.jpg")} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover', borderRadius:'10px'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-2.jpg")} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover', borderRadius:'10px'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-7.jpg")} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover', borderRadius:'10px'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-8.jpg")} alt='First slide' />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Services