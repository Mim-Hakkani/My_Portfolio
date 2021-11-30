import React from 'react';
import './Skills.css'
const skills =[

    {
        images :'https://i.ibb.co/sP8QfDR/html.png',
        id:17
    },
    {
        images :'https://i.ibb.co/R9gFL3G/css-4.png',
        id:16
    },
    {
        images :'https://i.ibb.co/6R1MLmt/psdhtml.png',
        id:15
    },
    {
        images :'https://i.ibb.co/YTX4sFj/bootstrap.jpg',
        id:14
    },
    {
        images :'https://i.ibb.co/vsQWYwg/javascript.png',
        id:13
    },
    {
        images :'https://i.ibb.co/z7m3LWx/jquery.png',
        id:12
    },

    {
        images :'https://reactjs.org/logo-og.png',
        id:111
    },
    {
        images :'https://i.ibb.co/Qk3Dk0r/react-bootstrap.png',
        id:11
    },
    
    {
        images :'https://i.ibb.co/B4n2B8n/php-1-logo.png',
        id:7
    },
    {
        images :'https://i.ibb.co/K5TS4wZ/mysql-tutorial.png',
        id:5
    },
    {
        images :'https://i.ibb.co/vDchBW0/node.png',
        id:6
    },
    {
        images :'https://i.ibb.co/J75DxWq/mdb.png',
        id:3
    },
    {
        images :'https://i.ibb.co/ftsx4kc/express-logo.png',
        id:0
    },
  
    {
        images :'https://i.ibb.co/5WjZ7B6/mui.png',
        id:4
    },
   
    {
        images :'https://i.ibb.co/hDd0xmJ/git.png',
        id:2
    }, {
        images :'https://i.ibb.co/n3dPyLk/firebase.png',
        id:1
    }
    
]


const progress=[
    {
        id:0,
        color:"#E54C21",
        title:'HTML',
        width:'95%',
        value:'95%'
    },
    {
        id:1,
        color:"#2196F3",
        title:'CSS',
        width:'95%',
        value:'95%'
    },
    {
        id:2,
        color:"#5ABC9B",
        title:'PSD TO HTML',
        width:'95%',
        value:'92%'
    },
    {
        id:0,
        color:"#FFDB42",
        title:'JAVA SCRIPT',
        width:'85%',
        value:'85%'
    },
    {
        id:0,
        color:"#5A1DA7",
        title:'BOOTSTRAP',
        width:'95%',
        value:'95%'
    },
    {
        id:0,
        color:"#162C45",
        title:'JQUERY',
        width:'80%',
        value:'30%'
    },
    {
        id:0,
        color:"#61DAFB",
        title:'REACT',
        width:'80%',
        value:'30%'
    },
    {
        id:0,
        color:"#4BA74A",
        title:'MONGODB',
        width:'50%',
        value:'30%'
    },
    {
        id:0,
        color:"#5ABC9B",
        title:'NODE.JS',
        width:'30%',
        value:'30%'
    },
    {
        id:0,
        color:"#8A94BF",
        title:'PHP',
        width:'70%',
        value:'30%'
    },
    {
        id:0,
        color:"#F7CCA4",
        title:'MYSQL',
        width:'60%',
        value:'30%'
    },  {
        id:0,
        color:"#5ABC9B",
        title:'REACT BOOTSTRAP',
        width:'90%',
        value:'30%'
    },
    {
        id:0,
        color:"#0081CB",
        title:'METRIAL UI',
        width:'70%',
        value:'30%'
    },
    {
        id:0,
        color:"#FFF",
        title:'wORDPRESS',
        width:'85%',
        value:'30%'
    },

]

const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h1 className="text-center py-4">My Skills</h1>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-4">
                        {
                            progress.map(prog=>
                                <><h3 class="progress-title">{prog.title}</h3>
                                <div class="progress">
                                    <div class="progress-bar" style={{width:`${prog.width}`,background:`${prog.color}`}}>
                                        <div class="progress-value">{prog.value}</div>
                                    </div>
                                </div></>
                                )
                        }
                   
                       
         
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                    {
                     

                        skills.map(skill=> 
                         <div className="col-md-3 mb-4" >
                              <div class="card" style={{}}>
                                 <img 
                                    src={skill.images} 
                                    alt="" 
                                    // height="100"
                                    width="100%" 
                                    className="img-fluid"
                                    // style={{display:'block',margin:'0 auto'}}
                                    
                                    
                                    />
                            
                               </div>
                         </div> )
                    }
                    </div>
                    </div>
                   
                    
                </div>

               
                    
                    
                </div>
        </div>
    );
};


export default Skills;