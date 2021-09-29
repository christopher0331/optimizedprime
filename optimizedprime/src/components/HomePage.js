import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return(
        <div className="homepage">
            <div className="homepage-hero">
                <div className="hero-text">
                    Simple. Affordable. Flexible.
                </div>
                <div className="hero-sub-text">
                    Truly Flexible Digital Marketing Services for Every Budget
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
            <div className="homepage-information">
                <div className="title-and-text">
                    <h2>Takes SEO – And So Much More</h2>
                    <p>
                        At Corvus SEO, we’ve spent decades optimizing the online world, 
                        helping businesses large and small with their digital marketing efforts and 
                        search engine optimization services. 
                        <br/>
                        <br />
                        We’ve seen players come and go, techniques 
                        succeed and fail, and mediums adapt and grow. We have an incredible depth of 
                        understanding and knowledge of how to make your business and your brand succeed.
                        We’ve worked with dozens of companies, individuals, nonprofits and other 
                        organizations since 2010, giving us an in depth level of knowledge across a 
                        diverse range of industries and markets. 
                        <br/>
                        <br />
                        We can learn your story and tell it in 
                        a way that current and prospective customers will find exciting, engaging and enticing.
                        Backed by a diverse team of experts in SEO, content, social media, web 
                        development, design and more, we understand that success online is much more than 
                        just SEO. So let’s get to work, and together, we will map out your road to success.
                    </p>
                </div>
                <div className="title-and-text">
                    <h2>Affordable Digital Marketing Services</h2>
                    <p>
                        Your business is unique and has distinct goals. That’s why we carry a vast arsenal 
                        of digital marketing solutions to help you achieve those goals. Is it quality website 
                        traffic you seek? With our content marketing and SEO services, we’ll attract the right 
                        kind of visitors you want frequenting your website. 
                        <br/><br/>
                        Perhaps you need a new website? 
                        Searching tirelessly for an agency capable of generating qualified leads? Sounds 
                        like PPC management may be just what you need! Let us put our knowledge and experience 
                        to work for you with a focused digital marketing strategy tailored for your business.
                    </p>
                </div>
       
            </div>
            <div className="get-to-know-us-container">
                    <div className="get-to-know-us">
                        <h3 id="get-to-know-us-title">Get to Know Us</h3>
                        <h5 id="get-to-know-us-text">Our Development Team</h5>
                        <p>
                            Our talented team of marketing professionals includes experts in not only a wide variety 
                            of fields, but also a diverse range of passions. 
                            <br/><br/>
                             We work hard and we play hard, rooting 
                            for our Seattle sports teams (sometimes a tough job on its own), shoveling our snowy 
                            driveways in the winter and delighting in all our Pacific Northwest has to offer in the summer 
                            season. 
                            <br/><br/>
                            Our ranks include jocks and nerds, artists, writers, innovators and imagineers, 
                            all working together toward the same end goal: our clients’ success. And we’re always 
                            looking for new talents to join the team, too!
                        </p>
                        <Link id="about-us-button-homepage" to='about-us'> Meet The Team </Link>
                    </div>
                    <img alt="our homescreen logo"id="home-screen-getToKnowUs" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/pencilsketchadjusted-3014772.png" />
                </div>
                <div>
                    <h2 className="largeHomePageText">
                        Don't Just Take Our Word For It!
                    </h2>
                    <div className="allClients">
                        <div className="clientsContainer">
                            <p className="clientsInfo">
                                <img alt="" className="clientsLogo"  src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/tBlue_Logo.png"/>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Traffic by 105%
                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Sold Franchises
                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Leads
                                </div>
                            </p>
                        </div>
                        <div className="clientsContainer">
                            <p className="clientsInfo">
                                <img alt="" style={{backgroundColor: "black" }}className="clientsLogo" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/clearGVSLogo_300.webp"/>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Built New Website
                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Mobile Traffic by 305%

                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Sales By 900%
                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Overall Traffic by 450%
                                </div>
                            </p>
                        </div>
                        <div className="clientsContainer">
                            <p className="clientsInfo">
                                <img alt="" className="clientsLogo" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/IE.png"/>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Built New Website
                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Overall Traffic by 155%

                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Leads
                                </div>
                                <div className="clientsIconAndInfo">
                                    <FontAwesomeIcon className="icon" icon={faCheck} color="lightgreen"/>
                                    Increased Mobile Traffic by 125%
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HomePage;