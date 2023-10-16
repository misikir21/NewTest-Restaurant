import React from 'react';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import {SubHeading} from '../../components'
import { images } from '../../constants';
import './Gallery.css';


const Gallery = () => {
  const scrollref=React.useRef(null)
return ( 
   <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title={"Instagram"}/>
     <h1 className='headtext-cormorant'>Photo</h1>
     <p className='p__opensand' style={{color:"aaa" ,marginTop:"2rem"}}></p>
     <button className='custom__button' type='button'>View More</button> </div>
     <div className='app__gallery-images'>
      <div className='app__gallery_images_contianer' ref={scrollref}></div>
     </div>
     <div className='app__gallery-images_arrow'>
      <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')} />
      <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')} />
     </div>
  
  </div>
);
}
export default Gallery;
