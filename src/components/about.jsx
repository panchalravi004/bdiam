import React from 'react'

function About() {
    return (
        <>
            <div class="inner-page">
                <div class="slider-item" style={{ backgroundImage: `url(${require("../assets/images/industrial_hero_3.jpg")})` }}>

                    <div class="container">
                        <div class="row slider-text align-items-center justify-content-center">
                            <div class="col-md-8 text-center col-sm-12 pt-5">
                                <h1 class="pt-5"><span>About Us</span></h1>
                                <p class="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sit, saepe? Rem, libero repellendus eum.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section className='container py-2'>
                <div class="half d-lg-flex d-block">
                    <div class="image" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${require("../assets/images/industrial_hero_1.jpg")})` }}></div>
                    <div class="text text-center">
                        <h3 class="mb-4">Our Mission</h3>
                        <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p><a href="/" class="btn btn-primary btn-sm px-3 py-2">Learn More</a></p>
                    </div>
                </div>

                <div class="half d-lg-flex d-block">
                    <div class="image order-2" data-animate-effect="fadeIn" style={{ backgroundImage: `url(${require("../assets/images/industrial_hero_2.jpg")})` }}></div>
                    <div class="text text-center">
                        <h3 class="mb-4">Company History</h3>
                        <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                        <p><a href="/" class="btn btn-primary btn-sm px-3 py-2">Learn More</a></p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About