import React from 'react'

function Contact() {
    return (
        <>
            <div class="inner-page">
                <div className="slider-item" style={{ backgroundImage: `url(${require("../assets/images/industrial_hero_3.jpg")})` }}>

                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center">
                            <div className="col-md-8 text-center col-sm-12 pt-5">
                                <h1 className="pt-5"><span>Contact Us</span></h1>
                                <p className="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id possimus rerum dolorem consectetur? Repellat, velit.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 order-2">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" className="form-control " />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label for="phone">Phone</label>
                                        <input type="text" id="phone" className="form-control " />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" className="form-control " />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label for="message">Write Message</label>
                                        <textarea name="message" id="message" className="form-control " cols="30" rows="8"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="submit" value="Send Message" className="btn btn-primary px-3 py-3" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 order-2 mb-5">
                            <div className="row justify-content-right">
                                <div className="col-md-8 mx-auto contact-form-contact-info">
                                    <p className="d-flex">
                                        <span className="ion-ios-location icon mr-5"></span>
                                        <span>34 Street Name, City Name Here, United States</span>
                                    </p>

                                    <p className="d-flex">
                                        <span className="ion-ios-telephone icon mr-5"></span>
                                        <span>+1 242 4942 290</span>
                                    </p>

                                    <p className="d-flex">
                                        <span className="ion-android-mail icon mr-5"></span>
                                        <span>info@yourdomain.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-0">Get Started With Industrial Free Template</h2>
                            <p className="text-white lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. .</p>
                        </div>
                        <div className="col-lg-4 text-lg-right">
                            <a href="/" className="btn btn-outline-white px-4 py-3">Download This Template</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className='container my-4' style={{ height: "400px", borderRadius: '5px' }}>
                <iframe
                    title="map-1"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4298819448836!2d72.60311062452872!3d23.00798312018827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c5f056745d%3A0xcfe5c6932fd679fa!2sKamla%20Nehru%20Zoo!5e0!3m2!1sen!2sin!4v1712853548264!5m2!1sen!2sin"
                    style={{ border: 0, width: '100%', height: '100%', borderRadius: '10px' }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default Contact