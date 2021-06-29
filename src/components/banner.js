
import bannerImage from '../images/banner-round.png'
import bannerCardImage from '../images/banner-card-bg.jpg'

const Banner = function () {
    return (
        <div className="banner pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left">
                        <h6>Agency Advice</h6>
                        <h1>Marketing Agency For Small Business</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>
                        <a href="/" className="read-more">Read More</a>
                        <a href="https://youtu.be/BS4TUd7FJSg" className="watch-video">
                            <i className="fas fa-play"></i>
                            Watch Video</a>
                    </div>
                    <div className="col-md-6">
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <Card title="Business" />
                    </div>
                    <div className="col-md-4">
                        <Card title="Finance" />
                    </div>
                    <div className="col-md-4">
                        <Card title="Company" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = function (props) {
    return (
        <div className="banner-card" style={{backgroundImage: bannerCardImage}}>
            <a href="">{props.title}</a>
            <p>

                Website Designing on Your
                Own is a Great Career

            </p>
        </div>
    )
}

export default Banner;