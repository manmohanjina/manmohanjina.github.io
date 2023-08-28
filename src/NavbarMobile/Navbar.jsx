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
import logo_2 from "../img/logo_2.png";
import { Link } from "react-scroll";
import fw18_0455_Manmohan_singh_jina_resume from "../resume/fw18_0455_Manmohan_jina_resume.pdf";
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

  const handelScroll = () => {
    const show = window.scrollY > 310;
    if (show) {
      setNavbg("appearsolid");
    } else {
      setNavbg("appeartransparent");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handelScroll);
    // console.log("hadnl scroll");
    return () => {
      document.removeEventListener("scroll", handelScroll);
    };
  }, [navbg]);
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
        "https://drive.google.com/file/d/14OPmlBwgIvMJFpKJ6_1GnoaElcE_1kSH/view?usp=sharing"
      );
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [hadnelPdf]);

  return (
    <Box
      style={{ zIndex: 1 }}
      className={navref.current}
      bg={state ? "#051523 " : "#6883bc"}
      h="80px"
      sx={{
        position: "-webkit-sticky",
        position: "fixed",
        top: "0",
      }}
    >
      <Flex gap="20" alignItems={"center"}>
        <Box p="4">
          <Heading size="md" pl={10}>
            {" "}
            <Image width="100%" src={state ? logo1 : logo_2} />
          </Heading>
        </Box>
        <Spacer />

        <ButtonGroup
          className={click ? "nav-menu active" : "nav-menu"}
          mr="100px"
          gap="2"
          
        >
          <button  id="hover-bright" onClick={toggle}>
            {state ? (
              <SunIcon boxSize={6} color="orange.300" />
            ) : (
              <MoonIcon boxSize={6} color="white" />
            )}
          </button>

          <Link to="homei" spy={true} smooth={true} offset={50} duration={1000}>
            <Button
              fontSize={"md"}
              variant="ghost"
              color={state ? "#1B9F97" : "black"}
            >
              HOME
            </Button>
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
            <Button
              fontSize={"md"}
              variant="ghost"
              color={state ? "#1B9F97" : "black"}
            >
              ABOUT
            </Button>
          </Link>

          <Link to="skill" spy={true} smooth={true} offset={50} duration={1000}>
            <Button
              fontSize={"md"}
              variant={"ghost"}
              color={state ? "#1B9F97" : "black"}
            >
              {" "}
              SKILLS
            </Button>
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
          >
            <Button
              fontSize={"md"}
              variant={"ghost"}
              color={state ? "#1B9F97" : "black"}
            >
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
            <Button
              fontSize={"md"}
              variant="ghost"
              color={state ? "#1B9F97" : "black"}
            >
              CONTACT
            </Button>
          </Link>

          <a
            href={fw18_0455_Manmohan_singh_jina_resume}
            download="fw18_0455_Manmohan_singh_jina_resume"
            target={"_blank"}
          >
            {" "}
            <Button
              fontSize={"md"}
              onClick={hadnelPdf}
              variant="ghost"
              color={state ? "#1B9F97" : "black"}
              id="home"
            >
              RESUME
            </Button>
          </a>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}
