import {
  Box,
  Center,
  Grid,
  GridItem,
  Highlight,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import BooleanState, { booleanContext } from "../context/Boolean";
import Aos from "aos";
import "aos/dist/aos.css";
import "./stat.css";
import GitHubCalendar from "react-github-calendar";
import Tilt from "react-parallax-tilt";

const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

export default function Githubstat() {
  const { toggle, state } = useContext(booleanContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const githubstats = [
    {
      src: "https://github-readme-streak-stats.herokuapp.com/?user=manmohanjina&",
    },
    {
      src: "https://github-readme-stats.vercel.app/api/top-langs?username=manmohanjina&show_icons=true&locale=en&layout=compact0",
    },
    {
      src: "https://github-readme-stats.vercel.app/api?username=manmohanjina&show_icons=true&locale=en",
    },
  ];

  return (
    <>
      {/* <Center className="github-stat" bg={state?'#7CC0AD':"black"}      >
    
<Box   mt='50px' mb={'50px'} display={'flex'} gap={10}  m='30px' p='30px'  alignItems={'center'}  justifyContent='space-evenly' w='full' className="github-stat"  >
  <Box    data-aos='flip-up' data-aos-anchor-placement="top-center" >
  <Image  src='https://github-readme-streak-stats.herokuapp.com/?user=manmohanjina&' />
  </Box>

  <Box   w={[300,200,500]} className="middle-box"   data-aos='fade-up' >
    <Image  className="imutable" w='full'  h="170px" src='https://github-readme-stats.vercel.app/api/top-langs?username=manmohanjina&show_icons=true&locale=en&layout=compact'  />
</Box>

  <Box    data-aos='flip-right' >
    <Image   src='https://github-readme-stats.vercel.app/api?username=manmohanjina&show_icons=true&locale=en'/>
  </Box>
</Box>

  <Box w={[300, 400, 1000]} m="auto" mt="20px" mb={"20px"}>
        <GitHubCalendar
          username="manmohanjina"
          blockSize={25}
          color={state ? "" : "orange"}
        />
      </Box>  
      
      <Box w="70%" className="main-box-project">
        <Stack
          gap="5%"
          alignItems="center"
          margin={"auto"}
          direction={{ base: "column", md: "row" }}
          boxShadow={"2xl"}
          w={{ sm: "100%", md: "540px" }}
        >



</Center> */}
      <Box className="github-stat1" bg={state ? "#04101B" : "black"}>
        <Box
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          align={"center"}
          p={10}
        >
          <Text
            color={"#B0967B"}
            as={"b"}
            fontSize={{ sm: "xl", base: "2xl", lg: "5xl" }}
          >
            GITHUB-STATISTICS
          </Text>
          <Text
            mt="2%"
            color={"#B0967B"}
            fontSize={{ sm: "xl", base: "2xl", lg: "3xl" }}
          >
            <Highlight query={"CONTRIBUTION"} styles={{ color: "red" }}>
              MY OVERALL CONTRIBUTION
            </Highlight>
          </Text>
        </Box>
        <HStack mt="30px" justifyContent="space-evenly" className="stackStat">
          {githubstats.map((elm) => {
            return (
              <Box key={elm.src} className="stats-box">
                <Image className="in-stat-box" src={elm.src} />
              </Box>
            );
          })}
        </HStack>

        <Box
          mt="5%"
          align="center"
          w={{ sm: "100%", base: "100%", lg: "100%" }}
        >
          <Box
            className="xtream"
            data-aos="flip-up"
            data-aos-anchor-placement="top-center"
          >
            <Text fontSize={{ lg: "4xl" }} as="b" color={"#B0967B"}>
              {" "}
              <Highlight query="CALENDER" styles={{ color: "red" }}>
                GITHUB CONTRIBUTION CALENDER
              </Highlight>
            </Text>
            <Text></Text>
          </Box>
          <Box m="auto" mt="20px" mb={"20px"} p={5} className="gitContainer">
            <Tilt>
              <Box
                w={{ sm: "100%", md: "100%", lg: "90%" }}
                className="github-stat"
                color={"#B0967B"}
                p={5}
              >
                <GitHubCalendar
                  username="manmohanjina"
                  blockSize={25}
                  color={state ? "#B0967B" : "orange"}
                  blockRadius={5}
                  blockMargin={15}
                  fontSize={15}
                />
              </Box>
            </Tilt>
          </Box>
        </Box>
      </Box>
    </>
  );
}
