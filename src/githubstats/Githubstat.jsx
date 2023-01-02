import {Box,Center,Image} from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import BooleanState, { booleanContext } from "../context/Boolean"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Githubstat(){

  const {toggle, state}=useContext(booleanContext)

  useEffect(() => {
    Aos.init({duration:2000})
   },[])


    return <>
<Center bg={state?'#4A5568':"cyan.300"}      >
    
<Box     mt='50px' mb={'50px'} display={'flex'}  m='30px' p='30px'  alignItems={'center'}  justifyContent='space-evenly' w='full' className="github-stat"  >
  <Box    data-aos='fade-up' >
  <Image  src='https://github-readme-streak-stats.herokuapp.com/?user=manmohanjina&' />
  </Box>

  <Box    data-aos='fade-up' >
    <Image src='https://github-readme-stats.vercel.app/api/top-langs?username=manmohanjina&show_icons=true&locale=en&layout=compact'  />
</Box>

  <Box    data-aos='fade-up' >
    <Image   src='https://github-readme-stats.vercel.app/api?username=manmohanjina&show_icons=true&locale=en'/>
  </Box>
</Box>



</Center>

    </>

}