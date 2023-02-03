import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdMail,
} from "react-icons/md";

import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";
import { booleanContext } from "../context/Boolean";
import { useContext } from "react";
import "./cont.css";

export default function Contact() {
  const { toggle, state } = useContext(booleanContext);

  return (
    <Box className="main-cont-contact" id='contact' >
      <Container
        id="contact"
        bg={state ? "#051523" : "black"}
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
      >
        <Flex className="flex-contact">
          <Box
            bg={!state ? "orange.300" : "#0D1C2E"}
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box color={"#b1977c"}>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#b1977c">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#b1977c"
                          _hover={{ border: "2px solid #b1977c" }}
                          leftIcon={<MdPhone color="#b1977c" size="20px" />}
                        >
                          +91-8650003502
                        </Button>
                        <Button
                          size="md"
                          height="60px"
                          width="270px"
                          variant="ghost"
                          color="#b1977c"
                          _hover={{ border: "2px solid #b1977c" }}
                          leftIcon={<MdEmail color="#b1977c" size="20px" />}
                        >
                          Manish63singh@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#b1977c"
                          _hover={{ border: "2px solid #b1977c" }}
                          leftIcon={
                            <MdLocationOn color="#b1977c" size="20px" />
                          }
                        >
                          Kashipur,Uttrakhand
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <a href="">
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          bg={"white"}
                          isRound={true}
                          color="#b1977c"
                          _hover={{ bg: "#0E9D97" }}
                          icon={<MdMail size="28px" />}
                        />
                      </a>
                      <a href="https://github.com/manmohanjina" target="_blank">
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          bg="white"
                          color="#b1977c"
                          _hover={{ bg: "#0E9D97" }}
                          icon={<BsGithub size="28px" />}
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/manmohan-jina-6a43a6260/"
                        target={"_blank"}
                      >
                        {" "}
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound="true"
                          bg="white"
                          color="#b1977c"
                          _hover={{ bg: "#0E9D97" }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </a>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box borderRadius="lg" bg="blackAlpha.100">
                    <Box m={8} color="light">
                      <VStack spacing={5}>
                        <form
                          className="form-start"
                          action="https://getform.io/f/28e2829c-ed3f-4f52-bd11-a45939127df0"
                          method="POST"
                        >
                          <Input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name Please"
                          />
                          <Input
                            type="text"
                            name="email"
                            placeholder="Enter Your E-mail Please"
                            className="input-email"
                          />
                          <Textarea
                            name="massage"
                            placeholder="Enter Your Massage"
                            rows="10"
                            className="text-area"
                          ></Textarea>
                          <button
                            className="form-btn"
                            style={{
                              background: "#0D1C2E",
                              color: "#b1977c",
                              border: "1px solid #0D74FF",
                              borderRadius: "5px",
                              padding: "10px",
                              margin: "auto",

                              display: "flex",
                              marginTop: "1%",
                            }}
                          >
                            Let's talk
                          </button>
                        </form>
                        <VStack />
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
