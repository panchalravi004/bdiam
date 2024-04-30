import React, { useEffect, useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { GridLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:'',
        message:''
    })

    let [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const handleInputChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        console.log('handleFormSubmit ',JSON.stringify(formData));
        const form = new FormData();
        form.append('name', formData['name'])
        form.append('email', formData['email'])
        form.append('phone', formData['phone'])
        form.append('message', formData['message'])
        try {
            setLoading(true);
            const response = await fetch('https://bdiamusa.com/phpmailer.php',{
                method:'POST',
                body:form
            })

            let result = await response.text();
            console.log('handleFormSubmit ',result);
            result = JSON.parse(result);
            console.log('handleFormSubmit ',result);
            if(result['status'] === 'Success'){
                // show toast message
                toast.success(result['message'])
            }else{
                
                toast.warning(result['message'])
            }
            setLoading(false);
            document.querySelectorAll("#name,#phone,#email,#message")
            .forEach(element => {
                element.value = '';
            });
        } catch (error) {
            console.log('handleFormSubmit Error :', error);
            console.log('handleFormSubmit Error :', error.stack);
        }
    }

    return (
        <>
            {
                loading &&
                <div className="d-flex justify-content-center align-items-center" style={{width:"100%",height:"100%", top:"0",background:"#0000004f",zIndex:1000, position:"fixed"}}>
                    <GridLoader size={10} color={"#ffffff"} loading={loading}/>
                </div>
            }
            <ToastContainer/>
            <div className="inner-page">
                <div className="slider-item" style={{ backgroundImage: `url(${require("../assets/images/banner/banner-11.jpg")})` }}>

                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center">
                            <div className="col-md-8 text-center col-sm-12 pt-5">
                                <h1 className="pt-5" style={{textAlign:"start", marginLeft:"unset"}}><span>Contact Us</span></h1>
                                <p className="mb-5 w-75" style={{margin:"unset", textAlign:"start"}}>
                                    We're here to assist you every step of the way. Whether you have inquiries about our products, need assistance with an order, or simply want to share your feedback, our dedicated team is ready to help.
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-12 pt-5"></div>
                        </div>
                    </div>

                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-5 order-2">
                            <form onSubmit={handleFormSubmit} >
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="name">Name</label>
                                        <input onChange={handleInputChange} type="text" id="name" name="name" className="form-control " required />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input onChange={handleInputChange} type="text" id="phone" name="phone" className="form-control " />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="email">Email</label>
                                        <input onChange={handleInputChange} type="email" id="email" name="email" className="form-control " required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="message">Write Message</label>
                                        <textarea onChange={handleInputChange} name="message" id="message" className="form-control " cols="30" rows="8"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="submit" value="Send Message" className="btn px-3 py-3" style={{background:"#033267",color:"white"}} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 order-2 mb-5">
                            <div className="row justify-content-right">
                                <div className="col-md-8 mx-auto contact-form-contact-info">
                                    <p className="d-flex">
                                        <span className="ion-ios-location icon mr-5"></span>
                                        <span>20W, 47th st New york NY, 10036</span>
                                    </p>

                                    <p className="d-flex">
                                        <span className="ion-ios-telephone icon mr-5"></span>
                                        <span>+1(646)691-7344 +1(201)554-5507</span>
                                    </p>

                                    <p className="d-flex">
                                        <span className="ion-android-mail icon mr-5"></span>
                                        <span>info@bdiamusa.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollAnimation animateIn="fadeIn">
                <div className='container mb-4' style={{ height: "400px", borderRadius: '5px' }}>
                    <iframe
                        title="map-1"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.230056685053!2d-73.98231312483058!3d40.75696453486316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe551dddd5%3A0xfd37c59c866f0bf0!2s20%20W%2047th%20St%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sin!4v1713282082162!5m2!1sen!2sin"
                        style={{ border: 0, width: '100%', height: '100%', borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </ScrollAnimation>

            <section className="section " style={{ backgroundImage: `url(${require("../assets/images/banner/banner-9.jpg")})`, backgroundSize:'cover', boxShadow:'inset 0px 0px 300px #000000' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mb-0">Personalized Consultations</h2>
                            <p className="text-white lead">Discover Our Comprehensive Range Of Services, From Custom Jewelry Design To Expert Gemstone Consultations. We’re Dedicated To Ensuring Your Journey With Diamonds Is Seamless And Extraordinary.</p>
                        </div>
                        {/* <div className="col-lg-4 text-lg-right">
                            <a href="/" className="btn btn-outline-white px-4 py-3">Download This Template</a>
                        </div> */}
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default Contact