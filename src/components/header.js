import logo from '../images/logo.png';

import Nav from './nav';

const Header = function () {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-5 logo-container">
                        <div className="logo text-uppercase">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <div className="col-7">
                        <Nav/>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;
