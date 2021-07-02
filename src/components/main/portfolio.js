import b1 from '../../images/b1.png';
import b2 from '../../images/b2.png';
import b3 from '../../images/b3.png';
import b4 from '../../images/b4.png';

const Portfolio = function () {
    return (
        <section className="portfolio py-5" id="projects">
            <div className="container logo-ipsum ">
                <div className="row logo-container">
                    <div className="col-md-3">
                        <img src={b1} alt="images" />
                    </div>

                    <div className="col-md-3 ">
                    <img src={b2} alt="images" />
                    </div>

                    <div className="col-md-3">
                    <img src={b3} alt="images" />
                    </div>

                    <div className="col-md-3">
                    <img src={b4} alt="images" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Portfolio;