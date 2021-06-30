import brandImage from '../../images/brand-img.png'
const Main = function () {
    return (
        <div>
            <Brand />
        </div>
    )
}

const Brand = function () {
    return (
        <main>
            <section className="brand-market py-5">
                <div className="container brand py-5">            
                        <div className="row">
                            <div className="col-md-6 img-container">
                                <img src={brandImage} alt="" className="w-100" />
                                <a href="https://youtu.be/BS4TUd7FJSg">
                                    <i className="fas fa-play" />
                                </a>
                            </div>

                            <div className="col-md-6 checklist">
                                <h2 className= "pb-4 bold">We’ve helped some amazing startups rebrand, redesign and get to market.</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                            </div>

                        </div>
                    
                </div>
            </section>
        </main>
    )
}

export default Main;