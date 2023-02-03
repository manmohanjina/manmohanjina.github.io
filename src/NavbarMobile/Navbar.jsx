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
import logo1 from "../img/logo1.png";
import { Link } from "react-scroll";
import Manmohan_Jina_resume from "../resume/Manmohan_Jina_resume.pdf";
import { booleanContext } from "../context/Boolean";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { toggle, state } = useContext(booleanContext);

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
        "https://drive.google.com/file/d/10rR7sbEEF9vfghU_8mRlxfjMMxVNEGBJ/view?usp=sharing"
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
    <Box
      style={{ zIndex: 1 }}
      className={navref.current}
      h="80px"
      sx={{
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
      }}
    >
      <Flex gap="20" alignItems={"center"}>
        <Box p="4">
          <Heading size="md" pl={10}>
            {" "}
            <Image width="100%" src={logo1} />
          </Heading>
        </Box>
        <Spacer />

        <ButtonGroup
          className={click ? "nav-menu active" : "nav-menu"}
          mr="100px"
          gap="2"
        >
          <button onClick={toggle}>
            {state ? (
              <SunIcon boxSize={6} color="orange.300" />
            ) : (
              <MoonIcon boxSize={6} color="gray.500" />
            )}
          </button>

          <Link to="home" spy={true} smooth={true} offset={50} duration={1000}>
            <Button fontSize={"md"} variant="ghost" color="#1B9F97">
              HOME
            </Button>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
            <Button fontSize={"md"} variant="ghost" color="#1B9F97">
              ABOUT
            </Button>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            <Button fontSize={"md"} variant={"ghost"} color="#1B9F97">
              {" "}
              PROJECTS
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
            <Button fontSize={"md"} variant="ghost" color="#1B9F97">
              CONTACT
            </Button>
          </Link>

          <a href={Manmohan_Jina_resume} download="Manmohan_Jina_resume">
            {" "}
            <Button
              fontSize={"md"}
              onClick={hadnelPdf}
              variant="ghost"
              color="#1B9F97"
            >
              RESUME
            </Button>
          </a>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
