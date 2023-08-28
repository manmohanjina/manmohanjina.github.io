import "./App.css";

import { Box, Center, Divider, useMediaQuery } from "@chakra-ui/react";

import NavbarMobile from "./NavbarMobile/NavbarMobile";

import Navbar from "./NavbarMobile/Navbar";
import Intro from "./myself/Intro";
import Project from "./Project/Project";
import Contact from "./contact/Contact";
import Githubstat from "./githubstats/Githubstat";
import Slickusage from "./slickUsage/Slickuse";
import Experience from "./experince/experince";

function App() {
  const [isSmallerThan800] = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <Box id="about"></Box>

      <Box id="container" >
        {isSmallerThan800 ? <Navbar /> : <NavbarMobile />}
        <Intro />

        <Project />
        <Githubstat />
        <Experience/>
        <Contact />
      
      </Box>
    </>
  );
}

export default App;
