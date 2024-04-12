import React from 'react'

function Home() {
    return (
        <>
            <div class="inner-page">
                {/* Header Section */}
                <section className="home-slider owl-carousel .owl-loaded" style={{ display: 'unset' }}>
                    <div className="slider-item" style={{ backgroundImage: `url('${require("../assets/images/industrial_hero_1.jpg")}')` }} >
                        <div className="container">
                            <div className="row slider-text align-items-center justify-content-center">
                                <div className="col-lg-7 text-center col-sm-12 ">
                                    {/* <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div> */}
                                    <h1 className="mb-4"><span>We Are Industrial Company</span></h1>
                                    <p className="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Problem & Solve */}
            <section className="section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h2>We'll Handle Any Probles and Solve Them</h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        <div className="col-lg-4 order-lg-2">
                            <div className="scaling-image h-100"><div className="frame h-100"><div className="feature-img-bg h-100" style={{ backgroundImage: `url('${require("../assets/images/industrial_feature_1.jpg")}')` }}></div></div></div>
                        </div>

                        <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1" >

                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="ion ion-easel display-4 text-primary"></span>
                                    <h3>Ducting Design</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                                </div>
                            </div>

                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="ion ion-hammer display-4 text-primary"></span>
                                    <h3>Stacks Design</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3" >

                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="ion ion-cube display-4 text-primary"></span>
                                    <h3>Tanks Design</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                                </div>
                            </div>

                            <div className="feature-1 d-md-flex">
                                <div className="align-self-center">
                                    <span className="ion ion-clipboard display-4 text-primary"></span>
                                    <h3>Structural Design</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Service Category */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 ">
                            <div className="media block-6 d-block text-center">
                                <div className="icon mb-3"><span className="ion-android-notifications text-primary"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Modern Design</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="media block-6 d-block text-center">
                                <div className="icon mb-3"><span className="ion-heart text-primary"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Built With Passion</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-4 ">
                            <div className="media block-6 d-block text-center">
                                <div className="icon mb-3"><span className="ion-flash text-primary"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Fast Loading</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-7 order-md-2">
                            <div className="scaling-image"><div className="frame"><img src={require("../assets/images/industrial_featured_img_1.jpg")} alt="Free template by Free-Template.co" className="img-fluid" /></div></div>
                        </div>
                        <div className="col-md-5 pr-md-5 mb-5">
                            <div className="block-41">
                                <h2 className="block-41-heading mb-5">Let's Build Together</h2>
                                <div className="block-41-text">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p><a href="/" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p>
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
                            <div className="scaling-image"><div className="frame"><img src={require("../assets/images/industrial_featured_img_2.jpg")} alt="Free template by Free-Template.co" className="img-fluid" /></div></div>
                        </div>
                        <div className="col-md-5 pl-md-5 mb-5 order-md-2">
                            <div className="block-41">
                                <h2 className="block-41-heading mb-5">We'll handle any intercate custom design</h2>
                                <div className="block-41-text">
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p><a href="/" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p>
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
                            <h2 class=" heading mb-4">Projects</h2>
                            <p class="mb-5 lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row no-gutters">
                        <div class="col-md-4 p-3">
                            <a href="project-single.html" class="link-thumbnail">
                                <h3>Ducting Design in Colorado</h3>
                                <span class="ion-plus icon"></span>
                                <img src={require("../assets/images/industrial_img_1.jpg")} alt="Free template by Free-Template.co" class="img-fluid rounded" />
                            </a>
                        </div>
                        <div class="col-md-4 p-3">
                            <a href="project-single.html" class="link-thumbnail">
                                <h3>Tanks Project In California</h3>
                                <span class="ion-plus icon"></span>
                                <img src={require("../assets/images/industrial_img_2.jpg")} alt="Free template by Free-Template.co" class="img-fluid rounded" />
                            </a>
                        </div>
                        <div class="col-md-4 p-3">
                            <a href="project-single.html" class="link-thumbnail">
                                <h3>Structural Design in New York</h3>
                                <span class="ion-plus icon"></span>
                                <img src={require("../assets/images/industrial_img_3.jpg")} alt="Free template by Free-Template.co" class="img-fluid rounded" />
                            </a>
                        </div>
                        <div class="col-md-4 p-3">
                            <a href="project-single.html" class="link-thumbnail">
                                <h3>Stacks Design</h3>
                                <span class="ion-plus icon"></span>
                                <img src={require("../assets/images/industrial_img_4.jpg")} alt="Free template by Free-Template.co" class="img-fluid rounded" />
                            </a>
                        </div>
                        <div class="col-md-4 p-3">
                            <a href="project-single.html" class="link-thumbnail">
                                <h3>Intercate Custom</h3>
                                <span class="ion-plus icon"></span>
                                <img src={require("../assets/images/industrial_img_5.jpg")} alt="Free template by Free-Template.co" class="img-fluid rounded" />
                            </a>
                        </div>
                        <div class="col-md-4 p-3">
                            <a href="project-single.html" class="link-thumbnail">
                                <h3>Banker Design</h3>
                                <span class="ion-plus icon"></span>
                                <img src={require("../assets/images/industrial_img_6.jpg")} alt="Free template by Free-Template.co" class="img-fluid rounded" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home