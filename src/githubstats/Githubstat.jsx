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
     
      <Box className="github-stat1" bg={state ? "#04101B" : "#79a7d3"}>
        <Box
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          align={"center"}
          p={10}
        >
          <Text
            color={state ? "#B0967B" : "black"}
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
            <Highlight
              query={"CONTRIBUTION"}
              styles={{ color: state ? "red" : "black" }}
            >
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
            <Text
              fontSize={{ lg: "4xl" }}
              as="b"
              color={state ? "#B0967B" : "black"}
            >
              {" "}
              <Highlight
                query="CALENDER"
                styles={{ color: state ? "red" : "black" }}
              >
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
                color={state ? "#B0967B" : "black"}
                p={5}
              >
                <GitHubCalendar
                  username="manmohanjina"
                  blockSize={25}
                  color={state ? "#B0967B" : "black"}
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
