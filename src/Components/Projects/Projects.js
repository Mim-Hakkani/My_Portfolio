import React from 'react';
import p1 from '../../images/projects/burger11.jpg'
import p2 from '../../images/projects/bikes.jpg'
import p3 from '../../images/projects/cycleshop.jpg'
import p4 from '../../images/projects/football.jpg'
import p5 from '../../images/projects/hotel.jpg'
import p6 from '../../images/projects/libersy.jpg'
import p7 from '../../images/projects/medical.jpg'
import p8 from '../../images/projects/projects2.jpg'
import p9 from '../../images/projects/projects3.jpg'
import p10 from '../../images/projects/simplepostfolio.jpg'
import p11 from '../../images/projects/turisumm.jpg'
import p12 from '../../images/projects/projects.jpg'
const Projects = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="porjects text-center ">
                            <h1 className="py-2 my-2 ">My Projects</h1>
                            <p>This is my projects ..Simple ,responsive and functional </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row gx-1">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://mystifying-murdock-63ba4f.netlify.app"><img src={p1} alt="" srcset="" className="img-fluid" width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://mimhakknai.github.io/"><img src={p2} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href=" https://mimhakknai.github.io/responsive_football/"><img src={p4} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://mimhakknai.github.io/responsive_football/"><img src={p5} alt="" srcset="" className="img-fluid" width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://eloquent-hoover-2a0c49.netlify.app/restudent"><img src={p6} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://hakkani-medical-center.web.app/"><img src={p7} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://goofy-spence-9ad138.netlify.app/"><img src={p8} alt="" srcset="" className="img-fluid" width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://mystifying-murdock-63ba4f.netlify.app/"><img src={p9} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://festive-aryabhata-aee6ae.netlify.app/"><img src={p10} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://hakkani-travel.web.app/home"><img src={p11} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://hakkani-cycle-store.web.app/"><img src={p3} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <a href="https://eloquent-shaw-acfc28.netlify.app/"><img src={p12} alt="" srcset="" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;