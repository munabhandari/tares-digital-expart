import expertImage1 from '../../images/expert-img1.jpg'
import expertImage2 from '../../images/expert-img2.jpg'
import expertImage3 from '../../images/expert-img3.jpg'
import expertImage4 from '../../images/expert-img4.jpg'
const Expert = function () {
    return (
        <section className="expert py-5" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center expert-content mt-5">
                        <h2 className="bold">Expert Team Member</h2>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem incididunt ut labore et<br /> dolore magna aliqua.enim ad minim</p>
                    </div>
                </div>

                <div className="row img-container my-5">
                    <div className="col-md-3">
                    <img src={expertImage1} alt="" />
                    </div>
                    <div className="col-md-3">
                    <img src={expertImage2} alt="" />    
                    </div>
                    <div className="col-md-3">
                    <img src={expertImage3} alt="" />    
                    </div>
                    <div className="col-md-3">
                    <img src={expertImage4} alt="" />   
                    </div>
                </div>                
            </div>
        </section>
    )
}
export default Expert;