import React from 'react';
import './Banner.css'
import mim from '../../images/mm-removebg-preview.png'
import Typical from 'react-typical'
const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-text text-center text-white mt-5">
                            <h1 className="">Hellow,, <br/>Golam Hakkani Mim</h1>
                            <h4> I'm a
                                <Typical
                                    steps={[ 'Front End Developer',2000,'Mern Stack Developer',2000, 'Wordpress Developer',2000, 'Responsive Web Designer',2000]}
                                  
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={mim} alt="" height="500" />
                    </div>
                </div>
            </div>
         
            
        </div>
    );
};

export default Banner;