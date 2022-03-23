import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <div className="footerBackgroundColor">
        <div id="footer">
            <div id="footOverview">
            <img alt="" id="headerLogo" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/pencilsketchadjusted-9318928.png" />
                <div className="footerContactInfoAndLogo">
                    <div className="infoItems">Corvus SEO</div>
                    <div className="infoItems">Phone: 206.247.4308</div>
                    <div className="infoItems">Seattle, Washington</div>
                </div>
            </div> 
            <div id="footerMenu">
                <div className="footerMenuSub">
                    <Link id="nav-link-footer" to="/"> Home </Link>
                    <Link id="nav-link-footer" to="/seo"> SEO </Link>
                    <Link id="nav-link-footer" to="/web-design"> Web Design </Link>
                </div>
                <div className="footerMenuSub">
                    {/* <Link id="nav-link-footer" to="/about-us"> About Us </Link> */}
                    <Link id="nav-link-footer" to="/contact-us"> Contact Us </Link>
                    {/* <Link id="nav-link-footer" to="/portfolio"> Portfolio </Link> */}
                </div>
            </div>
            <div id="footerText">
                Corvus SEO has been providing exceptional web development services to it's clients 
                through time tested tactics that adapt with the evolution of search engine techniques.
                Starting with SEO in mind for every website developed, our clients get the most out 
                of their investment when they partner with us to acquire more exposure and increase their
                success. We cater to small and medium sized businesses and we have a perfect track record so far. 
            </div>
          
        </div>
          {/* <div className="footerBottom">
              <div className="line"></div>
          </div>
            Hello */}
          </div>
    )
}

export default Footer;