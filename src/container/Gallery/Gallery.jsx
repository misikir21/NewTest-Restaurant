import React from 'react';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import {SubHeading} from '../../components'
import { images } from '../../constants';
import './Gallery.css';
const Galleryimges=[images.gallery01,images.gallery02,images.gallery03,images.gallery04]

const Gallery = () => {
  const scrollref=React.useRef(null);
  const scroll=(direction)=>{
    const {current}=scrollref;
    if(direction ==='left'){
    current.scrolleft -=300;
  }
  else {
    current.scrolleft +=300
  }
}
return ( 
   <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title={"Instagram"}/>
     <h1 className='headtext-cormorant'>Photo</h1>
     <p className='p__opensand' style={{color:"aaa" ,marginTop:"2rem"}}></p>
     <button className='custom__button' type='button'>View More</button> </div>
     <div className='app__gallery-images'>
      <div className='app__gallery_images_contianer' ref={scrollref}>
        //loping throug gallery object
        { Galleryimges.map((images,index)=>(
         <div className='app__galler-images_card flex__center' key={`Galleryimges-${index + 1}`}>
         <img src={images} alt="gallery" />
         <BsInstagram className='gallery__images-icon'/>
         </div> 
        ))}
      </div>
     </div>
     <div className='app__gallery-images_arrow'>
      <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')} />
      <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')} />
     </div>
  
  </div>
);
}
export default Gallery;
