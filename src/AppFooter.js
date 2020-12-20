import React, { Component } from 'react';

class AppFooter extends Component {
    render() {

        let footerTerms = 
            <div className="footer-terms">
                <p>&copy; 2020 MAGNiTT, Inc. All Rights Reserved &nbsp;</p>
                <p>
                    <a href="/privacy-policy">Privacy &amp; Cookies </a>
                    | <a href="/terms-and-conditions">Terms of Service </a>
                </p>
            </div>

        let footerSocial =
            <div className="footer-social">
                <a href="https://twitter.com/magnitt" target='_blank' rel="noopener noreferrer">
                    <i className='fab fa-twitter'></i>
                </a>
                <a href="https://www.facebook.com/Magnitt" target='_blank' rel="noopener noreferrer">
                    <i className='fab fa-facebook-f'></i>
                </a>
                <a href="https://www.linkedin.com/company/magnitt/" target='_blank' rel="noopener noreferrer">
                    <i className='fab fa-linkedin-in'></i>
                </a>
                <a href="mailto:support@magnitt.com" >
                    <i className='fas fa-envelope'></i>
                </a>
            </div>

        return (
            <footer id='footer' className='footer'>

                <div className="row">

                    {/* logo */}
                    <div className="footer-header col-xl-4 col-lg-12">
                        <a href="/">
                            <img src="/images/main_logo.png" />
                        </a>
                        {/* desktop */}
                        <div className="hidden-lg-down">
                            {footerTerms}
                            {footerSocial}
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-8">
                        <div className="row">

                            <div className="col-6">
                                <h6>Explore</h6>
                                <div className="footer-links">
                                    <a href="/startups">Startups</a>
                                    <a href="/investors">Investors</a>
                                    <a href="/funding-rounds">Funding</a>
                                    <a href="/exits">Exits</a>
                                    <a href="/research">Research</a>
                                </div>
                            </div>

                            <div className="col-6">
                                <h6>Data Solutions</h6>
                                <div className="footer-links">
                                    <a href="/pricing">Subscription Plans</a>
                                    <a href="/research/?category=6746">Industry Insights</a>
                                    <a href="/research/?category=6745">Country Insights</a>
                                    <a href="/analytics">Analysis &amp; Charts</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-4 mt-4 mt-sm-0">
                        <div className="row">

                            <div className="col-6 col-md-6 col-sm-12">
                                <h6>Resources</h6>
                                <div className="footer-links">
                                    <a href="/pricing">Pricing</a>
                                    <a href="/apply/investors">Apply for Funding</a>
                                    <a href="/news">Industry News</a>
                                    <a href="/newsletters">Newsletter</a>
                                    <a href="/FundingAnnouncementForm">Announce your Funding</a>
                                    <a href="/share-your-story">Share your Story</a>
                                </div>
                            </div>

                            {/* hidden on tablet */}
                            <div className="col-6 d-sm-none d-md-block">
                                <h6>General</h6>
                                <div className="footer-links">
                                    <a href="/contactus">Contact Us</a>
                                    <a href="/aboutus">About Us</a>
                                    <a href="/faq">FAQ</a>
                                    <a href="https://magnitt.freshdesk.com/support/home" target="_blank">Help Center</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* mobile */}
                    <div className="hidden-xl-up col mt-4">
                        {footerTerms}
                        {footerSocial}
                    </div>

                </div>              

            </footer>
        )
    }
}

export default AppFooter