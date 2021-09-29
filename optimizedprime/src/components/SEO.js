import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCheck, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import React, { lazy } from 'react';

const PercentageBars = lazy(() => import('./PercentageBars.js'));

const SEO = () => {
    return(
        <div className="seo">
            <div className="seo-hero">
                <div className="hero-text">
                    A Fresh Approach to Modern SEO Services            
                </div>
                <div className="hero-sub-text">
                    Custom SEO services designed for success in 2021            
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
                    <h2>So, Why is SEO Still So Important?</h2>
                    <p>
                    Most internet users begin their session by searching for something—that something is a need. 
                    People use the internet to fulfill their need for information, whether it’s settling a bet on 
                    who the 14th president was (Franklin Pierce, by the way) or finding a local restaurant, perfect 
                    piece of clothing, or the ideal contractor for a home remodel. 
                    <br/>
                    <br />
                    Search engine optimization (SEO) 
                    is the process of helping your customers connect with your business online. Our team uses modern 
                    SEO services, backed by the best digital practices, to increase your traffic & rankings for 
                    vetted keywords and long-tail phrases that drive business to your site.
                    </p>
                </div>
                <div className="title-and-text">
                    <h2>How Does SEO Work?</h2>
                    <p>
                        It all starts with the search engines (like Google). Every search engine sends out crawlers to 
                        gather all the content and information they can from across the internet in order to build an 
                        index. When a query comes through, the search engine’s algorithm sifts through that index in 
                        order to provide the most important and relevant information in the search results, commonly 
                        know as the search engine rankings.
                    <br/>
                    <br />
                        And that’s where SEO comes in. Optimization allows us to help search engines understand what’s 
                        on your website, the value your business has to offer, and how you connect to relevant keywords. 
                        It’s the foundation that drives organic traffic to your website and strengthens every aspect 
                        of your digital marketing strategy.
                    <br/>
                    <br />
                        But major search engines are constantly evolving their algorithms and strategies to meet rising 
                        user demands. That’s why it’s essential to maintain a sustainable optimization strategy that 
                        is continuously working for you and your business.
                    </p>
                </div>
                <div className="title-and-text">
                    <h2>Growing Your Business with SEO</h2>
                    <p>
                        3.5 billion searches are made everyday on Google alone, and with so many competing for top spots in 
                        the search results, gaining visibility is key. But it’s through expert keyword research and SEO 
                        refinement that your business will earn the visibility it deserves to effectively add 
                        to your bottom line.
                        <br/>
                        <br />
                        By partnering with an SEO provider, you have a full team of experts working toward your digital 
                        success. So whatever your goal is—driving traffic, generating leads, maximizing sales, 
                        increasing brand awareness—we’ve got you covered. You could say our SEO strategies are optimized 
                        for success.😉
                        <br/>
                        <br />
                    </p>
                </div>
                
            </div>
            <div className="percentageBarInfo">
                <h2 className="percentageBarInfoTitle">60,000+ Searches Happen Each Second</h2>
                <p className="percentageBarInfoText">
                    In 2021, SEO is not about ranking for popular terms; it’s about being found when it matters 
                    most. Our skilled search engine optimization experts carefully research the right keywords for 
                    your business, ensuring you are gaining qualified traffic that converts to your bottom line.
                </p>
                <PercentageBars />
            </div>
          
            <div className="title-and-text">
                    <h2>Affordable SEO Packages</h2>    
                    <p className="packagesOverviewText">
                        At Mainstreethost, we offer a variety of SEO services to help your business grow. 
                        Our flexible SEO packages are focused on building a strong foundation for your online 
                        success, offering countless ways to reach your target customers—wherever they are 
                        searching. When working with us as your SEO service provider, you can choose which 
                        SEO plan is right for your business and digital marketing objectives. Our 
                        comprehensive SEO services work to fit any need and budget–from basic SEO campaigns all 
                        the way up to advanced custom SEO strategies designed to maximize your online presence. 
                        Explore our affordable SEO services and packages below and find out how we can help 
                        grow your business through search engine optimization.
                    </p>
                    <div className="packagesContainer">
                        <div className="packageTopAndBottomHolder">
                            <div className="seoPackageTop">
                                <div className="searchIconCircle">
                                    <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/greenSearchCircle.svg"></img>
                                </div>
                                <div className="packagesTitle">
                                    <div id="seoPackageTitle1">SEO</div> 
                                    <div id="seoPackageTitle2">Essentials</div>
                                </div>
                                
                                <p className="packagesText">
                                    A flexible, low-risk solution for seo growth - 
                                    perfect for small businesses & start-ups
                                </p>
                            </div>
                            <div className="seoPackageBottom">
                                <div className="seoPackageBottomRow1">starting at</div>
                                <div className="seoPackageBottomRow2Container">
                                    <div className="seoPackageBottomRow2-1">$99</div>
                                    <div className="seoPackageBottomRow2-2">/mo</div>
                                </div>
                                <Link className="seoPackageBottomButton" to='contact-us'> Get Started </Link>
                            </div>
                        </div>

                        <div>
                        <div className="packageTopAndBottomHolder">
                            <div className="seoPackageTop">
                                <div className="searchIconCircle">
                                    <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/greenSearchCircle.svg"></img>
                                </div>
                                <div className="packagesTitle">
                                    <div id="seoPackageTitle1">SEO</div> 
                                    <div id="seoPackageTitle2">Standard</div>
                                </div>
                                
                                <p className="packagesText">
                                    A flexible, low-risk solution for seo growth - 
                                    perfect for small businesses & start-ups
                                </p>
                            </div>
                            <div className="seoPackageBottom">
                                <div className="seoPackageBottomRow1">starting at</div>
                                <div className="seoPackageBottomRow2Container">
                                    <div className="seoPackageBottomRow2-1">$499</div>
                                    <div className="seoPackageBottomRow2-2">/mo</div>
                                </div>
                                <Link className="seoPackageBottomButton" to='contact-us'> Get Started </Link>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="packageTopAndBottomHolder">
                            <div className="seoPackageTop">
                                <div className="searchIconCircle">
                                    <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/greenSearchCircle.svg"></img>
                                </div>
                                <div className="packagesTitle">
                                    <div id="seoPackageTitle1">SEO</div> 
                                    <div id="seoPackageTitle2">Premium</div>
                                </div>
                                
                                <p className="packagesText">
                                    A flexible, low-risk solution for seo growth - 
                                    perfect for small businesses & start-ups
                                </p>
                            </div>
                            <div className="seoPackageBottom">
                                <div className="seoPackageBottomRow1">starting at</div>
                                <div className="seoPackageBottomRow2Container">
                                    <div className="seoPackageBottomRow2-1">$999</div>
                                    <div className="seoPackageBottomRow2-2">/mo</div>
                                </div>
                                <Link className="seoPackageBottomButton" to='contact-us'> Get Started </Link>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="packageTopAndBottomHolder">
                            <div className="seoPackageTop">
                                <div className="searchIconCircle">
                                    <img alt="" src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/op/greenSearchCircle.svg"></img>
                                </div>
                                <div className="packagesTitle">
                                    <div id="seoPackageTitle1">SEO</div> 
                                    <div id="seoPackageTitle2">Custom</div>
                                </div>
                                
                                <p className="packagesText">
                                    A flexible, low-risk solution for seo growth - 
                                    perfect for small businesses & start-ups
                                </p>
                            </div>
                            <div className="seoPackageBottom">
                                <div className="seoPackageBottomRow1">starting at</div>
                                <div className="seoPackageBottomRow2Container">
                                    <div className="seoPackageBottomRow2-1">$1599</div>
                                    <div className="seoPackageBottomRow2-2">/mo</div>
                                </div>
                                <Link className="seoPackageBottomButton" to='contact-us'> Get Started </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
 
export default SEO;