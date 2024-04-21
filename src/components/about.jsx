import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'react-bootstrap/Carousel';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className="inner-page">
                <div className='about-heading-image' style={{ backgroundImage: `url(${require("../assets/images/banner/banner-21.jpg")})`}}>
                    <div className="container h-100" style={{position:"relative",zIndex:"2"}}>
                        <div className="row h-100">
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <h1 className="pt-5" style={{textAlign:"start", marginLeft:"unset"}}><span>About Us</span></h1>
                                <p className="mb-5" style={{margin:"unset", textAlign:"start"}}>
                                    At BDIAM, we are more than just a diamond manufacturing company – we are purveyors of timeless elegance and unparalleled craftsmanship. With decades of experience in the industry.
                                    <br/>
                                    <br/>
                                    Explore Our Extensive Array Of Services, Ranging From Personalized Jewelry Design To Expert Consultations On Exquisite Gemstones. We Are Committed To Ensuring Your Experience With Diamonds Is Not Only Seamless But Truly Extraordinary.
                                </p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/jewellary/jw-12.jpg")} alt="" srcset="" style={{width:"280px", borderRadius:"15px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='container py-2'>
                
                <div className="half d-lg-flex d-block my-5">
                    <div className="image" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${require("../assets/images/feature-images/diamond-12.jpg")})` , borderRadius:'15px'}}></div>
                    <div className="text text-center">
                        <h3 className="mb-4">Our Mission</h3>
                        <p className="mb-5" style={{textAlign:'justify'}}>
                            At BDIAM, our mission is simple yet profound – to redefine the standards of excellence in the diamond industry. We are driven by a passion for innovation, a commitment to quality, and a dedication to customer satisfaction.
                            <br/>
                            <br/>
                            Our mission encompasses every aspect of our business, from sourcing ethically and sustainably mined diamonds to employing the latest technological advancements in our manufacturing processes.
                        </p>
                        {/* <p><a href="/" className="btn btn-primary btn-sm px-3 py-2">Learn More</a></p> */}
                    </div>
                </div>
                
                <ScrollAnimation animateIn="fadeIn">
                    <div className="half d-lg-flex d-block my-5">
                        <div className="image order-2" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${require("../assets/images/feature-images/diamond-13.jpg")})` , borderRadius:'15px' }}></div>
                        <div className="text text-center">
                            <h3 className="mb-4">Company History</h3>
                            <p className="mb-5" style={{textAlign:'justify'}}>
                                BDIAM's journey began decades ago with a vision to create diamonds of unparalleled beauty and quality. Founded by pioneers in the diamond industry, our company quickly earned a reputation for excellence and innovation.
                                <br/>
                                <br/>
                                From our humble beginnings as a small workshop, we have grown into a global leader in diamond manufacturing, with state-of-the-art facilities and a team of skilled artisans dedicated to perfecting their craft.
                            </p>

                            {/* <p><a href="/" className="btn btn-primary btn-sm px-3 py-2">Learn More</a></p> */}
                        </div>
                    </div>
                </ScrollAnimation>

            </section>

            <ScrollAnimation animateIn="fadeIn">
                <section className="section " style={{ backgroundImage: `url(${require("../assets/images/banner/banner-11.jpg")})`, backgroundSize:'cover', boxShadow:'inset 0px 0px 300px #000000' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="text-white mb-0">Illuminating Excellence: Unveiling the BDIAM Story</h2>
                                <p className="text-white lead">
                                    Where brilliance meets tradition and innovation illuminates every facet of our journey. From our roots as a small workshop to our status as a global leader in diamond manufacturing, our story is one of passion, perseverance, and relentless pursuit of excellence. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>

            <div className="container mt-5">
                <img src={require("../assets/images/feature-images/diamond-19.png")} className='col-lg-4 mt-2 col-12' style={{height:'450px', objectFit:'cover', borderRadius:'12px'}} alt="" srcSet="" />
                <img src={require("../assets/images/feature-images/diamond-20.png")} className='col-lg-4 mt-2 col-12' style={{height:'450px', objectFit:'cover', borderRadius:'12px'}} alt="" srcSet="" />
                <img src={require("../assets/images/feature-images/diamond-21.jpg")} className='col-lg-4 mt-2 col-12' style={{height:'450px', objectFit:'cover', borderRadius:'12px'}} alt="" srcSet="" />

                <div className='col-12 d-flex flex-column justify-content-center align-items-center mt-4 '>
                    <h4 style={{color:"#5c5c5c"}}>Our Success Is Measured By Positive Impact.</h4>
                    <p>
                        At BDiam, success is not just measured in carats, but in the brilliance of stories we craft, the trust we earn, and the enduring joy our diamonds bring to life’s most precious moments. It’s a journey where precision meets passion, and each radiant gem becomes a chapter in the stories we help create.
                    </p>
                </div>
            </div>


            <div className="container mt-5" >
                <Carousel>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-1.jpg")} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-2.jpg")} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-7.jpg")} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{height:'350px', objectFit:'cover'}} className="d-block w-100" src={require("../assets/images/jw-slider/jws-8.jpg")} alt='First slide' />
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default About