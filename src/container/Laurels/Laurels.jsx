import React from 'react';
import {SubHeading} from '../../components'
import { images,data } from '../../constants';

import './Laurels.css';
const AwardCard=({award:{imgUrl,title,subtitle}})=>
  <div className="app__laurels_awards-cards "> 
   <img src={imgUrl} alt="award image" />
   <div className='app__laurels_awards-card_content'>
    <p className='p__cormorant' style={{color:"#dcca88"}}>{title}</p>
    <p className='p__cormorant'>{subtitle}</p>
   </div>
  </div> 

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding'> 
  <div className='app__wrapper_info'>

  </div>
    <div className='app__wrapper_img'>
    <SubHeading title="Awards & recognition" />
    <h1 className='headtext__cormorant'>Our Laurels</h1>
    <div className='app__laurels_awards'>
      {data.awards.map((award)=><AwardCard award={award} key={award.title}/>)}
    </div>

    </div>
  </div>
);

export default Laurels;
