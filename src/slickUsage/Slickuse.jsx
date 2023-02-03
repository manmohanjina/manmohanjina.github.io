import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import img1 from "../projectImg/img1.png"
import img2 from "../projectImg/img2.png"
import img3 from "../projectImg/img3.png"
import img4 from "../projectImg/img4.png"
import img5 from "../projectImg/img5.png"

import "./home.css"
import { HStack } from "@chakra-ui/react";


export default function Slickusage(){

  
 
  const arr=[img1,img2,img3,img4,img5]

  const settings = {
    dots: true,
    
 
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return<>
   <HStack>
<Slider {...settings} >
  <div><img src={img1} /></div>
  <div><img src={img1} /></div>
  <div><img src={img1} /></div>
  <div><img src={img1} /></div>
</Slider>

   </HStack>
  
  </>

    
}