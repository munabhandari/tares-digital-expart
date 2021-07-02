import footerImage1 from '../images/instragram1.png';
import footerImage2 from '../images/instragram-2.png';
import footerImage3 from '../images/instragram-4.png';
import footerImage4 from '../images/instragram-4.png';
import footerImage5 from '../images/instragram-5.png';
import footerImage6 from '../images/instragram-6.png';

const Footer = function () {
    return (
        <footer className="py-3" id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-3 get-in-touch">
                            <h4 className="pb-3">Get in Touch</h4>
                            <p><a href="index.js"><i class="fa fa-map-marker"></i></a>(800) 123 456 789</p>
                            <p><a href="index.js"><i class="fa fa-phone"></i></a>+1 800 123 4567</p>
                            <p><a href="index.js"><i class="fa fa-envelope"></i></a>demo@example.com</p>
                        </div>

                        <div className="col-md-3">
                            <h4 className="pb-3">About Us</h4>
                            <ul className="about-us">
                                <li><a href="home">Blog & Articles</a></li>
                                <li><a href="home">Vintage Stores</a></li>
                                <li><a href="home">Trekking</a></li>
                                <li><a href="home">Sightseeing</a></li>
                                <li><a href="home">Tours</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 insta-follow">
                            <h5 className="pb-3">Instagram Follow</h5>
                            <img src={footerImage1} alt="" />
                            <img src={footerImage2} alt="" />
                            <img src={footerImage3} alt="" />
                            <img src={footerImage4} alt="" />
                            <img src={footerImage5} alt="" />
                            <img src={footerImage6} alt="" />
                        </div>

                        <div className="col-md-3 newsletter">
                            <h4 className="pb-3">Newsletter</h4>
                            <p>Fill their seed open meat.<br />
                                Sea you great Saw image stl</p>
                            <input type="email" placeholder="Email Address"></input><br />
                            <button>SUBSCRIBE</button>
                        </div>                  
                        <hr/>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 left-footer">
                            Copyright 2021 Al Right Reserved
                        </div>

                        <div className="col-md-4 right-footer">
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}


export default Footer;