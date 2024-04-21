import React, { useEffect } from 'react'

function DiamondJewellery() {
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
                                <h1 className="pt-5" style={{ textAlign: "start", marginLeft: "unset" }}><span>Diamond Jewellery</span></h1>
                                <p className="mb-5" style={{ margin: "unset", textAlign: "start" }}>
                                    Indulge in the timeless allure of our Diamond Jewellery collection. Each piece is a testament to exquisite craftsmanship, showcasing the brilliance and beauty of carefully selected diamonds. Explore our curated selection and find the perfect adornment to elevate your style and capture hearts.
                                </p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <img src={require("../assets/images/jewellary/jw-13.jpg")} alt="" srcset="" style={{ width: "400px", borderRadius: "15px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='text-center text-secondary' style={{marginTop:"50px", fontWeight:"lighter"}}>Explore Our Diamond Jewellery</h2>
            <h6 className='text-center text-secondary px-2' style={{fontWeight:"lighter"}}>Step into a world of timeless elegance and captivating beauty with our Diamond Jewellery collection.</h6>

            <div className="container mt-5">
                <div class="row">
                    <div class="col-lg-8 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-14.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-16.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-19.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-20.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-1.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-18.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                    <div class="col-lg-8 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-17.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                    <div class="col-12 mb-4 mb-lg-0">
                        <img
                            src={require("../assets/images/jewellary/jw-15.jpg")}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                            style={{height:"300px", objectFit:"cover"}}
                        />
                    </div>
                </div>
            </div>
        </> 
    )
}

export default DiamondJewellery