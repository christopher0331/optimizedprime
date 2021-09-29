import Menu from './Menu.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div id='header'>
            <Link className="headerName"to="/">
                <div className="headerLogoAndName">
                    <img alt="" id="headerLogo" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/pencilsketchadjusted-9318928.png" />
                    <h1 className="headerName">Corvus SEO</h1>
                </div>
            </Link>
            <Menu />
        </div>
    )
}

export default Header;
