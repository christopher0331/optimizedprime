import { Component } from 'react'; 
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return(
            <div id="menu">
                <nav className="mr-auto">
                    <Link id="nav-link" to="/"> Home </Link>
                    <Link id="nav-link" to="/seo"> SEO </Link>
                    <Link id="nav-link" to="/web-design"> Web Design </Link>
                    {/* <Link id="nav-link" to="/about-us"> About Us </Link> */}
                    <Link id="nav-link" to="/contact-us"> Contact Us </Link>
                    {/* <Link id="nav-link" to="/portfolio"> Portfolio </Link> */}
                </nav>
            </div>
        )
    }
}

export default Menu;