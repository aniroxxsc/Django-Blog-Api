// import { List } from 'antd';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import blockchain from '../containers/images/blockchain.jpeg';
// import Innovation from '../containers/images/Innovation.jpg';
// import technology from '../containers/images/technology.jpg';
// import techno from '../containers/images/techno.jpg';
import acmlogo from '../containers/images/acmlogo.png';
import '../containers/Home.css'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  const classes = useStyles();
  console.log(props.data.articles)
  if (props.data.articles[0]) {


  return (
    <div>

    <div>
    <div className="mainimage" ></div>
    <div className="mainpage-display">
        
         <div className="division1">
            <div className="container1">
                <div className="image-container1"><img src={props.data.images[0].image} width="230vw" height="188vh" mode="fit"/></div>
                <div className="container5"><p><a onclick='handleclick();' href={props.data.articles[0].id}>{props.data.articles[0].title} </a></p></div>
            </div>
            <div className="container1">
             <div className="image-container1"><img src={props.data.images[1].image} width="230vw" height="188vh" mode="fit"/></div>
             <div className="container5"><p><a onclick='handleclick();' href={props.data.articles[1].id}>{props.data.articles[1].title} </a> </p></div>
             </div>

         </div>
         <div className="division2">
             <div className="container2">
             <div className="image-container2"><img src={props.data.images[2].image} width="230vw" height="675vh" mode="fit"/></div>
             <div className="container5"><p><a onclick='handleclick();' href={props.data.articles[2].id}>{props.data.articles[2].title} </a></p></div>
         </div>

         </div>
         <div className="division3">
             <div className="container3">
             <div className="image-container1"><img src={props.data.images[3].image} width="230vw" height="188vh" mode="fit"/></div>
             <div className="container5"><p><a onclick='handleclick();' href={props.data.articles[3].id}>{props.data.articles[3].title} </a> </p></div>
             </div>
             <div className="container3">
             <div className="image-container1"><img src={props.data.images[3].image} width="230vw" height="188vh" mode="fit"/></div>
             <div className="container5"><p><a onclick='handleclick();' href={props.data.articles[4].id}>{props.data.articles[4].title} </a> </p></div>
             </div>
         </div>
         <div className="division4">
             <div className="container4">
             <div className="image-container3"><img src={props.data.images[5].image} width="190px" height="70px" mode="fit"/></div>  

             </div>
          
             <div className="container5">
                <div className="text">
                 <p><a onclick='handleclick();' href={props.data.articles[5].id}>{props.data.articles[5].title} </a>
                 </p>
                 </div>
             </div>

             <div className="container4">
             <div className="image-container3"><img src={props.data.images[2].image} width="190px" height="70px" mode="fit"/></div>
                 
             </div>

             
             <div className="container5">
                 <p><a onclick='handleclick();' href={props.data.articles[6].id}>{props.data.articles[6].title} </a>
                 </p>
             </div>

             <div className="container4">
             <div className="image-container3"><img src={props.data.images[3].image} width="190px" height="70px" mode="fit"/></div>
                 
             </div>
            
             <div className="container5">
                 <p><a onclick='handleclick();' href={props.data.articles[7].id}>{props.data.articles[7].title} </a>
                 </p>
             </div>
             <div className="container4">
             <div className="image-container3"><img src={props.data.images[4].image} width="190px" height="70px" /></div>
                 
             </div>
             
             <div className="container5">
                 <p><a onclick='handleclick();' href={props.data.articles[8].id}>{props.data.articles[8].title} </a>
                 </p>
             </div>
         </div>
         
         </div>
         <div className="container6">
             <div className="container6A">
                 <div className="textbig">Call Us</div>
                 <div className="textsmall">Yashodhara Thoyakkat: +91 8826138814</div>
                 
             </div>
             <div className="container6B">
                 <div className="textbig">We are on Social Media</div>
                 <div className="textsmall">
                   <a onclick='handleclick();' href="#" className="fa fa-facebook"></a>
                   <a onclick='handleclick();' href="#" className="fa fa-twitter"></a>
                   <a onclick='handleclick();' href="#" className="fa fa-google"></a>
                   <a onclick='handleclick();' href="#" className="fa fa-instagram"></a>
                   <div><img src={acmlogo} height="200px" width="300px"/></div>
                 </div>
             
             </div>

             
             <div className="container6C">
                 <div className="textbig">Email Us</div>
                 <div className="textsmall">info.upesacm@gmail.com</div>
                 
             </div>
            
                                   
         </div>
</div>
</div>
  );
}
return(
  <div>
    Loading...
  </div>
);
}

function handleclick(){

};

export default ImgMediaCard;