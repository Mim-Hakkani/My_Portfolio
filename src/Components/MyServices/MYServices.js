import React from 'react';
import './MyServices.css'

// const services1=[
//     {
//         id:0,
//         title:'Full website creation',
//         desc:'I can create any type of website for your business, portfolio, company, e-commerce store, blog etc. I provide unique, clean & awesome graphical design interface.',
//         icons:'fas fa-archive service-icons'
//     },
//     {
//         id:1,
//         title:'Fixing problems',
//         desc:'Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.',
//         icons:'fas fa-bug service-icons'
//     },
//     {
//         id:2,
//         title:'Maintenance & Optimized',
//         desc:'Slow loading website it’s the biggest problem for every website. I can boost your website’s speed by optimization your website. And if you don’t have time to maintain your website don’t worry I’m here.',
//         icons:'fab fa-accessible-icon  service-icons'
//     },
    
// ]
const MYServices = () => {
    return (
        <div style={{backgroundColor:'rgb(243 237 237)'}}>
              <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <h1 style={{fontFamily:'Railway',
                                    fontWeight: '700',
                                    textAlign: 'center',
                                    margin: '25px 0px',
                                    fontSize: '46px',
                                    lineHeight: '70px'}}>
                            MY SERVICES
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                   
                    {/* {
                     services1.map(service=><div className="col-md-4">
                      <div className="d-flex justify-content-between ">
                          <i className={`${service.icons}`} style={{}}></i>
                          <div className="service-text">
                          
                              <h3>{service.title}</h3>
                              <p>{service.desc}</p>
                          </div>
                      </div>
                      
                     </div>)   
                    } */}
                   <div className="col-md-4">
                      
                      <img src="https://developerjillur.me/wp-content/webp-express/webp-images/uploads/2018/03/developerjillur-graphic-right.png.webp" alt="" srcset="" />
                      
                    </div>

                   <div className="col-md-4">
                      <div className="d-flex justify-content-between ">
                          <i className="fas fa-archive service-icons  service-icons" style={{}}></i>
                          <div className="service-text">
                          
                              <h3>Full website creation</h3>
                              <p>I can create any type of website for your business, portfolio, company, e-commerce store, blog etc. I provide unique, clean & awesome graphical design interface.</p>
                          </div>
                      </div>
                      
                    </div>
                    
                    <div className="col-md-4">
                      <div className="d-flex justify-content-between ">
                          <i className="fas fa-bug service-icons  service-icons" style={{}}></i>
                          <div className="service-text">
                          
                              <h3>Fixing problems</h3>
                              <p>Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website</p>
                          </div>
                      </div>
                      
                    </div>
                   
                   
                      
                   
                    <div className="col-md-4">
                      <div className="d-flex justify-content-between ">
                          <i className="fab fa-accessible-icon  service-icons" style={{}}></i>
                          <div className="service-text">
                          
                              <h3>Maintenance & Optimized</h3>
                              <p>Slow loading website it’s the biggest problem for every website. I can boost your website’s speed by optimization your website. And if you don’t have time to maintain your website don’t worry I’m here</p>
                          </div>
                      </div>
                      
                    </div>
                   
                    <div className="col-md-4">
                      <div className="d-flex justify-content-between ">
                          <i className="fas fa-user-friends  service-icons" style={{}}></i>
                          <div className="service-text">
                          
                              <h3>Seo Friendly With Google Page Rank</h3>
                              <p>seo website it’s the biggest problem for every website. I can boost your website’s speed by optimization your website. And if you don’t have time to maintain your website don’t worry I’m here</p>
                          </div>
                      </div>
                      
                    </div>
                    <div className="col-md-4">
                      <img src="https://developerjillur.me/wp-content/webp-express/webp-images/uploads/2018/03/developerjjillur-graphic-left.png.webp" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
           
       
    );
};

export default MYServices;