import React, { useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css'
const Projects = () => {
    useEffect(()=>{
        AOS.init();
    })
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
                <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://hakkani-travel.web.app/home"><img src={p11} alt="" srcset="" className="img-fluid"  
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                         width="100%"
                          style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Travel And Turisum</h3>
                        <div className="details d-flex justify-content-center py-3">

                            <a href=" https://hakkani-travel.web.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Travel-and-turisum"><button className="btn btn-warning ms-3">Github Clint</button></a>
                            <a href="https://github.com/MimHakknai/Travel-and-Turisum-server"><button className="btn btn-info ms-3">Github Server</button></a>
                     
                        </div>
                    </div>
                   
                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://hakkani-cycle-store.web.app/"><img src={p3} alt="" srcset="" className="img-fluid" 
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1100" width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Cycle Store</h3>
                        <div className="details d-flex justify-content-center py-3">

                            <a href="https://hakkani-cycle-store.web.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/cycle-shop-fullstack"><button className="btn btn-warning ms-3">Github Clint</button></a>
                            <a href="https://github.com/MimHakknai/cycle-store-shop-server"><button className="btn btn-info ms-3">Github Server</button></a>
                     
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3 py-3">
                        <img src={p12} alt="" srcset=""
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        className="img-fluid"  width="100%" style={{height:'300px'}} />
                        <h3 className="text-uppercase text-center py-3 shadow">Charity Donate</h3>
                        <div className="details d-flex justify-content-center py-3">

                            <a href="https://eloquent-shaw-acfc28.netlify.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Charity-Donation-LandingPage"><button className="btn btn-warning ms-3">Github Link</button></a>
                     
                        </div>
                        
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://goofy-spence-9ad138.netlify.app/"><img src={p8} alt="" srcset="" className="img-fluid"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="500" width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Education Sites</h3>
                         <div className="details d-flex justify-content-center py-3">

                            <a href="https://goofy-spence-9ad138.netlify.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Education_with-react-routing"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://hakkani-medical-center.web.app/"><img src={p7} alt="" srcset="" className="img-fluid"  
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="600"
                        width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Medical Care</h3>
                        <div className="details d-flex justify-content-center py-3">

                            <a href="https://hakkani-medical-center.web.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Medical-care-center"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://mystifying-murdock-63ba4f.netlify.app"><img src={p1} alt="" srcset=""
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="700" className="img-fluid" width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Barger Evenue</h3>
                        
                        <div className="details d-flex justify-content-center py-3">

                            <a href="https://mystifying-murdock-63ba4f.netlify.app"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Burger_food-React-metrial-ui-"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://mimhakknai.github.io/Honda/"><img src={p2} alt="" srcset="" className="img-fluid" 
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Honda CbR</h3>
                       <div className="details d-flex justify-content-center py-3">

                            <a href="https://mimhakknai.github.io/Honda/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Honda"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href=" https://mimhakknai.github.io/responsive_football/"><img src={p4} alt="" srcset="" 
                         data-aos="fade-up-right"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                        className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Football News</h3>
                            <div className="details d-flex justify-content-center py-3">

                            <a href="https://mimhakknai.github.io/responsive_football/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/responsive_football"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://eloquent-hoover-2a0c49.netlify.app/"><img src={p5} alt="" srcset="" 
                        data-aos="fade-up-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        className="img-fluid" width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Meal DB</h3>
                           <div className="details d-flex justify-content-center py-3">

                            <a href="https://eloquent-hoover-2a0c49.netlify.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/react-meal_db-routing-"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://sad-newton-7a46d0.netlify.app/"><img src={p6} alt="" srcset="" className="img-fluid"
                        
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Books Store Api</h3>
                       <div className="details d-flex justify-content-center py-3">

                            <a href="https://sad-newton-7a46d0.netlify.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Book-Store-api-js-"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>


                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://mystifying-murdock-63ba4f.netlify.app/"><img src={p9} alt="" srcset=""
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Barger Apis</h3>
                        <div className="details d-flex justify-content-center py-3">

                            <a href="https://mystifying-murdock-63ba4f.netlify.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Burger_food-React-metrial-ui-"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12 card mb-2 py-3">
                        <a href="https://festive-aryabhata-aee6ae.netlify.app/"><img src={p10} alt="" srcset="" data-aos="zoom-in-up"
                        data-aos-duration="2000" className="img-fluid"  width="100%" style={{height:'300px'}} /></a>
                        <h3 className="text-uppercase text-center py-3 shadow">Introduced Myself</h3>
                        <div className="details d-flex justify-content-center py-3">

                            <a href="https://festive-aryabhata-aee6ae.netlify.app/"><button className="btn btn-danger">LiveSiteLink</button></a>
                            <a href="https://github.com/MimHakknai/Hakkani_portfolio"><button className="btn btn-warning ms-3">Github Clint</button></a>
                           
                     
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Projects;