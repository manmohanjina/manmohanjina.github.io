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

import resume from "../resume/Manmohan_Jina_resume.pdf";
import { useEffect, useRef } from "react";
import { booleanContext } from "../context/Boolean";
import { useContext } from "react";

export default function Intro() {
  const { toggle, state } = useContext(booleanContext);

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
        "https://drive.google.com/file/d/1Ad_jxJd79WzjLj6B4ODzJCSO7ZVh43pV/view?usp=share_link"
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
      <Box  bg={state? "#4A5568":"#B83280"} >
        <div className="firstbox">
          <Box mt="100px" id="home" className="type" m={"auto"}>
            {" "}
            <Type />
          </Box>
          <Box m="auto">
            <Image
              className="userimg"
              h="300px"
              w="300px"
              borderRadius={"50%"}
              mt="20px"
              src={user}
            />
          </Box>
        </div>

        <Box bg={state?"#4A5568":"#B83280"} textAlign="center" mt="-1px">
          <a href={resume} download>
            {" "}
            <Button
              onClick={hadnelPdf}
              margin={"auto"}
              mb="10px"
              p={5}
              colorScheme={state?"teal":"blackAlpha"}
              variant={state?"ghost":"outline"}
              fontWeight={state?"bold":"bolder"}
              size="lg"
            >
              Resume
            </Button>
          </a>
        </Box>
      </Box>

      <Box bg={state?"#CBD5E0":"#76E4F7"} mt={"-10px"}>
        <Box
          className="text"
          width={["100%", "70%", "50%", "40%"]}
          margin="auto"
          textAlign={"center"}
        >
          <Heading mt="10px" p="10px"  color={state?"black":"yellow.200"} >
            About, MySelf
          </Heading>
          <Text p="10px"  color={state?"black":"yellow.700"}  >
            Full Stack Web Developer skilled in MERN stack who focuses on
            writing clean, elegant and efficient code. I'm a passionate learner
            who's always willing to learn and work across technologies and
            domains. I love to explore new technologies and leverage them to
            solve real-life problems
          </Text>
        </Box>
        <Text color={state?"black":"yellow.200"}  fontSize={"4xl"} width={"100px"} margin="auto">
          Skills
        </Text>

        <Center w="60%" m="auto"  mt='20px' >
          <Grid
            className="img"
            width={["100%", "70%", "50%", "50%"]}
            pb={"40px"}
            templateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            }}
            margin={"auto"}
            gap={10}
          >
            <Image
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              width="100%"
              src={html}
            />
            <Image
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              width="100%"
              src={css}
            />
            <Image
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              width="100%"
              src={js}
            />
            <Image
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              src={react}
            />
            <Image
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              src={redux2}
            />
            <Image
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              src={github}
            />
            <Image
              id="project"
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              src={chakra}
            />
            <Image
              _hover={{
                transition: "transform 0.2s",
                transform: "scale(1.1)",
              }}
              borderRadius={"30%"}
              src={ts3}
            />
          </Grid>
        </Center>
      </Box>
    </>
  );
}
