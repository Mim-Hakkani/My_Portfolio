import React, { useEffect } from 'react';
import './Howwork.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const doings =[
    {   id:0,
        icon :'far fa-comment-dots',
        desc:'To understand the project needs & requirements it’s very important for me, for that I discuss with every details to related projects if needed I communicate by video or audio conversations.',
        title:'Discussion'
    },

    {    id:1,
        icon :'fas fa-brain',
        desc:'Then I can create a plan for the interior projects. Planning gives high potential to every projects. Every single detail listed in the plan, when I deliver, when I need website data form you.',
        title:'Planning'
    },
    {    id:2,
        icon :'fas fa-pencil-alt',
        desc:'I give highly concentration to website design, every time I try to give my best to do clean and services related awesome design for the website. A nice design can improve your business quality.',
        title:'Design'
    },
    {    id:3,
        icon :'far fa-code',
        desc:'The website is built by web language that’s why we need to code for every website. it’s very important to have hand coding, clean and developer friendly coding. I give 100% guarantee in all of them.',
        title:'Coding'
    },
    {    id:4,
        icon :'fas fa-sync-alt',
        desc:'After design and coding, I send for review to client. After client’s checking, If have to change or revision, I say client to send all of them in a list and I am happy to do all changes every time.',
        title:'Submit for Review'
    },
    {   id:5,
        icon :'far fa-check-circle',
        desc:'After reviewing everything, we are going to the final step, if everything has done, then I can publish it for everyone. In every project, i make sure to give full support to the clients.',
        title:'Website Is Ready!'
    }
     
]
const MyWork = () => {

   useEffect(()=>{
      AOS.init();
   })
    return (
        <div style={{ background: `linear-gradient(to right, rgb(229 242 249 / 53%), rgb(239, 239, 241))`,padding:'15px 0px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <h1 style={{fontFamily:'Railway',
                                    fontWeight: '700',
                                    textAlign: 'center',
                                    margin: '25px 0px',
                                    fontSize: '46px',
                                    lineHeight: '70px'}}>
                            How Do I Work
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row">
                    {
                       doings.map(doing=><div className="col-md-4">
                       <div className="what_i_do " >
                         <i className={`${doing.icon}`} data-aos="fade-up" data-aos-duration="1000"></i>
                          <h3>{doing.id}.{doing.title}</h3>
                          <p>{doing.desc}.</p>
                       </div>
                   </div>) 
                    }
                  
                </div>
            </div>
        </div>
    );
};

export default MyWork;