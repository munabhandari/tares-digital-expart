import react from 'react';
import './header.scss'
import Nav from './nav';

const Header = function () {
    return (
        <header>
            <div className="container">

                <div className="row">

                    <div className="col-md-5">
                        <div className="logo text-uppercase">
                            <h1>tares</h1>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <Nav/>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;
