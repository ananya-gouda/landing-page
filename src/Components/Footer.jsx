import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import "../stylesheets/Footer.css"

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="icons">
                <div className="icon"><FaInstagram size={35}/></div>
                <div className="icon"><FaTwitter size={35}/></div>
                <div className="icon"><FaFacebook size={35}/></div>
            </div>
            <div className="content-footer">
                <h2>Copyright &copy; 2021 Onesta. All Rights Reserved. </h2>
            </div>

        </div>
    );
};

export default Footer;