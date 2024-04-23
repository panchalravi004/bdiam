import React, { useEffect } from 'react'

function NaturalDiamond() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <div className="inner-page">
                <div className='about-heading-image' style={{ backgroundImage: `url(${require("../assets/images/banner/banner-21.jpg")})` }}>
                    <div className="container h-100" style={{ position: "relative", zIndex: "2" }}>
                        <div className="row h-100">
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <h1 className="pt-5" style={{ textAlign: "start", marginLeft: "unset" }}><span>Natural Diamond</span></h1>
                                <p className="mb-5" style={{ margin: "unset", textAlign: "start" }}>
                                    Experience the unparalleled beauty of diamonds created by nature itself with our Natural Diamond collection. Meticulously selected for their quality and brilliance, our diamonds reflect the timeless allure of the Earth's natural wonders. Explore our exquisite selection and discover the perfect diamond to celebrate life's most precious moments.
                                </p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/natural-diamond/nd-1.jpg")} alt="" srcset="" style={{ width: "400px", borderRadius: "15px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='text-center text-secondary' style={{marginTop:"50px", fontWeight:"lighter"}}>Unearthed Elegance Natural Diamond</h2>
            <h6 className='text-center text-secondary px-2' style={{fontWeight:"lighter"}}>Our collection showcases the unparalleled beauty and enduring elegance of these rare treasures, perfect for celebrating life's most cherished moments.</h6>
              
            <div className="container mt-5">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/natural-diamond/nd-2.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                            style={{height:"200px", objectFit:"cover"}}
                        />

                        <img
                            src={require("../assets/images/natural-diamond/nd-3.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            style={{height:"400px", objectFit:"cover"}}
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/natural-diamond/nd-4.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                            style={{height:"400px", objectFit:"cover"}}
                        />

                        <img
                            src={require("../assets/images/natural-diamond/nd-5.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                            style={{height:"200px", objectFit:"cover"}}
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/natural-diamond/nd-6.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                            style={{height:"200px", objectFit:"cover"}}
                        />

                        <img
                            src={require("../assets/images/natural-diamond/nd-7.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                            style={{height:"400px", objectFit:"cover"}}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NaturalDiamond