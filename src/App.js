
import './App.css';

import {Box,Center,useMediaQuery} from "@chakra-ui/react"

import NavbarMobile from './NavbarMobile/NavbarMobile';

import Navbar from './NavbarMobile/Navbar';
import Intro from './myself/Intro';
import Project from './Project/Project';
import Contact from './contact/Contact';
import Githubstat from './githubstats/Githubstat';

 
function App() {
 
console.log("hello");

  const [isSmallerThan800] = useMediaQuery('(min-width: 1200px)')
 
 return <>
<Box id='about' ></Box>
<Center > 
 <Box>
{
  isSmallerThan800?<Navbar/>:<NavbarMobile/>
}
<Intro/>

<Project/>
<Githubstat/>
<Contact/>


</Box> 

</Center>
</>
   
}

export default App;
