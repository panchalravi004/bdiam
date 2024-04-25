import React, { useEffect } from 'react'

function LabCreatedDiamond() {
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
                            <h1 className="pt-5" style={{ textAlign: "start", marginLeft: "unset" }}><span>Lab Created Diamond</span></h1>
                            <p className="mb-5" style={{ margin: "unset", textAlign: "start" }}>
                                Explore the intersection of nature and innovation with our Natural Diamond Lab-created Diamond collection. Meticulously crafted using advanced techniques, these diamonds offer the beauty of nature with the precision of modern science. Discover the perfect synthesis of tradition and innovation in every sparkling gem.
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <img src={require("../assets/images/diamond-lab/dl-5.jpg")} alt="" srcset="" style={{ width: "400px", borderRadius: "15px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2 className='text-center text-secondary' style={{marginTop:"50px", fontWeight:"lighter"}}>Harmony Of Our Diamond Creations</h2>
        <h6 className='text-center text-secondary px-2' style={{fontWeight:"lighter"}}>Delve into the extraordinary world of our Diamond Creations. Explore our collection and experience the unparalleled beauty and brilliance of BDIAM's creations.</h6>
            
        <div className="container mt-5">
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src={require("../assets/images/feature-images/diamond-37.jpg")}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        style={{height:"200px", objectFit:"cover"}}
                    />

                    <img
                        src={require("../assets/images/feature-images/diamond-21.jpg")}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                        style={{height:"400px", objectFit:"cover"}}
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={require("../assets/images/feature-images/diamond-34.jpg")}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                        style={{height:"400px", objectFit:"cover"}}
                    />

                    <img
                        src={require("../assets/images/feature-images/diamond-35.jpg")}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        style={{height:"200px", objectFit:"cover"}}
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src={require("../assets/images/feature-images/diamond-30.jpg")}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                        style={{height:"200px", objectFit:"cover"}}
                    />

                    <img
                        src={require("../assets/images/feature-images/diamond-36.jpg")}
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

export default LabCreatedDiamond