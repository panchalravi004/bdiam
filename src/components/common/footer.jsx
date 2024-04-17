import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
    const [year, setCount] = useState(0);

    useEffect(() => {
        var dt = new Date();
        setCount((year) => dt.getFullYear());
    }, []);

    return (
        <footer className="site-footer" role="contentinfo">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4 mb-5">
                        <h3>Retailers Preferred Choice Across The Globe</h3>
                        <p className="mb-5">
                            Our Company is highly regraded as the preferred
                            choice of renowned jewelers & manufacturers around 
                            the world as a result of the excellency portrayed in our work.
                        </p>
                        <ul className="list-unstyled footer-link d-flex footer-social">
                            <li><a href="/" className="p-2"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="/" className="p-2"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="/" className="p-2"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="/" className="p-2"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>

                    </div>
                    <div className="col-md-5 mb-5 pl-md-5">
                        <h3>Contact Info</h3>
                        <ul className="list-unstyled footer-link">
                            <li className="d-block">
                                <span className="d-block">Address:</span>
                                <span >20W, 47th st New york NY, 10036</span></li>
                            <li className="d-block"><span className="d-block">Telephone:</span><span >+1(646)691-7344 +1(201)554-5507</span></li>
                            <li className="d-block"><span className="d-block">Email:</span><span >info@bdiamusa.com</span></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled footer-link">
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-md-center text-left">
                        <p className="copyright">
                            Copyright &copy;{year} <b>B DIAM</b> | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer