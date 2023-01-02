import {
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Flex,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-scroll";
import Manmohan_Jina_resume from "../resume/Manmohan_Jina_resume.pdf";
import { booleanContext } from "../context/Boolean";
import {SunIcon,MoonIcon} from "@chakra-ui/icons"

export default function Navbar() {



const{toggle,state}=useContext(booleanContext)


  const toast = useToast();

  const timerRef = useRef(null);

  const id = "test-toast";

  const [click, setClick] = useState(false);

  const [navbg, setNavbg] = useState("appeartransparent");
  const navref = useRef();
  navref.current = navbg;

  useEffect(() => {
    const handelScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavbg("appearsolid");
      } else {
        setNavbg("appeartransparent");
      }
    };

    document.addEventListener("scroll", handelScroll);
    return () => {
      document.removeEventListener("scroll", handelScroll);
    };
  }, []);
  const hadnelPdf = () => {
    if (!toast.isActive(id)) {
      toast({
        id,
        title: "You'll be Redirected Soon",
        description: "download will start",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    timerRef.current && clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      window.open(
        "https://drive.google.com/file/d/1Ad_jxJd79WzjLj6B4ODzJCSO7ZVh43pV/view?usp=share_link"
      );
      console.log(timerRef.current, "2");
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [timerRef.current]);

  return (
    <Box style={{zIndex:1}}
      className={navref.current}
     
      h="80px"
      sx={{
        position: "-webkit-sticky",
       position: "sticky",
        top: "0",
      }}
    >
      <Flex gap="20" alignItems={"center"}   >
        <Box p="2">
          <Heading size="md" pl={10}>
            {" "}
            <Image borderRadius={"50%"} width="80px" src={logo} />
          </Heading>
        </Box>
        <Spacer />

        <ButtonGroup
        
          className={click ? "nav-menu active" : "nav-menu"}
          mr="100px"
          gap="2"
        >
        <button onClick={toggle} >{state?<MoonIcon boxSize={6} />:<SunIcon boxSize={6} color="yellow"  />}</button>
          
          <Link to="home" spy={true} smooth={true} offset={50} duration={1000}>
            <Button variant="outline" colorScheme="teal">
              home
            </Button>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
            <Button variant="outline" colorScheme="teal">
              About
            </Button>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            <Button variant="outline" colorScheme="teal">
              {" "}
              Projects
            </Button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            {" "}
            <Button variant="outline" colorScheme="teal">
              Contact
            </Button>
          </Link>

         <a href={Manmohan_Jina_resume} download="Manmohan_Jina_resume"  > <Button onClick={hadnelPdf} variant="outline" colorScheme="teal">
            Resume
          </Button></a>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
