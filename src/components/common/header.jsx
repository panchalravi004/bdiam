import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header role="banner" className={`${isScrolled ? 'not-scrolled' : ''}`}>
            {/* {`navbar navbar-expand-lg  fixed-top ${isScrolled ? 'navbar-light bg-light not-scrolled' : 'navbar-dark bg-dark scrolled'} `} */}
            {/* "navbar navbar-expand-lg navbar-dark bg-dark" */}
            <nav className={`navbar navbar-expand-lg ${isScrolled ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} `}>
                <div className="container-fluid">
                    <a className="navbar-brand " href="/">
                        <i className="fa-solid fa-gem"></i>
                        &nbsp;BDIAM
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample05">
                        <ul className="navbar-nav pl-md-5 ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                        <div className="navbar-nav ml-auto">
                            {/* <form method="post" className="search-form">
                                <span className="icon ion ion-search"></span>
                                <input type="text" className="form-control" placeholder="Search..."/>
                            </form> */}
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header