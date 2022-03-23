import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';

const WebDesign = () => {
    return(
        <div className="web-design">
            <div className="web-design-hero">
                <div className="hero-text">
                    Make A Statement
                </div>
                <div className="hero-sub-text">
                    Modern Web Design Services Developed to Grow Your Business            
                </div>   
            </div>
            <div className="call-to-action">
            <FontAwesomeIcon icon={faPhone} size="3x"/>
                <div className="call-to-action-text">
                   <div className="call-to-action-specific1">Harness the Power of Google!</div>
                   
                   <div className="call-to-action-specific">We Bring the Power of SEO to You!</div>
                </div>
                <div className="call-to-action-number">
                    206-247-4308
                    <div style={{fontSize: '20px', fontWeight: "400"}}>or</div>
                    <Link className="call-to-action-button" to='contact-us'> Free Consultation </Link>
                </div>
            </div>
            <div className="title-and-text">
                    <h2>Web Design Services</h2>
                    <p>
                        Web Design with your customer in mind. Modern web design is more involved than 
                        creating an attractive website. Consideration of user experience, search engine
                        optimization, ease of use, and technical details are just a few elements that 
                        are involved in developing a website that is designed to perform in today’s 
                        competitive marketplace.
                        <br/>
                        <br />
                        Our web design & development team has established a host of effective services 
                        to facilitate the growth of your business. These include WordPress websites and 
                        eCommerce solutions focused on usability and responsive design, creative 
                        branding solutions that inject personality into your business, and custom programming 
                        for ideas that you need help bringing to fruition.
                        <br/>
                        <br />
                        Whether you’re in need of a simple WordPress website to get your business online,
                        or a more complicated eCommerce website, our web development team will help bring 
                        your vision to life.
                    </p>
                </div>
                <div>
                    <div className="left">
                        <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/wordpress-logo.svg"></img>
                        <div className="webDesignInfoBoxes">
                            <h1 className="webDesignTitle">WordPress Development</h1>
                            <p className="webDesignInfoBoxText">
                                The easy-to-use, search engine friendly, flexible development platform 
                                is currently used on over 35% of all websites. WordPress provides a 
                                user friendly content management system (CMS), that allows you to 
                                easily make changes on the fly.
                            </p>
                            <div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Easy to edit
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Search engine friendly
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Highly customizable
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Most popular CMS in the world
                                </div>      
                            </div>
                            <Link className="webDesignButton" to='contact-us'> Get Started </Link>
                        </div>
                        
                    </div>
                    
                    <div className="right">
                        <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/responsive-design.svg"></img>
                        <div className="webDesignInfoBoxes">
                            <h1 className="webDesignTitle">Responsive Web Design</h1>
                            <p className="webDesignInfoBoxText">
                                With over 50% of all web traffic coming from a mobile device, creating a 
                                mobile-friendly website is no longer an option—it’s a necessity. It all 
                                starts with responsive web design.
                                <br />
                                <br />
                                Responsive web design allows your website to adapt to and provide an optimal 
                                experience on any device it’s being viewed from. This means that your 
                                website will look great and function flawlessly for a user on a desktop 
                                computer, laptop, tablet, or smartphone.
                                <br />
                                <br />
                                Every website developed by Mainstreethost utilizes responsive web design, 
                                adapting perfectly to each device users are accessing it from.
                            </p>
                            <div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Mobile-friendly
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Design for every device
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Positive UX
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Helps SEO
                                </div>      
                            </div>
                            <Link className="webDesignButton" to='contact-us'> Get Started </Link>
                        </div>
                    </div>
                    <div className="left">
                        <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/hosting-servers.svg"></img>
                        <div className="webDesignInfoBoxes">
                            <h1 className="webDesignTitle">Website Hosting</h1>
                            <p className="webDesignInfoBoxText">
                            Our managed hosting services offer a flexible, low-cost web hosting solution 
                            tailored for your business. As your provider, we’ll take care of all daily 
                            hosting operations: software updates, server management, email hosting, and 
                            support—our team has you covered.
                            <br />
                            <br />
                            Whether you’re a large eCommerce shop, or a small local business, our managed 
                            hosting provides security and expertise, while giving you the confidence of 
                            knowing that your website is being professionally managed. 
                            <br />
                            <br />
                            And by consistently monitoring our systems and software, we can ensure 
                            the safety of your website and the security of your data:
                            </p>
                            <div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    99% uptime
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Daily backups
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Safeguarded data center
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Shared & dedicated server solutions
                                </div>      
                            </div>
                            <Link className="webDesignButton" to='contact-us'> Get Started </Link>
                        </div>
                    </div>
                    <div className="right">
                        <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/pen-cup.svg"></img>
                        <div className="webDesignInfoBoxes">
                            <h1 className="webDesignTitle">Graphic Design</h1>
                            <p className="webDesignInfoBoxText">
                                Your brand brought to life. Our professional graphic designers have the 
                                creative capabilities to take your company’s personality and translate 
                                it to visual design.
                                <br />
                                <br />
                                With careful consideration of color schemes, typography, and essential 
                                design principles, our team will work with you every step of the way 
                                toward the creation of impressive and affordable graphics that you’ll 
                                be proud to have representing your brand.
                            </p>
                            <div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Logo design
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Infographics
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Business card design
                                </div>
                                <div className="webDesignIconAndText">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Ebook creation
                                </div>      
                            </div>
                            <Link className="webDesignButton" to='contact-us'> Get Started </Link>
                        </div>
                    </div>
                </div>
                <div className="call-to-action">
            <FontAwesomeIcon icon={faPhone} size="3x"/>
                <div className="call-to-action-text">
                   <div className="call-to-action-specific1">Harness the Power of Google!</div>
                   
                   <div className="call-to-action-specific">We Bring the Power of SEO to You!</div>
                </div>
                <div className="call-to-action-number">
                    206-247-4308
                    <div style={{fontSize: '20px', fontWeight: "400"}}>or</div>
                    <Link className="call-to-action-button" to='contact-us'> Free Consultation </Link>
                </div>
            </div>
            <div className="title-and-text">
                    <h2>Results-Driven Website Solutions</h2>
                    <p>
                    Your website is a lot of things. It’s a powerful tool for your online presence; 
                    it’s a first impression made with a new visitor; it’s an opportunity to prove your 
                    value and stand out from the rest.
                    <br/>
                    <br />
                    That’s why it’s so important that you invest in the right team to bring your vision
                    to fruition
                    <br/>
                    <br />
                    With Mainstreethost, web design is made simple. Our experienced team utilizes 
                    strategic website solutions backed by modern SEO techniques to create a strong 
                    online platform for your business.
                    <br/>
                    <br />
                    Drive leads, gain conversions and grow your business with web design services that 
                    deliver results.
                    </p>
                </div>
        </div>
    )
}

export default WebDesign;