import react from 'react';
import image from '../images/logo.svg';

const Banner = function() {
    return(
        <div>
            <img src={image}/>
               <h1> This is Banner</h1>
        </div>
    )
}


export default Banner;