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
  Divider,
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
    <Box
      className="main-cont-contact"
      id="contact"
      bg={state ? "#051523" : "#79a7d3"}
    >
      <Container
        bg={state ? "#051523" : "#6883bc"}
        maxW="full"
        overflow="hidden"
      >
        <Flex className="flex-contact">
          <Box
            bg={!state ? "#6883bc" : "#0D1C2E"}
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 5 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4} border={"0px solid teal"}>
              <Wrap border="0px solid yellow">
                <WrapItem border="0px solid red">
                  <Box color={state ? "#b1977c" : "black"}>
                    <Heading>Contact</Heading>
                    <Text
                      mt={{ sm: 3, md: 3, lg: 5 }}
                      color={state ? "#b1977c" : "black"}
                    >
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={state ? "#b1977c" : "black"}
                          _hover={{
                            border: state
                              ? "2px solid #b1977c"
                              : "2px solid black",
                          }}
                          leftIcon={
                            <MdPhone
                              color={state ? "#b1977c" : "black"}
                              size="20px"
                            />
                          }
                        >
                          +91-8650003502
                        </Button>
                        <Button
                          size="md"
                          height="60px"
                          width="270px"
                          variant="ghost"
                          color={state ? "#b1977c" : "black"}
                          _hover={{
                            border: state
                              ? "2px solid #b1977c"
                              : "2px solid black",
                          }}
                          leftIcon={
                            <MdEmail
                              color={state ? "#b1977c" : "black"}
                              size="20px"
                            />
                          }
                        >
                          Manish63singh@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={state ? "#b1977c" : "black"}
                          _hover={{
                            border: state
                              ? "2px solid #b1977c"
                              : "2px solid black",
                          }}
                          leftIcon={
                            <MdLocationOn
                              color={state ? "#b1977c" : "black"}
                              size="20px"
                            />
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
                          color={state ? "#b1977c" : "black"}
                          _hover={{ bg: state ? "#0E9D97" : "blue.300" }}
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
                          color={state ? "#b1977c" : "black"}
                          _hover={{ bg: state ? "#0E9D97" : "blue.300" }}
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
                          color={state ? "#b1977c" : "black"}
                          _hover={{ bg: state ? "#0E9D97" : "blue.300" }}
                          icon={<BsLinkedin size="28px" />}
                        />
                      </a>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box borderRadius="lg" bg={state ? "" : "#6883BC"}>
                    <Box m={8} color="light">
                      <VStack spacing={5}>
                        <form
                          className="form-start"
                          style={{
                            backgroundColor: state ? "#0D1C2E" : "#6883BC",
                          }}
                          action="https://getform.io/f/28e2829c-ed3f-4f52-bd11-a45939127df0"
                          method="POST"
                        >
                          <Input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name Please"
                            bg={state ? "#051523" : "white"}
                            color={state ? "red" : "blue.400"}
                          />
                          <Input
                            type="text"
                            name="email"
                            placeholder="Enter Your E-mail Please"
                            className="input-email"
                            bg={state ? "#051523" : "white"}
                            color={state ? "red" : "blue.400"}
                          />
                          <Textarea
                            name="massage"
                            placeholder="Enter Your Massage"
                            rows="10"
                            className="text-area"
                            bg={state ? "#051523" : "white"}
                            color={state ? "red" : "blue.400"}
                          ></Textarea>
                          <button
                            className="form-btn"
                            style={{
                              background: state ? "#0D1C2E" : "white",
                              color: state ? "#b1977c" : "red",
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
      <Box
        p={{ base: 5, md: 10, lg: 4 }}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        gap={{ base: "5px", md: "0px", lg: "15px" }}
        mb={10}
      >
        <Text
          fontSize={{ base: "20px", md: "xl", lg: "2xl" }}
          as="i"
          alignItems={"center"}
          color={state ? "red" : "white"}
        >
          © 2023 design & built by Manmohan Singh Jina
        </Text>
        <Divider color={"white"} />
      </Box>
    </Box>
  );
}
