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
  Divider,
} from "@chakra-ui/react";
import Aos from "aos";

import "aos/dist/aos.css";
import "./project.css";
import recutie from "../img/recutie.png";
import nordstorm from "../img/nordstorm.png";
import medease from "../img/medease.png";
import angelplace from "../img/angelplace.png";
import findgitrepo from "../img/findgitrepo.png";
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
import { useContext, useEffect, useState } from "react";
import { DiGithubBadge, DiHtml5 } from "react-icons/di";
import { BsFillEyeFill } from "react-icons/bs";
import { SiCsswizardry, SiJavascript } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { SiMongodb, SiRedux, SiChakraui, SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";
import { ImStarFull } from "react-icons/im";

import { FaReact } from "react-icons/fa";
import { GiIceCreamCone } from "react-icons/gi";

export default function Project() {
  const [smallerDisplay] = useMediaQuery("(min-width: 400px)");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { toggle, state } = useContext(booleanContext);

  const projectArr = [
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
      tag: "vanillajs",
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
      tag: "react",
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
      tag: "fullstack",
    },
    // {
    //   projectName: "NORDSTROM",
    //   techImg: [
    //     <DiHtml5 size={"40%"} />,
    //     <TbBrandCss3 size={"40%"} />,
    //     <SiJavascript size={"40%"} />,
    //   ],
    //   projectImg: nordstorm,
    //   desc: "Clone of Nordstorm we created at very begining of our learning phase , it's an ecommerce website suitable for every age group so they can select clothing for themself or for there loved ones.",
    //   projectLink: "https://gleaming-lamington-419754.netlify.app/",
    //   projectGithub: "https://github.com/Devender0014/NordStrom",
    //   tag: "vanillajs",
    // },
    {
      projectName: "Find Github repo",
      techImg: [
        <DiReact size={"30%"} />,

        <SiChakraui size={"30%"} />,

        <SiRedux size={"30%"} />,
      ],
      projectImg: findgitrepo,
      desc: " Find the most stared repo on Github by simply selecting and searching the repo you want easily, it has two views grid and flex so adjust accoring to your ease.",
      projectLink: "https://mock-13-theta.vercel.app/",
      projectGithub: "",
      tag: "react",
    },
  ];
  const [data, setdata] = useState([]);

  const [isSmaller] = useMediaQuery("(min-width: 1200px)");
  if (data.length === 0) {
    setdata(projectArr);
  }

  const handelIdsetter = (id) => {
    console.log(id);

    if (id === "all") {
      setdata(projectArr);
    } else {
      let newarr = projectArr.filter((elm) => {
        return elm.tag === id;
      });

      setdata(newarr);
    }

    // if (e.target.value === "all") {
    //   setdata(projectArr);
    // } else {
    //   let newarr = projectArr.filter((elm) => elm.tag === e.target.value);

    //   setdata(newarr);
    // }
  };

  const btnarr = [
    {
      name: "all",
      value: "all",
      ic: <ImStarFull color={state ? "red" : "black"} size="100%" />,
      id: "all",
    },
    {
      name: "mern",
      value: "fullstack",
      ic: <SiMongodb color={state ? "red" : "black"} size="100%" />,
      id: "fullstack",
    },

    {
      name: "react",
      value: "react",
      ic: <FaReact color={state ? "red" : "black"} size={"100%"} />,
      id: "react",
    },
    {
      name: "vanillajs",
      value: "vanillajs",
      ic: <GiIceCreamCone color={state ? "red" : "black"} size={"100%"} />,
      id: "vanillajs",
    },
  ];

  return (
    <>
      <HStack
        id="projects"
        className="project-main-c"
        flexDirection="column"
        bg={state ? "#051523" : "#79a7d3"}
      >
        <Box id="project" w={{ sm: "100%", base: "80%", md: "100%" }}>
          <Text
            align={"center"}
            alignItems={"center"}
            fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
            fontWeight={"semibold"}
            color={state ? "#B0967B" : "black"}
            p={10}
          >
            <Highlight query={"CREATIVE"} styles={{ color: "red" }}>
              MY CREATIVE PROJECTS
            </Highlight>
          </Text>
          <Flex
            p={{ base: "1%", sm: "1%", md: "2%", lg: "3%" }}
            w={{ base: "full", sm: "70%", md: "70%", lg: "40%" }}
            m="auto"
            justifyContent={"space-around"}
          >
            {btnarr.map((elm, i) => {
              return (
                <Flex
                  key={i}
                  justifyContent="center"
                  alignItems={"center"}
                  flexDirection="column"
                >
                  <Button
                    height={{
                      base: "50px",
                      sm: "70px",
                      md: "60px",
                      lg: "70px",
                    }}
                    width={{ base: "50px", sm: "70px", md: "60px", lg: "70px" }}
                    value={elm.value}
                    onClick={() => handelIdsetter(elm.id)}
                    borderRadius="50%"
                  >
                    {elm.ic}
                  </Button>
                  <Text as="b" fontSize={"xl"} color={state ? "red" : "black"}>
                    {elm.name}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Box>

        {isSmaller ? (
          <Box
            className="outside-map-box"
            display={"flex"}
            flexDirection="column"
            gap={"10"}
          >
            {!data
              ? projectArr
              : data.map((elm) => {
                  return (
                    <Box
                      key={elm.projectName}
                      className="inside-map-stack"
                      bg={state ? "#0D1C2E" : "#6883bc"}
                      data-aos="ease-out-cubic"
                    >
                      <HStack>
                        <Box
                          width={{ sm: "100%", base: "80%", lg: "70%" }}
                          mt="30px"
                        >
                          <Image
                            p={5}
                            border={
                              state ? "5px solid #B0967B" : "5px solid white"
                            }
                            src={elm.projectImg}
                          />
                        </Box>
                        <VStack
                          p={{ base: 3, md: 5 }}
                          w={{ sm: "100%", base: "40%", md: "30%" }}
                          m="30px"
                          gap={15}
                        >
                          <Text
                            color={state ? "#B0967B" : "black"}
                            as="u"
                            fontSize={"3xl"}
                          >
                            {elm.projectName}
                          </Text>
                          <Text
                            data-aos="fade-right"
                            color={state ? "#B0967B" : "black"}
                            fontSize={"xl"}
                            fontFamily={"sans-serif"}
                          >
                            {elm.desc}
                          </Text>
                          <HStack justifyContent={"space-evenly"}>
                            <Text
                              fontSize={"xl"}
                              as="b"
                              color={state ? "white" : "black"}
                              fontFamily={"sans-serif"}
                            >
                              Tech-Stack
                            </Text>
                            <HStack
                              data-aos="fade-right"
                              data-aos-anchor-placement="top"
                              w="full"
                              color={state ? "#B0967B" : "black"}
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
                        <Box
                          display={"flex"}
                          justifyContent="space-evenly"
                          w="30%"
                        >
                          <Box w="30%">
                            <a href={elm.projectLink} target={"_blank"}>
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
                            <a href={elm.projectGithub} target={"_blank"}>
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
          <Center bg={state ? "#0D1C2E" : "#79A7D3"}>
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
                {!data
                  ? projectArr
                  : data.map((elm) => {
                      return (
                        <Box
                          key={elm.projectName}
                          className="project-grid-container"
                          m="auto"
                          bg={state ? "#0D1C2E" : "#6883BC"}
                        >
                          <GridItem w={{ sm: "100%", md: "100%", lg: "100%" }}>
                            <Box
                              mt="20px"
                              p={{ base: "3", md: 4 }}
                              spacing={{ base: "0", md: 4 }}
                              align="center"
                            >
                              <Image
                                border={
                                  state
                                    ? " 5px solid #AB9379"
                                    : "5px solid white"
                                }
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
                                color={state ? "#B0967B" : "black"}
                                fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
                              >
                                {elm.projectName}
                              </Text>
                            </Box>
                            <Box p={5}>
                              <Text
                                as={"b"}
                                fontStyle={"italic"}
                                color={state ? "gray.100" : "black"}
                              >
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
                              color={state ? "#B0967B" : "black"}
                              gap={3}
                            >
                              <Text as={"b"}>Tech stack</Text>
                              <HStack
                                w={{ sm: "100%", base: "300%", lg: "100%" }}
                              >
                                {elm.techImg.map((elm) => {
                                  return <div key={elm.type}> {elm}</div>;
                                })}
                              </HStack>
                            </HStack>
                          </GridItem>
                          <HStack justifyContent={"center"} p={5} gap="10px">
                            <a href={elm.projectLink} target="_blank">
                              <Button
                                color={"blue.500"}
                                _hover={{ bg: "white", color: "orange" }}
                              >
                                <BsFillEyeFill size={"80%"} />
                              </Button>
                            </a>
                            <a href={elm.projectGithub} target="_blank">
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
