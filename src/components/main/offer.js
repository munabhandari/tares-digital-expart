
const Offer = function () {
    return (
        <section className="offer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center offer-content mt-5">
                        <h2 className="bold">What We Offer for You</h2>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem incididunt ut labore et<br /> dolore magna aliqua.enim ad minim</p>
                    </div>
                </div>

                <div className="row offer-cards my-5">
                    <div className="col-md-4">
                        <Card title="Telephone Systems" icon="fas fa-pen-nib"/>
                    </div>
                    <div className="col-md-4">
                        <Card title="Compatible Design"  icon="fas fa-file-export"/>
                    </div>
                    <div className="col-md-4">
                        <Card title="Responsive Tools"  icon="fas fa-file-export"/>
                    </div>
                </div>

                <div className="row offer-cards my-3">
                    <div className="col-md-4">
                        <Card title="Top Performance" icon="fas fa-file-export" />
                    </div>
                    <div className="col-md-4">
                        <Card title="Premium Design" icon="fas fa-file-export" />
                    </div>
                    <div className="col-md-4">
                        <Card title="Export Package" icon="fas fa-file-export" />
                    </div>
                </div>

            </div>
        </section>
    )
}
const Card = function (props) {
    return (
        <div className="offer-card" >
            
            <h5 className="text-center">
            <i className={props.icon}></i> 
            <br/>
                {props.title}</h5>
            <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore
            </p>
        </div>
    )

}



export default Offer;