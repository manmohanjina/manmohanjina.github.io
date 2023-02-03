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
} from "@chakra-ui/react";

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
import resume from "../resume/Manmohan_Jina_resume.pdf";
import { useEffect, useRef } from "react";
import { booleanContext } from "../context/Boolean";
import { useContext } from "react";

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
        "https://drive.google.com/file/d/10rR7sbEEF9vfghU_8mRlxfjMMxVNEGBJ/view?usp=sharing"
      );
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [timerRef.current]);

  return (
    <>
      <Box bg={state ? "#051523" : "black"} w="full">
        <div className="firstbox">
          <Box mt="100px" id="home" className="type" m={"auto"}>
            {" "}
            <Type />
          </Box>
          <Box m="auto">
            <Image
              className="userimg"
              h="200px"
              w="200px"
              borderRadius={"50%"}
              mt="20px"
              src={user}
            />
          </Box>
        </div>

        <Box bg={state ? "#051523" : "black"} textAlign="center" mt="-1px">
          <a href={resume} download>
            {" "}
            <Button
              onClick={hadnelPdf}
              margin={"auto"}
              mb="10px"
              p={5}
              colorScheme={"whiteAlpha"}
              fontWeight={state ? "bold" : "bolder"}
              color={state ? "white" : "orange.300"}
              size="lg"
            >
              Resume
            </Button>
          </a>
        </Box>
      </Box>

      <Box bg={state ? "#051523" : "black"} mt={"-10px"} w="100%">
        <Box
          className="text"
          width={["80%", "70%", "50%", "70%"]}
          margin="auto"
          textAlign={"center"}
          p="5%"
        >
          <Heading mt="10px" color={state ? "red" : "yellow.200"} p={5}>
            MYSELF
          </Heading>
          <Text
            as={"b"}
            fontSize={{ sm: "xl", base: "md", md: "xl", lg: "3xl" }}
            color={state ? "#B0967B" : "orange.300"}
          >
            Full Stack Web Developer skilled in MERN stack who focuses on
            writing clean, elegant and efficient code. I'm a passionate learner
            who's always willing to learn and work across technologies and
            domains. I love to explore new technologies and leverage them to
            solve real-life problems
          </Text>
        </Box>
        <Text
          color={state ? "#B0967B" : "yellow.200"}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          margin="auto"
          width={{ sm: "90%", base: "90%" }}
          fontWeight={"bold"}
          textAlign="center"
          p={5}
        >
          <Highlight query={"SKILLS"} styles={{ color: "red" }}>
            SKILLS & TOOLS
          </Highlight>
        </Text>

        <Center w={{ sm: "50%", base: "100%", lg: "30%" }} m="auto" mt="20px">
          <Grid
            className="img"
            pb={"40px"}
            templateColumns={{
              base: "repeat(4,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            margin={"auto"}
            gap={10}
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
