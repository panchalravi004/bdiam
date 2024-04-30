import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* <div className="inner-page">
                <section className="home-slider owl-carousel .owl-loaded" style={{ display: 'unset' }}>
                    <div className="slider-item" style={{ backgroundImage: `url('${require("../assets/images/banner/banner-1.png")}')` }} >
                        <div className="container">
                            <div className="row slider-text align-items-center justify-content-center">
                                <div className="col-lg-7 text-center col-sm-12 ">
                                    <h1 className="mb-4"><span>Gems of Everlasting Devotion</span></h1>
                                    <p className="mb-1 w-100" >
                                        Welcome to BDIAM, where every diamond tells a story of enduring elegance. Dive into a world of unparalleled craftsmanship and timeless beauty, meticulously curated for those who cherish the epitome of quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}


            <div className="home-inner-page inner-page" style={{margin:"100px 0px", backgroundImage: `url(${require("../assets/images/banner/banner-21.jpg")})`, backgroundRepeat:'no-repeat'}}>
                <div className="container" style={{zIndex:'10', position:'relative'}}>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h1 className="mb-4"><span>Gems of Everlasting Devotion</span></h1>
                            <p className="mb-1 w-100" >
                                Welcome to BDIAM, where every diamond tells a story of enduring elegance. Dive into a world of unparalleled craftsmanship and timeless beauty, meticulously curated for those who cherish the epitome of quality.
                            </p>
                        </div>
                        <div className="col-lg-6 col-12" style={{top:'100px'}}>
                            <video style={{borderRadius:'10px', width:'100%', marginTop:'15px'}} loop={true} autoPlay="autoplay" muted>
                                <source src={require("../assets/videos/diamond.mp4")} type="video/mp4"/>
                            </video>
                        </div>
                        <div className=" home-diamond-shape-container col-lg-6 col-12 d-flex justify-content-center" style={{gap:"0px 50px", flexWrap:'wrap'}}>
                            <img className='home-diamond-shape-image one' src={require("../assets/images/feature-images/diamond-shape.png")} style={{opacity:"0.9", width:"200px"}} alt='' />
                            <img className='home-diamond-shape-image' src={require("../assets/images/feature-images/diamond-shape-2.png")} style={{opacity:"0.9", width:"200px"}} alt='' />
                            <img className='home-diamond-shape-image' src={require("../assets/images/feature-images/diamond-shape-1.png")} style={{opacity:"0.9", width:"200px"}} alt='' />
                        </div>
                    </div>    
                </div>
            </div>

            

            <ScrollAnimation animateIn="fadeIn">
                <div className="container-fluid" style={{background:"whitesmoke", opacity:"0.6"}}>
                    <div className="row p-2" >
                        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                            <img className='home-vector-image' src={require("../assets/images/diamon-vector/diamond-gift.png")} style={{opacity:"0.9"}} alt='' />
                            <span className='font-weight-bold text-center'>Selection of Presents</span>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-center justify-content-center my-5">
                            <img className='home-vector-image' src={require("../assets/images/diamon-vector/diamond.png")} style={{opacity:"0.9"}} alt='' />
                            <span className='font-weight-bold text-center'>Diamond Selections</span>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                            <img className='home-vector-image' src={require("../assets/images/diamon-vector/diamond-ring.png")} style={{opacity:"0.9"}} alt='' />
                            <span className='font-weight-bold text-center'>Customize Your Ring</span>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            <h2 className='text-center text-secondary' style={{marginTop:"50px", fontWeight:"lighter"}}>Welcome to BDIAM's World of Excellence.</h2>
            <h6 className='text-center text-secondary' style={{fontWeight:"lighter"}}>Step into a realm where elegance meets excellence. Where every moment is adorned with brilliance.</h6>
                    
            <div className="container " style={{marginTop:"50px", backgroundImage:`url(${require("../assets/images/jewellary/jw-10.jpg")})`, backgroundPosition:"center",height:"300px", borderRadius:"10px", objectFit:"cover", transform:"scale(0.95)"}}></div>

            <div className="container " style={{marginTop:"100px", padding:"25px"}}>
                <div className="row">
                    <div className="col-lg-3" style={{padding:"0"}}>
                        <img src={require("../assets/images/diamond-lab/dl-3.jpg")} alt="" srcSet="" style={{width:"100%",height:"380px", objectFit:"cover",borderRadius:"10px"}} />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center flex-column" style={{padding:"10px 25px"}}>
                        <h4>Ethical Sourcing Our Commitment to Transparency</h4>
                        <p style={{textAlign:"justify"}}>
                            We take pride in our commitment to transparency and ethical practices. We collaborate closely with our esteemed mining partners to develop customized traceability programs for all our diamonds.
                            <br/>
                            <br/>
                            We work with our mining partners to develop customized traceability programs for all of our diamonds. This allows us to provide our customers with proof of the origin and legal sourcing methods used for the diamond.
                        </p>
                    </div>
                    <div className="col-lg-3" style={{padding:"0"}}>
                        <img src={require("../assets/images/diamond-lab/dl-9.jpg")} alt="" srcSet="" style={{width:"100%",height:"380px", objectFit:"cover",borderRadius:"10px"}} />
                    </div>
                </div>
            </div>

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
                            <div className="col-lg-4 order-lg-2 pt-2">
                                <div className="scaling-image h-100"><div className="frame h-100"><div className="feature-img-bg h-100 rounded" style={{ backgroundImage: `url('${require("../assets/images/jewellary/jw-11.jpg")}')` }}></div></div></div>
                            </div>

                            <div className="col-md-6 col-lg-4 pt-4 feature-1-wrap d-md-flex flex-md-column order-lg-1" >

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

                            <div className="col-md-6 col-lg-4 pt-4 feature-1-wrap d-md-flex flex-md-column order-lg-3" >

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

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-8">
                        <img src={require("../assets/images/diamond-lab/dl-2.jpg")} alt="" srcSet="" style={{width:"100%", borderRadius:"15px"}} />
                    </div>
                    <div className="col-lg-4">
                        <h4>Innovation Hub Unveiling Diamond Science</h4>
                        <p >
                            Discover the heart of diamond innovation at our state-of-the-art Diamond Lab. Through groundbreaking research and cutting-edge technology, we redefine the standards of diamond analysis, ensuring the highest quality and integrity in every gem we offer.
                        </p>
                    </div>
                </div>
            </div>

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

            <section className="section border-t pb-0">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className=" heading mb-4">Redefining the Diamond Experience</h2>
                            <p className="mb-5 lead">Enter a realm of unparalleled brilliance and innovation with Brilliant Dynamics. We are at the forefront of redefining the diamond experience, blending timeless elegance with cutting-edge technology. Our commitment to excellence and dynamic approach ensures that each diamond embodies the epitome of beauty and sophistication. </p>
                        </div>
                    </div>
                </div>
                <ScrollAnimation animateIn="fadeIn">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-md-4 p-3">
                                <a href="/" className="link-thumbnail">
                                    <h3>Dynamic Solitaire</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-4.jpeg")} alt="Diamond" className="img-fluid rounded" />
                                </a>
                            </div>
                            <div className="col-md-4 p-3">
                                <a href="/" className="link-thumbnail">
                                    <h3>Ethereal Halo</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-18.jpg")} alt="Diamond" className="img-fluid rounded" />
                                </a>
                            </div>
                            <div className="col-md-4 p-3">
                                <a href="/" className="link-thumbnail">
                                    <h3>Cascade of Brilliance</h3>
                                    <i className="fa-solid fa-gem icon"></i>
                                    <img src={require("../assets/images/feature-images/diamond-7.jpg")} alt="Diamond" className="img-fluid rounded" />
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