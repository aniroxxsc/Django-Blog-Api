import React from 'react';
import blockchain from '../containers/images/blockchain.jpeg';
// import Innovation from '../containers/images/Innovation.jpg';
// import technology from '../containers/images/technology.jpg';
// import techno from '../containers/images/techno.jpg';
import acmlogo from '../containers/images/acmlogo.png';
// import '../containers/Home.css'
import {Link} from 'react-router-dom'
import Slider from 'infinite-react-carousel';
import '../containers/css/Home.css';
import '../containers/css/bootstrap.css';
import '../containers/css/font-awesome.min.css';
import '../containers/css/nice-select.css';
import '../containers/css/owl.carousel.min.css';
import '../containers/css/owl.theme.default.min.css';
import '../containers/css/unslider.css';
import '../containers/css/responsive.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'react-multi-carousel/lib/styles.css';
import {Bumbotron, Button, Carousel } from 'react-bootstrap'


const Blog = (props) => {
  console.log(props.data.articles)
  
  if(props.data.articles[0]){
    return(

        <div className="Home">
        
        <html lang="en" className="colour">
         <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Front page</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
            <link rel="stylesheet" href="../containers/css/bootstrap.css" />
            <link rel="stylesheet" href="../containers/css/font-awesome.min.css" />
            <link rel="stylesheet" href="../containers/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="../containers/css/owl.theme.default.min.css" />
            <link rel="stylesheet" href="../containers/css/style.css" />
            <link rel="stylesheet" href="../containers/css/responsive.css" />
        
        
        
        
            <div className="wrapper">
                <header className="header">
                    <div className="container">
                        <div className="row">
                        
                            <div className="col-md-12">
                                <div className="menu">
                                    <ul>
                                        <li className=""><Link to="/login">Log in</Link></li>
                                        <li><Link to="/Home">Home</Link></li>
                                        <li><Link to="#">About</Link></li>
                                        <li><Link to="#">Categories</Link></li>
                                        <li><Link to="/createnew" >BLOG</Link></li>
                                        <li><Link to="#">Contact</Link></li>
                                        <li><Link to="#"><i className="fa fa-search"></i></Link></li>    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                </div>
                
        <Carousel>
          <Carousel.Item>
            <img
              className="slider-container "
              src={require('./img/blog.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider-container "
            src={require('./img/blog.jpg')}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slider-container "
              src={require('./img/blog.jpg')}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <br />
        
        <section>
        
        <div className="grid-container_featured">
            <div className="grid-item1">Latest</div>
            <div className="grid-item colour2">
        
                <img src={props.data.images[0].image} height="200px" width="200px" align="center" />
                  
                <h4>{props.data.articles[0].title}</h4>
        
                <h5>
                  
                  {props.data.articles[0].description}
        
                  </h5>
        <button>
                <Link to={'/' + props.data.articles[0].id} style={{color: "#FFFFFF"}} >Read More</Link>
        </button>
        
            </div>
            <div className="grid-item colour2">
        
        
                <img src={props.data.images[1].image} height="200px" width="200px" align="center" />
                  
    <h4>{props.data.articles[1].title}</h4>
        
                  <h5>
                  
                  {props.data.articles[1].description}
        
                  </h5>
        
                 <button>
                <Link to={'/' + props.data.articles[1].id} style={{color: "#FFFFFF"}} >Read More</Link>
        </button>
        
        
            </div>
            <div className=" grid-item grid-item3 colour2">
        
                <img src={props.data.images[2].image}height="530px" width="230px" align="center" />
                  
                  <h4>{props.data.articles[2].title}</h4>
        
                  <h5>
                  
                  {props.data.articles[2].description}
        
                  </h5>
        
                  <button>
                <Link to={'/' + props.data.articles[2].id}style={{color: "#FFFFFF"}} >Read More</Link>
        </button>
        
            </div>
            <div className="grid-item colour2">
        
                <img src={props.data.images[3].image} height="200px" width="200px" align="center" />
        
                  
                  <h4>{props.data.articles[3].title}</h4>
        
                  <h5>
                  
                  {props.data.articles[3].description}
        
                  </h5>
        
           <button>
                <Link to={'/' + props.data.articles[3].id} style={{color: "#FFFFFF"}} >Read More</Link>
        </button>
        
            </div>
            <div className="grid-item colour2">
              
                <img src={props.data.images[4].image} height="200px" width="200px" align="center" />
                  
                  <h4>{props.data.articles[4].title}</h4>
        
                  <h5>
                  
                  {props.data.articles[4].description}
        
                  </h5>
        
                 <button>
                <Link to={'/' + props.data.articles[4].id} style={{color: "#FFFFFF"}} >Read More</Link>
        </button>
        
            </div>
            </div>
        
        
        
        <div className="grid-container_latest">
          <div className="grid-item_latest1">Featured</div>
        
          <div className="grid-item_latest colour2">
        
            <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
            
            <h4 >Lorem&nbsp;ipsum</h4>
        
                  <p>
                  
                  Lorem ipsum dolor sit amet
        
                  </p>
        
          </div>
          <div className="grid-item_latest colour2">
        
            <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
            
            <h4>Lorem&nbsp;ipsum</h4>
        
                  <p>
                  
                  Lorem ipsum dolor sit amet
        
                  </p>
        
          </div>
          <div className="grid-item_latest colour2">
        
            <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
        
            <h4>Lorem&nbsp;ipsum</h4>
        
                  <p>
                  
                  Lorem ipsum dolor sit amet
                  </p>
            
        
          </div>
          <div className="grid-item_latest colour2">
        
            <img src={require('./img/4b18374e62fe836fd9d8c5e899a49e60.jpg')} height="70px" width="150px" align="center" />
        
            <h4>Lorem&nbsp;ipsum</h4>
        
                  <p>
                  
                  Lorem ipsum dolor sit amet
        
                  </p>
            
        
          </div>
        
        </div>
        
        
        
        
        
        </section>
        
        
        <section>
        
        <div className="grid-container5 colour3">
        
            <div className="grid-item15 grid-item5">Popular Author</div>
        
            <div className="grid-item5 grid33">
              
        
              <img src={require('./img/sydney-best-GETTY.webp')} align="left"/>
        
              <h3>lorem ipsum</h3>
        
              <h6>
                
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt
        
              </h6>
        
              <button className="button5">
                
                lorem
        
              </button>
        
        
        
            </div>
        
            <div className="grid-item25 grid-item5 grid33">
              
        
              <img src={require('./img/sydney-best-GETTY.webp')} align="left" />
        
              <h3>lorem ipsum</h3>
        
              <h6>
                
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt
        
              </h6>
        
        
              <button className="button5">
                
                lorem
        
              </button>
        
        
            </div>
        
            <div className="grid-item35 grid-item5 grid33">
              
        
              <img src={require('./img/sydney-best-GETTY.webp')} align="left" />
        
              <h3>lorem ipsum</h3>
        
              <h6>
                
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt
        
              </h6>
        
              <button className="button5">
                
                lorem
        
              </button>
        
        
        
            </div>
        
          </div>
        </section>
        
        <section className="joinus">
            <div className="row cont h-100">
                <div className="col-md-7 my-auto">
                    <p className="headin">Join Our Community</p>
                    <p className="head_cont">
                        Lorem ipsum dolor sit amet, consectetur adipiscing  elit,
                        sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. 
                        Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex  ea commodo consequat.
                    </p>
                </div>
                <div className="col-md-4 my-auto">
                    <form className="Login">
                        <input className="box1" type="number" name="" placeholder="SAP ID" /><br />
                        <input className="box1" type="password" name="" placeholder="PASSWORD" /><br />
                        <button className="join" type="button">Join</button>
                    </form>
                </div>
            </div>
        </section>
        
        <section>
         <div className="Crible_block">
                    
                    <div className="row">
                        <div className="col-md-4 pad_0 colour">
                                        <img className="image2" src={require('./img/4-512.png')} />
                            <p className="Crible_para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                            </p>
                           <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                           </h1>
                        </div>
                        <div className="col-md-4 pad_0 colour">
                            
                           <img className="image2" src={require('./img/4-512.png')} />
                            <p className="Crible_para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                            </p>
                             <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                             </h1>
                        </div>
                        <div className="col-md-4 pad_0 colour">
                            <img className="image2" src={require('./img/4-512.png')} />
                            
                            <p className="Crible_para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Repellat perspiciatis magnam quod delectus quisquam porro ullam veritatis ea aperiam ab!
                            </p> 
                            <h1 className="Crible_head">  <img className="image" src={require('./img/circle-cropped.png')} /> Lorem ipsum
                           
                            </h1>
                           
                        </div>
                    </div>
                </div>
                </section>
        
        
        <br />
        
        
        
        
        
        
        <hr className=".col-xs-6 mx-auto pt-0.9 footer1"/>
        
        
        <section>
          <br />
            <div className="container">
               
        
        
              <div className="row align-items-center footer2">
            
          <div  className= "col-md-6 footer5">
            <h className="footer3 footer6">
             Terms of Use  |  Privacy Policy  |  Cookies
           </h>
          
         
        
        </div>
        <div className="col-md-3 col-md-offset-3">
          <Link to="https://www.facebook.com/upesacm/" className="fa fa-facebook"></Link>
        <Link to="https://twitter.com/upesacm?lang=en" className="fa fa-twitter"></Link>
        <Link to="https://www.instagram.com/upesacm/?hl=en" className="fa fa-instagram"></Link>
        <Link to="https://www.linkedin.com/company/upesacm/" className="fa fa-linkedin"></Link>
        </div>
           
        </div>
        </div>
        </section>
        
        <section>
          <div className="container footer4">
               
        
        
                <div className="row footer3">
            <div className="footer5">
            <h className="footer6">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </h>
          </div>
        </div>
          </div>
        </section>
        <br />
        <br />
        
                </html>
        
        </div>);
  
}
 return(
   <div>
     Loading...
   </div>
 );}


export default Blog;







// return (
//     <div>

//     <div>
//     <div className="mainimage" ></div>
//     <div className="mainpage-display">
        
//          <div className="division1">
//             <div className="container1">
//                 <div className="image-container1"><img alt='' src={props.data.images[0].image ? props.data.images[0].image: blockchain} width="230vw" height="188vh" mode="fit"/></div>
//                 <div className="container5"><p><Link to={'/'+ props.data.articles[0].id}>{props.data.articles[0].title} </Link></p></div>
//             </div>
//             <div className="container1">
//              <div className="image-container1"><img alt='' src={props.data.images[1].image} width="230vw" height="188vh" mode="fit"/></div>
//              <div className="container5"><p><Link  to={'/' + props.data.articles[1].id}>{props.data.articles[1].title} </Link> </p></div>
//              </div>

//          </div>
//          <div className="division2">
//              <div className="container2">
//              <div className="image-container2"><img alt='' src={props.data.images[2].image} width="230vw" height="675vh" mode="fit"/></div>
//              <div className="container5"><p><Link  to={'/' + props.data.articles[2].id}>{props.data.articles[2].title} </Link></p></div>
//          </div>

//          </div>
//          <div className="division3">
//              <div className="container3">
//              <div className="image-container1"><img alt='' src={props.data.images[3].image} width="230vw" height="188vh" mode="fit"/></div>
//              <div className="container5"><p><Link  to={'/' + props.data.articles[3].id}>{props.data.articles[3].title} </Link> </p></div>
//              </div>
//              <div className="container3">
//              <div className="image-container1"><img alt='' src={props.data.images[4].image} width="230vw" height="188vh" mode="fit"/></div>
//              <div className="container5"><p><Link  to={'/' + props.data.articles[4].id}>{props.data.articles[4].title} </Link> </p></div>
//              </div>
//          </div>
//          <div className="division4">
//              <div className="container4">
//              <div className="image-container3"><img alt='' src={props.data.images[5].image} width="190px" height="70px" mode="fit"/></div>  

//              </div>
          
//              <div className="container5">
//                 <div className="text">
//                  <p><Link  to={'/' + props.data.articles[5].id}>{props.data.articles[5].title} </Link>
//                  </p>
//                  </div>
//              </div>

//              <div className="container4">
//              <div className="image-container3"><img alt='' src={props.data.images[6].image ? props.data.images[6].image : blockchain} width="190px" height="70px" mode="fit"/></div>
                 
//              </div>

             
//              <div className="container5">
//                  <p><Link  to={'/' + props.data.articles[6].id}>{props.data.articles[6].title} </Link>
//                  </p>
//              </div>

//              <div className="container4">
//              <div className="image-container3"><img alt='' src={props.data.images[7].image} width="190px" height="70px" mode="fit"/></div>
                 
//              </div>
            
//              <div className="container5">
//                  <p><Link  to={'/' + props.data.articles[7].id}>{props.data.articles[7].title} </Link>
//                  </p>
//              </div>
//              <div className="container4">
//              <div className="image-container3"><img alt='' src={props.data.images[8].image} width="190px" height="70px" /></div>
                 
//              </div>
             
//              <div className="container5">
//                  <p><Link to={'/' + props.data.articles[8].id}>{props.data.articles[8].title} </Link>
//                  </p>
//              </div>
//          </div>
         
//          </div>
//          <div className="container6">
//              <div className="container6A">
//              </div>
//              <div className="container6B">
//                  <div className="textbig">We are on Social Media</div>
//                  <div className="textsmall">
//                    <Link  to="#" className="fa fa-facebook"></Link>
//                    <Link  to="#" className="fa fa-twitter"></Link>
//                    <Link  to="#" className="fa fa-google"></Link>
//                    <Link  to="#" className="fa fa-instagram"></Link>
//                    <div><img alt='' src={acmlogo} height="200px" width="300px"/></div>
//                  </div>
             
//              </div>

             
//              <div className="container6C">
//              </div>
//              <div className="container6B">
//                  <div className="textbig">We are on Social Media</div>
//                  <div className="textsmall">
//                    <Link  to="#" className="fa fa-facebook"></Link>
//                    <Link  to="#" className="fa fa-twitter"></Link>
//                    <Link  to="#" className="fa fa-google"></Link>
//                    <Link  to="#" className="fa fa-instagram"></Link>
//                    <div><img alt='' src={acmlogo} height="200px" width="300px"/></div>
//                  </div>
             
//              </div>

             
//              <div className="container6C">
//                  <div className="textbig">Email Us</div>
//                  <div className="textsmall">info.upesacm@gmail.com</div>
                 
//              </div>
            
//                      <Link to="/createnew" >CREATE NEW</Link>              
//          </div>
// </div>
// </div>
//   );
// }
// return(
//   <div>
//     Loading...
//   </div>
// ); </div>
            
//                      <Link to="/createnew" >CREATE NEW</Link>              
//          </div>
// </div>
// </div>
//   );
// }
// return(
//   <div>
//     Loading...
//   </div>
// );     <div className="textbig">Call Us</div>
//                  <div className="textsmall">Yashodhara Thoyakkat: +91 8826138814</div>
                 
//              </div>
//              <div className="container6B">
//                  <div className="textbig">We are on Social Media</div>
//                  <div className="textsmall">
//                    <Link  to="#" className="fa fa-facebook"></Link>
//                    <Link  to="#" className="fa fa-twitter"></Link>
//                    <Link  to="#" className="fa fa-google"></Link>
//                    <Link  to="#" className="fa fa-instagram"></Link>
//                    <div><img alt='' src={acmlogo} height="200px" width="300px"/></div>
//                  </div>
             
//              </div>

             
//              <div className="container6C">
//                  <div className="textbig">Email Us</div>
//                  <div className="textsmall">info.upesacm@gmail.com</div>
                 
//              </div>
            
//                      <Link to="/createnew" >CREATE NEW</Link>              
//          </div>
// </div>
// </div>
//   );
// }
// return(
//   <div>
//     Loading...
//   </div>
// );}