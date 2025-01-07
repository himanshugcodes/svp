"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import GoogleTranslate from "./GoogleTranslate";

const header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMobileMenu = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className="translate">
        <GoogleTranslate />
      </div>

      <header className="header d-none d-lg-block membership">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-3">
              <Link href="/">
                <Image
                  className="py-2"
                  src="/assets/img/logo.svg"
                  alt="Logo"
                  width={164}
                  height={96}
                />
              </Link>
            </div>
            <div className="col-lg-9 d-flex justify-content-end align-items-center">
              <nav className="navigation">
                <ul>
                  <li>
                    <Link href="">Residential & commercial</Link>
                  </li>
                  <li>
                    <Link href="">Why solar</Link>
                  </li>
                  <li>
                    <Link href="">About SVPL Solar</Link>
                  </li>
                  <li>
                    <Link href="">Support</Link>
                  </li>
                  {/* <li className='btn btn-lg'><Link href="">Book a Consultation</Link></li> */}
                   
                </ul>
              </nav>
              <h4>
                <Link className="btn btn-lg" href="">
                  Book a Consultation
                </Link>
              </h4>
            </div>
            {/* <div className="col-lg-3 d-flex justify-content-end">   
                                <h4><Link className='btn btn-lg' href="">Book a Consultation</Link></h4> 
                    </div> */}
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <header className="mob-header d-lg-none">
        <div className="container">
          <div className="mob-header-box">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/img/logo.png"
                  width={70}
                  height={71}
                  alt="Frisky Panda"
                />
              </Link>
            </div>
            <div className="mob-main-header-right" onClick={toggleMobileMenu}>
              <i>
                <FaBars />
              </i>
            </div>
          </div>
        </div>
        <div className={`mobile-nav__wrapper ${isExpanded ? "expanded" : ""}`}>
          <div className="mobile-nav__overlay" onClick={toggleMobileMenu}></div>
          <div className="mobile-nav__content">
            <div className="mobile-nav-header">
              <div className="logo-box">
                <h4>Menu</h4>
              </div>
              <span className="mobile-nav__close" onClick={toggleMobileMenu}>
                <i>
                  <FaTimes />
                </i>
              </span>
            </div>

            <div className="mobile-nav__container">
              <ul className="main-menu__list">
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Residential & commercial</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">Why solar</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="/">About SVPL Solar</Link>
                </li>
                <li onClick={toggleMobileMenu}>
                  <Link href="" target="_blank">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
