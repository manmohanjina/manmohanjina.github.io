import "./App.css";

import { Box, Center, useMediaQuery } from "@chakra-ui/react";

import NavbarMobile from "./NavbarMobile/NavbarMobile";

import Navbar from "./NavbarMobile/Navbar";
import Intro from "./myself/Intro";
import Project from "./Project/Project";
import Contact from "./contact/Contact";
import Githubstat from "./githubstats/Githubstat";
import Slickusage from "./slickUsage/Slickuse";

function App() {
  const [isSmallerThan800] = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <Box id="about"></Box>

      <Box>
        {isSmallerThan800 ? <Navbar /> : <NavbarMobile />}
        <Intro />

        <Project />
        <Githubstat />
        <Contact />
      </Box>
    </>
  );
}

export default App;
