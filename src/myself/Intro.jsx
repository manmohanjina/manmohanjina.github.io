import {
  Box,
  Image,
  Button,
  Heading,
  Text,
  Grid,
  useToast,
  useEditable,
  Center,
  Highlight,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import "../fonts/fonts.css"

import user from "../img/user2.png";
import redux2 from "../img/redux2.png";
import react from "../img/react2.png";
import github from "../img/github.png";
import css from "../img/css.png";
import chakra from "../img/chakra.jpg";
import js from "../img/js.jpg";
import html from "../img/html.png";
import Type from "../typeCompo/Type";
import ts3 from "../img/ts3.png";
import thunder from "../img/thunder.png";
import giticon from "../img/giticon.png";
import tailwind from "../img/tailwind.png";
import vscode from "../img/vscode.jpeg";
import "./intro.css";
import fw18_0455_Manmohan_singh_jina_resume from "../resume/fw18_0455_Manmohan_jina_resume.pdf";
import { useEffect, useRef } from "react";
import { booleanContext } from "../context/Boolean";
import { useContext } from "react";
import { RiGithubFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Intro() {
  const { toggle, state } = useContext(booleanContext);

  const imgarr = [
    redux2,
    html,
    css,
    js,
    react,
    chakra,
    thunder,
    vscode,
    giticon,
    tailwind,
    github,
    ts3,
  ];

  const toast = useToast();

  const timerRef = useRef(null);

  const id = "test-toast";

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
        "https://drive.google.com/file/d/12G_A94d7dMVYmQcVlVoPszhXj0IopJvp/view?usp=sharing"
      );
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [timerRef.current]);
  const [isSmaller] = useMediaQuery("(min-width: 1200px)");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Box id="homei" bg={state ? "#051523" : "#79a7d3"} w="100%">
        {isSmaller ? (
          <Flex
            justifyContent={"space-evenly"}
            alignItems="center"
            h="20%"
            zIndex={1}
            position="fixed"
            top="60%"
            left="1%"
            flexDirection={"column"}
          >
            <a href="https://github.com/manmohanjina " target={"_blank"}>
              {""}
              <Button
                border={state ? "2px solid red" : "2px solid black"}
                borderRadius="50%"
                variant={"ghost"}
                p={-1}
              >
                <RiGithubFill color={state ? "red" : "black"} size="100%" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/manmohan-jina-6a43a6260/"
              target={"_blank"}
            >
              <Button
                p={1}
                overflow="hidden"
                border={state ? "2px solid red" : "2px solid black"}
                variant={"ghost"}
                borderRadius="50%"
              >
                <ImLinkedin2 size="full" color={state ? "red" : "black"} />
              </Button>
            </a>
          </Flex>
        ) : null}

        <div className="firstbox">
          <Box mt="100px" className="type" m={"auto"}>
            {" "}
            <Type />
          </Box>
          <Box
            data-aos="flip-up"
            data-aos-anchor-placement="top-center"
            m="auto"
            p={10}
            borderRadius={5}
          >
            <Image
              className="userimg"
              h={{ base: "250px", md: "300px", lg: "300px" }}
              mt="20px"
              borderRadius={"8%"}
              src={user}
            />
          </Box>
        </div>

        <Box bg={state ? "#051523" : "#79a7d3"} textAlign="center" mt="-1px">
          <a href={fw18_0455_Manmohan_singh_jina_resume} download={"fw18_0455_Manmohan_singh_jina_resume"}>
            {" "}
            <Button
              onClick={hadnelPdf}
              margin={"auto"}
              mb="10px"
              p={5}
              colorScheme={state ? "whiteAlpha" : "blackAlpha"}
              fontWeight={state ? "bold" : "bolder"}
              color={state ? "white" : "#28324B"}
              size="lg"
            >
              Resume
            </Button>
          </a>
        </Box>
      </Box>

      <Box bg={state ? "#051523" : "#79a7d3"} mt={"-10px"} w="100%">
        <Box className="text" margin="auto" textAlign={"center"} p="5%">
          <Heading mt="10px" color={state ? "red" : "black"} p={5}>
            MYSELF
          </Heading>
          <Text
          
            fontSize={{ sm: "xl", base: "md", md: "xl", lg: "3xl" }}
            color={state ? "#B0967B" : "black"}
             id="skill"
             fontFamily={"mona"}
          >
            Full Stack Web Developer skilled in MERN stack who focuses on
            writing clean, elegant and efficient code. I'm a passionate learner
            who's always willing to learn and work across technologies and
            domains. I love to explore new technologies and leverage them to
            solve real-life problems
          </Text>
        </Box>
        <Text
          id="skills"
          color={state ? "#B0967B" : "#322514"}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          margin="auto"
          width={{ sm: "90%", base: "90%" }}
          
          textAlign="center"
          p={5}
        >
          <Highlight
            query={"SKILLS"}
            styles={{ color: state ? "red" : "#322514" }}
          >
            SKILLS & TOOLS
          </Highlight>
        </Text>

        <Center
          _hover={{ cursor: "pointer" }}
          w={{ base: "70%", md: "50%", lg: "50%" }}
          m="auto"
          mt="20px"
        >
          <Grid
            className="img"
            pb={"40px"}
            templateColumns={{
              base: "repeat(3,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(6,1fr)",
            }}
            margin={"auto"}
            gap={{ base: "5", md: "9", lg: "10" }}
          >
            {imgarr.map((elm) => (
              <Box className="map-img" key={elm}>
                <Image
                  // border={"10px solid red"}
                  _hover={{
                    transition: "transform 0.2s",
                    transform: "scale(1.1)",
                  }}
                  borderRadius={"30%"}
                  src={elm}
                />
              </Box>
            ))}
          </Grid>
        </Center>
      </Box>
    </>
  );
}
