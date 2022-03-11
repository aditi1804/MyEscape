import React, { useState } from "react";
import "./navbar.css";
import {
  FaSpotify,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>diti
            <span>M</span>orya
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">BackStories</NavLink>
            </li>
           
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.instagram.com/morya_aditi/"
                target="_aditi">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/AditiMorya"
                target="_aditi">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/0cnlgs9pOiVLpc0zeVP6bI?si=-RgamcjhTmWKdsuEzUzrww&utm_source=whatsapp&dl_branch=1"
                target="_aditi">
                <FaSpotify className="spotify" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default Navbar;
