import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className="">
                {/* Header Section */}
                <section className="home-slider owl-carousel .owl-loaded" style={{ display: 'unset' }}>
                    <div className="slider-item" style={{ backgroundImage: `url('${require("../assets/images/banner/banner-1.png")}')` }} >
                        <div className="container">
                            <div className="row slider-text align-items-center justify-content-center">
                                <div className="col-lg-7 text-center col-sm-12 ">
                                    {/* <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div> */}
                                    <h1 className="mb-4"><span>Gems of Everlasting Devotion</span></h1>
                                    <p className="mb-1 w-100" >
                                        Welcome to BDIAM, where every diamond tells a story of enduring elegance. Dive into a world of unparalleled craftsmanship and timeless beauty, meticulously curated for those who cherish the epitome of quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ScrollAnimation animateIn="fadeIn">
                <div class="container-fluid" style={{background:"whitesmoke", opacity:"0.6"}}>
                    <div class="row p-2" >
                        <div class="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <img src={require("../assets/images/diamon-vector/diamond-gift.png")} style={{opacity:"0.9"}} alt='' />
                            <span className='font-weight-bold'>Selection of Presents</span>
                        </div>
                        <div class="col-lg-4 d-flex flex-column align-items-center justify-content-center my-5">
                            <img src={require("../assets/images/diamon-vector/diamond.png")} style={{opacity:"0.9"}} alt='' />
                            <span className='font-weight-bold'>Diamond Selections</span>
                        </div>
                        <div class="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <img src={require("../assets/images/diamon-vector/diamond-ring.png")} style={{opacity:"0.9"}} alt='' />
                            <span className='font-weight-bold'>Customize Your Ring</span>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Problem & Solve */}
            <section className="section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2>Mastering Diamond Challenges</h2>
                        </div>
                    </div>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="row align-items-stretch">
                            <div className="col-lg-4 order-lg-2">
                                <div className="scaling-image h-100"><div className="frame h-100"><div className="feature-img-bg h-100 rounded" style={{ backgroundImage: `url('${require("../assets/images/feature-images/diamond-2.jpg")}')` }}></div></div></div>
                            </div>

                            <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1" >

                                <div className="feature-1 d-md-flex feature-card">
                                    <div className="align-self-center">
                                        <span className="ion ion-easel display-4 text-primary"></span>
                                        <h3>Diamond Innovations</h3>
                                        <p>Explore a world of cutting-edge diamond manufacturing at BDIAM. Our relentless pursuit of innovation ensures every gem sparkles with unrivaled brilliance</p>
                                    </div>
                                </div>

                                <div className="feature-1 d-md-flex feature-card">
                                    <div className="align-self-center">
                                        <span className="ion ion-hammer display-4 text-primary"></span>
                                        <h3>Beyond Perfection</h3>
                                        <p>Step into a realm where perfection is just the beginning. At BDIAM, we redefine excellence with our unparalleled mastery of diamond manufacturing</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3" >

                                <div className="feature-1 d-md-flex feature-card">
                                    <div className="align-self-center">
                                        <span className="ion ion-cube display-4 text-primary"></span>
                                        <h3>Brilliance Unleashed</h3>
                                        <p>Experience the magic of BDIAM, where passion meets precision in every facet. From flawless diamonds to exquisite designs, our dedication to craftsmanship shines through in every masterpiece.</p>
                                    </div>
                                </div>

                                <div className="feature-1 d-md-flex feature-card">
                                    <div className="align-self-center">
                                        <span className="ion ion-clipboard display-4 text-primary"></span>
                                        <h3>Diamond Dreams Realized</h3>
                                        <p>Fulfill your diamond dreams with BDIAM, where imagination meets reality. With our unrivaled expertise and commitment to quality, we bring your vision to life, one dazzling creation at a time.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Service Category */}
            <ScrollAnimation animateIn="fadeIn">
                <section className="section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 ">
                                <div className="media block-6 d-block text-center">
                                    <div className="icon mb-3"><span className="ion-android-notifications text-primary"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading">Precise Pricing</h3>
                                        <p>Dive into the intricacies of diamond pricing with our exploration of Price Per mm.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-lg-4 ">
                                <div className="media block-6 d-block text-center">
                                    <div className="icon mb-3"><span className="ion-heart text-primary"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading">Bespoke Brilliance</h3>
                                        <p>Explore the world of personalized diamond production with our bespoke services.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-lg-4 ">
                                <div className="media block-6 d-block text-center">
                                    <div className="icon mb-3"><span className="ion-flash text-primary"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading">Enveloping And Fluting</h3>
                                        <p>Delve into the artistry of diamond design with our discussion on Enveloping And Fluting.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>

            <section className="section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-7 order-md-2">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="scaling-image"><div className="frame"><img src={require("../assets/images/banner/banner-2.jpg")} alt="Free template by Free-Template.co" className="img-fluid rounded" /></div></div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-5 pr-md-5 mb-5">
                            <div className="block-41">
                                <h2 className="block-41-heading mb-5">The Rise of Ethical Jewelry</h2>
                                <div className="block-41-text">
                                    <p>Embracing a new era of consciousness, the rise of ethical jewelry heralds a transformative shift in the industry. At its core lies a commitment to sustainable sourcing, fair labor practices, and environmental stewardship. With each piece, ethical jewelry not only captures the beauty of nature but also honors the communities and ecosystems from which it originates.</p>
                                    {/* <p><a href="/" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-7 order-md-1">
                            <ScrollAnimation animateIn="fadeIn">
                                <div className="scaling-image"><div className="frame"><img src={require("../assets/images/feature-images/diamond-3.png")} alt="Free template by Free-Template.co" className="img-fluid rounded" /></div></div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-5 pl-md-5 mb-5 order-md-2">
                            <div className="block-41">
                                <h2 className="block-41-heading mb-5">Innovation in Diamond Technology</h2>
                                <div className="block-41-text">
                                    <p>Innovation in Diamond Technology signifies a bold leap forward in the realm of luxury and precision. This groundbreaking advancement integrates cutting-edge technologies with centuries-old craftsmanship, revolutionizing every facet of diamond production and refinement. From state-of-the-art laser cutting techniques to advanced imaging and grading systems, this evolution ensures unparalleled precision, brilliance, and consistency in every diamond.</p>
                                    {/* <p><a href="/" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="section border-t pb-0">
                <div class="container">
                    <div class="row justify-content-center mb-5">
                        <div class="col-md-8 text-center">
                            <h2 class=" heading mb-4">Redefining the Diamond Experience</h2>
                            <p class="mb-5 lead">Enter a realm of unparalleled brilliance and innovation with Brilliant Dynamics. We are at the forefront of redefining the diamond experience, blending timeless elegance with cutting-edge technology. Our commitment to excellence and dynamic approach ensures that each diamond embodies the epitome of beauty and sophistication. </p>
                        </div>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeIn">
                    <div class="container-fluid">
                        <div class="row no-gutters">
                            <div class="col-md-4 p-3">
                                <a href="project-single.html" class="link-thumbnail">
                                    <h3>Dynamic Solitaire</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-4.jpeg")} alt="Diamond" class="img-fluid rounded" />
                                </a>
                            </div>
                            <div class="col-md-4 p-3">
                                <a href="project-single.html" class="link-thumbnail">
                                    <h3>Ethereal Halo</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-18.jpg")} alt="Diamond" class="img-fluid rounded" />
                                </a>
                            </div>
                            <div class="col-md-4 p-3">
                                <a href="project-single.html" class="link-thumbnail">
                                    <h3>Cascade of Brilliance</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-7.jpg")} alt="Diamond" class="img-fluid rounded" />
                                </a>
                            </div>
                            <div class="col-md-4 p-3">
                                <a href="project-single.html" class="link-thumbnail">
                                    <h3>Contemporary Cluster</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-15.jpg")} alt="Diamond" class="img-fluid rounded" />
                                </a>
                            </div>
                            <div class="col-md-4 p-3">
                                <a href="project-single.html" class="link-thumbnail">
                                    <h3>Sculptural Brilliance</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-16.jpg")} alt="Diamond" class="img-fluid rounded" />
                                </a>
                            </div>
                            <div class="col-md-4 p-3">
                                <a href="project-single.html" class="link-thumbnail">
                                    <h3>Fluid Elegance</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-1.jpg")} alt="Diamond" class="img-fluid rounded" />
                                </a>
                            </div>
                        </div>

                    </div>
                </ScrollAnimation>
            </section>

            <ScrollAnimation animateIn="fadeIn">
                <section className="section mt-5" style={{ backgroundImage: `url(${require("../assets/images/banner/banner-12.jpg")})`, backgroundSize:'cover', boxShadow:'inset 0px 0px 300px #000000' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="text-white mb-0">Sparkle Your Story: Discover BDIAM's Brilliance</h2>
                                <p className="text-white lead">
                                    Elevate your moments with the timeless elegance of BDIAM. Explore our exquisite diamond collection and find the perfect expression of your unique story. From engagement rings that symbolize everlasting love to exquisite jewelry pieces that celebrate life's milestones, let BDIAM illuminate your journey with brilliance and beauty.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn">
                <section className="section bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 order-md-1">
                                <ScrollAnimation animateIn="fadeIn">
                                    <div className="scaling-image"><div className="frame"><img src={require("../assets/images/feature-images/diamond-14.jpg")} alt="Free template by Free-Template.co" className="img-fluid rounded" /></div></div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-md-5 pl-md-5 mb-5 order-md-2">
                                <div className="block-41">
                                    <h2 className="mb-5">Diamond Cuts: Unveiling Elegance</h2>
                                    <div className="">
                                        <p>
                                            Explore the artistry of diamond cuts with BDIAM. From classic round brilliants to captivating princess cuts, each diamond shape tells its own unique story. Discover the brilliance and versatility of various cuts, expertly crafted to enhance the natural beauty of every diamond. Let us guide you through the world of diamond cuts and find the perfect shape to complement your style and personality.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </ScrollAnimation>
        </>
    )
}

export default Home