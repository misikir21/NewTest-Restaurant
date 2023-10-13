import React from 'react';
import {SubHeading} from '../../components'
import {images} from'../../constants'
import './Chef.css'


import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />

    </div> 
    <div className='app__wrapper_info'>
      <SubHeading title="chef's world"/>
      <h1 className='headtext__cormorant'>what we do</h1>
<div className='app__chef-content'>
  <div className='app__chef-content_qoute'>
    <img src={images.quote} alt="qoute" />
    <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam culpa cupiditate. Porro quae iure provident earum, et quaerat eius?</p>
  </div>
  <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, molestias!</p>

</div>
    </div>
  </div>
);

export default Chef;
