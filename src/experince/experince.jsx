import React, { useContext } from "react";
import {
  Box,
  Text,
  Flex,
  Icon,
  Divider,
  Badge,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  Heading,
} from "@chakra-ui/react";
import { MdWork, MdSchool } from "react-icons/md";
import { booleanContext } from "../context/Boolean";

const Experience = () => {
  const { toggle, state } = useContext(booleanContext);
  const experiences = [
    {
      company: "Devriser LLC",
      position: "Full Stack Developer",
      duration: "Apr-2023-  to july-2023",
      description:
        "During my professional experience as a full-stack web developer, I had the opportunity to learn and work with Next.js and Figma. Next.js which is a React framework.",
    },
  ];

  return (
    <Box id="expereniceScroll">
      {/* <div className="slider" >
        <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
          <RangeSliderTrack bg="skyblue">
            <RangeSliderFilledTrack bg="black" />
          </RangeSliderTrack>
        </RangeSlider>
      </div> */}
      <Box bg="rgb(4,16,27)">
        <Flex
          p={4}
          justifyContent="center"
          direction={{
            base: "column",
            md: "row",
            lg: "row",
            xl: "row",
            "2xl": "row",
          }}
        >
          <Box>
            <Heading
              width={{ base: "200px", md: "200px", lg: "300px" }}
              m="auto"
              color={state ? "red" : "black"}
              p={5}
              textAlign={"center"}
              borderBottom={"1px solid red"}
              padding={"10px"}
              mb="20px"
            >
              My Experience
            </Heading>
            {experiences.map((experience, index) => (
              <Flex
                bg=""
                key={index}
                width="60%"
                style={{ margin: "auto" }}
                mb={6}
                textAlign={"left"}
                color={"white"}
              >
                <Icon as={MdWork} mr={4} color="white" />
                <Box>
                  <Text fontWeight="bold" color="rgb(176,150,123)">
                    {experience.position}
                  </Text>
                  <Text color="rgb(176,150,123)">{experience.company}</Text>
                  <Badge
                    fontSize="sm"
                    border={"2px solid rgb(176,150,123)"}
                    bg={"transparent"}
                    padding={"2px"}
                    textTransform={"none"}
                    p={1}
                    rounded={"lg"}
                    width={"auto"}
                    color="rgb(176,150,123)"
                    mt={1}
                  >
                    {experience.duration}
                  </Badge>
                  <Text color={"rgb(176,150,123)"} mt={2}>
                    {experience.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Experience;
