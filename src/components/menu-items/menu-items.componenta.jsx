import React from 'react'; 
import './menu-items.style.scss';
import { withRouter } from 'react-router-dom';
import '../directory/directory.components';
//import { blue, green } from 'color-name';

const MenuItem = ({ title,imageSrc,size,history,linkUrl,match}) => (
<div  className ={`${size} menu-item`} onClick ={()=> history.push(`${match.url}${linkUrl}`)}>

         <div 

          className='background-image'
          style={{
             backgroundImage: 'url('+require("../../images/"+imageSrc)+')'             
          }}/>


    <div className='content'>
         <h1 className ='title'>{title.toUpperCase()}</h1>
         <span className='subtitle' >SHOP NOW</span>
    </div>
</div>
);
export default withRouter(MenuItem);
