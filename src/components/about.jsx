import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div class="inner-page">
                <div class="slider-item" style={{ backgroundImage: `url(${require("../assets/images/banner/banner-10.jpg")})` }}>

                    <div class="container">
                        <div class="row slider-text align-items-center justify-content-center">
                            <div class="col-md-8 text-center col-sm-12 pt-5">
                                <h1 class="pt-5"><span>About Us</span></h1>
                                <p class="mb-5 w-75" style={{textAlign:'justify'}}>
                                    At BDIAM, we are more than just a diamond manufacturing company – we are purveyors of timeless elegance and unparalleled craftsmanship. With decades of experience in the industry, we have honed our expertise to deliver diamonds of exceptional quality and beauty to our discerning clientele.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className='container py-2'>
                
                <ScrollAnimation animateIn="fadeIn">
                    <div class="half d-lg-flex d-block my-5">
                        <div class="image" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${require("../assets/images/feature-images/diamond-12.jpg")})` , borderRadius:'15px'}}></div>
                        <div class="text text-center">
                            <h3 class="mb-4">Our Mission</h3>
                            <p class="mb-5" style={{textAlign:'justify'}}>
                                At BDIAM, our mission is simple yet profound – to redefine the standards of excellence in the diamond industry. We are driven by a passion for innovation, a commitment to quality, and a dedication to customer satisfaction.
                                <br/>
                                <br/>
                                Our mission encompasses every aspect of our business, from sourcing ethically and sustainably mined diamonds to employing the latest technological advancements in our manufacturing processes.
                            </p>
                            {/* <p><a href="/" class="btn btn-primary btn-sm px-3 py-2">Learn More</a></p> */}
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn">
                    <div class="half d-lg-flex d-block my-5">
                        <div class="image order-2" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${require("../assets/images/feature-images/diamond-13.jpg")})` , borderRadius:'15px' }}></div>
                        <div class="text text-center">
                            <h3 class="mb-4">Company History</h3>
                            <p class="mb-5" style={{textAlign:'justify'}}>
                                BDIAM's journey began decades ago with a vision to create diamonds of unparalleled beauty and quality. Founded by pioneers in the diamond industry, our company quickly earned a reputation for excellence and innovation.
                                <br/>
                                <br/>
                                From our humble beginnings as a small workshop, we have grown into a global leader in diamond manufacturing, with state-of-the-art facilities and a team of skilled artisans dedicated to perfecting their craft.
                            </p>

                            {/* <p><a href="/" class="btn btn-primary btn-sm px-3 py-2">Learn More</a></p> */}
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
        </>
    )
}

export default About