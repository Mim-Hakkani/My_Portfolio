import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dn67n5k', 'template_ox48m64', form.current,'user_DqAqvqfYfNk3G7il3aBBR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset()
        }
    return (
        <div>
            <div className="container bg-light text-start">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12  p-3 mb-2">
                       <h5>Country  : Bangladesh</h5>
                       <h5>City     : Rajshahi </h5>
                       <h5>Streat   :  12/1 Jamira,Puthia,Rajshahi</h5>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12  p-3 mb-2">
                       <h5>Email       : mim.cse32@gmail.com</h5>
                       <h5>Phone      : (+880-1816910886) </h5>
                       <h5>Social : 
                            <a href="https://www.facebook.com/Hakkani32/"><i className="ms-2 me-3 fab fa-facebook"></i></a>
                            <a href="https://github.com/MimHakknai"><i className="me-3 fab fa-github"></i> </a>
                            <a href="https://www.linkedin.com/in/hakkani-mim-61720a227/"><i className="fab fa-linkedin"></i></a>
                       
                       </h5>
                    </div>
                    
                </div>
            </div>
            <div className="container bg-secondary p-4">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                    <form ref={form} onSubmit={sendEmail}>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                                <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" name="user_name"/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" name="user_email"/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                                <textarea type="text" class="form-control" placeholder="Message" aria-label="Username" aria-describedby="basic-addon1" name="message" style={{height:'100px'}}/>
                            </div>
                            <button className="btn btn-primary px-4"  type="submit" value="Send"><i className="fas fa-paper-plane"></i> Send Message</button>
                    </form>
                    </div>
                </div>
            </div>
       
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <hr/>
                    <p className="text-center py-2">All Right Reserved @ Golam Hakkani Mim 2021</p>
                 </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;