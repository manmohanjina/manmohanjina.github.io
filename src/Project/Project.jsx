import {
  Box,
  Image,
  Heading,
  Text,
  Container,
  Button,
  useMediaQuery,
  Grid,
  Center,
  Stack,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  Badge,
  GridItem,
  Highlight,
} from "@chakra-ui/react";
import Aos from "aos";

import "aos/dist/aos.css";
import "./project.css";
import recutie from "../img/recutie.png";
import nordstorm from "../img/nordstorm.png";
import medease from "../img/medease.png";
import angelplace from "../img/angelplace.png";
import react2 from "../img/react2.png";
import redux2 from "../img/redux2.png";
import nodejs from "../img/nodejs.png";
import html from "../img/html.png";
import chakra from "../img/chakra.jpg";
import js from "../img/js.jpg";
import css from "../img/css.png";
import mongo from "../img/mongo.png";
import "../index.css";
import BooleanState, { booleanContext } from "../context/Boolean";
import { useContext, useEffect } from "react";
import { DiGithubBadge, DiHtml5 } from "react-icons/di";
import { BsFillEyeFill } from "react-icons/bs";
import { SiCsswizardry, SiJavascript } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { SiMongodb, SiRedux, SiChakraui, SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Project() {
  const [smallerDisplay] = useMediaQuery("(min-width: 400px)");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { toggle, state } = useContext(booleanContext);

  const projectArr = [
    {
      projectName: "NORDSTROM",
      techImg: [
        <DiHtml5 size={"40%"} />,
        <TbBrandCss3 size={"40%"} />,
        <SiJavascript size={"40%"} />,
      ],
      projectImg: nordstorm,
      desc: "  A Website build bridge between Recuuiter and Recruitee  Manupulating of data much eaiser ,hassel fre Work nice to have  this kind of site to manage employee",
      projectLink: "",
      projectGithub: "https://github.com/Devender0014/NordStrom",
    },
    {
      projectName: "RECRUITEE",
      techImg: [
        <DiHtml5 size={"40%"} />,
        <TbBrandCss3 size={"40%"} />,
        <SiJavascript size={"40%"} />,
      ],
      projectImg: recutie,
      desc: " To get hassel free & topNotch Recruitment for your company, this is the best place. We fills the gap between the Recruitee and the employee so that they can get touch with each other and have themaximum benifit out of it",
      projectLink: "https://inquisitive-kashata-a201b3.netlify.app/",
      projectGithub: "https://github.com/sumitraghavwork/bashful-form-6526",
    },
    {
      projectName: "ANGELPLACE",
      techImg: [
        <DiReact size={"80%"} />,
        <SiMongodb size={"80%"} />,
        <SiChakraui size={"80%"} />,
        <DiNodejsSmall size={"80%"} />,
        <SiRedux size={"80%"} />,
        <SiExpress size={"80%"} />,
      ],
      projectImg: angelplace,
      desc: "India has overcome china interm of population, now we are the   world's largest & youngest population,so seeing the Statistics our  coustomer base is already there , and for approching them we have   angleplace website",
      projectLink: "https://sunny-meerkat-5e4a30.netlify.app/",
      projectGithub:
        "https://github.com/Codex-Swapnil1/overconfident-door-5197",
    },
    {
      projectName: "MEDEASE",
      techImg: [
        <DiReact size={"30%"} />,

        <SiChakraui size={"30%"} />,

        <SiRedux size={"30%"} />,
      ],
      projectImg: medease,
      desc: " In Today's Era where every non-essential thing is getting delivered to Your doorstep within few minutes we have decided to deliver the essential life saving Medicens at your Doorstep within     same time.",
      projectLink: "https://jolly-cat-2cb8fa.netlify.app/",
      projectGithub: "https://github.com/kshivang80/maddening-neck-4975",
    },
  ];

  const [isSmaller] = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <HStack id="project" className="project-main-c" flexDirection="column">
        <Box w={{ sm: "100%", base: "80%", md: "100%" }}>
          <Text
            align={"center"}
            alignItems={"center"}
            fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
            fontWeight={"semibold"}
            color={"#B0967B"}
            p={10}
          >
            <Highlight query={"CREATIVE"} styles={{ color: "red" }}>
              MY CREATIVE PROJECTS
            </Highlight>
          </Text>
        </Box>

        {isSmaller ? (
          <Box className="outside-map-box">
            {projectArr.map((elm) => {
              return (
                <Box key={elm.projectName} className="inside-map-stack">
                  <HStack gap={20}>
                    <Box
                      width={{ sm: "100%", base: "80%", lg: "70%" }}
                      mt="30px"
                    >
                      <Image
                        p={5}
                        border="5px solid #B0967B"
                        src={elm.projectImg}
                      />
                    </Box>
                    <VStack
                      p={{ base: 3, md: 5 }}
                      w={{ sm: "100%", base: "40%", md: "30%" }}
                      m="30px"
                      gap={15}
                    >
                      <Text color={"#B0967B"} as="b" fontSize={"3xl"}>
                        {elm.projectName}
                      </Text>
                      <Text color={"#B0967B"} as="b" fontSize={"xl"}>
                        {elm.desc}
                      </Text>
                      <HStack justifyContent={"space-evenly"}>
                        <Text fontSize={"xl"} as="b" color={"white"}>
                          Tech-Stack
                        </Text>
                        <HStack
                          data-aos="fade-right"
                          data-aos-anchor-placement="top-center"
                          w="full"
                          color={"#B0967B"}
                        >
                          {elm.techImg.map((elm) => (
                            <div key={elm.type}>{elm}</div>
                          ))}
                        </HStack>
                      </HStack>
                    </VStack>
                  </HStack>
                  <Box
                    align="center"
                    display={"flex"}
                    justifyContent="flex-end"
                    mt="20px"
                    p={3}
                  >
                    <Box display={"flex"} justifyContent="space-evenly" w="30%">
                      <Box w="30%">
                        <a href={elm.projectLink}>
                          {" "}
                          <Button
                            w="full"
                            borderRadius={20}
                            color={"#B0967B"}
                            _hover={{
                              bg: "#0A8B97",
                              color: "white",
                              transition: "transform 0.2s",
                              transform: "scale(1.1)",
                            }}
                          >
                            <BsFillEyeFill size={"80%"} />
                          </Button>
                        </a>
                      </Box>
                      <Box w="30%">
                        {" "}
                        <a href={elm.projectGithub}>
                          {" "}
                          <Button
                            onClick={() => <Link to={elm.projectGithub} />}
                            borderRadius={20}
                            w="full"
                            color={"#B0967B"}
                            _hover={{
                              bg: "#0A8B97",
                              color: "white",
                              transition: "transform 0.2s",
                              transform: "scale(1.1)",
                            }}
                          >
                            <DiGithubBadge size={"80%"} />
                          </Button>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        ) : (
          <Center bg="#051523">
            <Box
              className="project-main-box"
              w={{ sm: "100%", base: "80%", md: "100%" }}
            >
              <Grid
                w={{ sm: "100%", md: "50%", lg: "80%" }}
                m="auto"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(1,1fr)",
                  lg: "repeat(2,1fr)",
                }}
                gridGap={10}
              >
                {projectArr.map((elm) => {
                  return (
                    <Box
                      key={elm.projectName}
                      className="project-grid-container"
                      m="auto"
                    >
                      <GridItem w={{ sm: "100%", md: "100%", lg: "100%" }}>
                        <Box
                          mt="20px"
                          p={{ base: "3", md: 4 }}
                          spacing={{ base: "0", md: 4 }}
                          align="center"
                        >
                          <Image
                            border={"5px solid white"}
                            p={5}
                            src={elm.projectImg}
                          />
                        </Box>
                        <Box
                          align={"center"}
                          p={{ base: 3, sm: 4, lg: 6 }}
                          w={{ base: "100%", sm: "100%", md: "100%" }}
                        >
                          <Text
                            as={"b"}
                            color={"#B0967B"}
                            fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
                          >
                            {elm.projectName}
                          </Text>
                        </Box>
                        <Box p={5}>
                          <Text as={"b"} fontStyle={"italic"} color="gray.100">
                            {" "}
                            {elm.desc}
                          </Text>
                        </Box>
                        <HStack
                          w={{ sm: "", base: "80%", lg: "80%" }}
                          align={"center"}
                          m="auto"
                          justifyContent={"space-around"}
                          p={5}
                          color={"#B0967B"}
                          gap={3}
                        >
                          <Text as={"b"}>Tech stack</Text>
                          <HStack w={{ sm: "100%", base: "300%", lg: "100%" }}>
                            {elm.techImg.map((elm) => {
                              return <div key={elm.type}> {elm}</div>;
                            })}
                          </HStack>
                        </HStack>
                      </GridItem>
                      <HStack justifyContent={"center"} p={5} gap="10px">
                        <a href={elm.projectLink}>
                          <Button
                            color={"blue.500"}
                            _hover={{ bg: "white", color: "orange" }}
                          >
                            <BsFillEyeFill size={"80%"} />
                          </Button>
                        </a>
                        <a href={elm.projectGithub}>
                          {" "}
                          <Button
                            color={"blue.500"}
                            _hover={{ bg: "white", color: "orange" }}
                          >
                            <DiGithubBadge size={"80%"} />
                          </Button>
                        </a>
                      </HStack>
                    </Box>
                  );
                })}
              </Grid>
            </Box>
          </Center>
        )}
      </HStack>
    </>
  );
}
