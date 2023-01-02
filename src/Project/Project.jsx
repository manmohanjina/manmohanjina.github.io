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
  } from "@chakra-ui/react";
  import recutie from "../img/recutie.png";
  import nordstorm from "../img/nordstorm.png";
  import gitcommit from "../img/gitcommit.png";
  import { extendTheme } from "@chakra-ui/react";
  import "../index.css";
  import BooleanState, { booleanContext } from "../context/Boolean";
  import { useContext } from "react";
  export default function Project() {
    const [smallerDisplay] = useMediaQuery("(min-width: 400px)");
  
  
    const {toggle, state}=useContext( booleanContext)
  
  
  
  
  
    return (
      <>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
          gap="30px"
          p="10px"
          bg={state?"#4A5568":"pink.600"}
          className="project-grid"
        >
          {/* <Box  className="project" display={'flex'}   border='1px solid red'  > */}
  
          <Box
            p="10px"
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
            border={'2px solid rgb(246,173,85)'}
          >
            <Image src={recutie} w='80%' />
            <Text
              as="u"
              mt="10px"
              fontSize={"3xl"}
              color="orange.300"
              fontWeight={"bold"}
            >
              Recruitee
            </Text>
            <Text noOfLines={3}  color={state?'white':"black"} fontSize={'xl'} >
              {" "}
              A Website build bridge between Recuuiter and Recruitee Manupulating
              of data much eaiser ,hassel fre Work nice to have this kind of site
              to manage employee{" "}
            </Text>
  
            <Box mt="10px" p="10px" display={"flex"} gap="15px">
              <Text
                border={"1px solid orange"}
                p={"5px"}
                as="b"
                color={"orange.300"}
              >
                Tech Stack
              </Text>{" "}
              <Text p="5px" color={"white"} as="em">
                HTML,CSS,JAVASCRIPT
              </Text>
            </Box>
  
            <Box display={"flex"} gap="10px" p="10px"   >
              <a href="https://inquisitive-kashata-a201b3.netlify.app/">
                {" "}
                <Button
                  colorScheme={"yellow"}
                  variant="outline"
                  fontSize={"xl"}
                  p="20px"
                  m="10px"
                >
                  Live
                </Button>
              </a>
              <a href="https://github.com/Devender0014/NordStrom">
                <Button
                  colorScheme={"yellow"}
                  variant="outline"
                  fontSize={"xl"}
                  p="20px"
                  m="10px"
                >
                  Demo
                </Button>
              </a>
            </Box>
          </Box>
  
          <Box p="10px"   border={'2px solid rgb(246,173,85)'} >
            <Box
              p="10px"
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              flexDirection={"column"}
            >
              <Image src={nordstorm} w='80%' />
              <Text
                as="u"
                mt="6%"
                fontSize={"3xl"}
                color="orange.300"
                fontWeight={"bold"}
              >
                NordStorm
              </Text>
              <Text noOfLines={3}    color={state?'white':"black"} fontSize={'xl'} >
                {" "}
                A Website build bridge between Recuuiter and Recruitee
                Manupulating of data much eaiser ,hassel fre Work nice to have
                this kind of site to manage employee{" "}
              </Text>
  
              <Box mt="10px" p="10px" display={"flex"} gap="15px">
                <Text
                  border={"1px solid orange"}
                  p={"5px"}
                  as="b"
                  color={"orange.300"}
                >
                  Tech Stack
                </Text>{" "}
                <Text p="5px" color={"white"} as="em">
                  HTML,CSS,JAVASCRIPT
                </Text>
              </Box>
  
              <Box display={"flex"} gap="10px" p="10px">
                <a href="  https://astonishing-salamander-32cafa.netlify.app/">
                  <Button
                    colorScheme={"yellow"}
                    variant="outline"
                    fontSize={"xl"}
                    p="20px"
                    m="10px"
                  >
                    Live
                  </Button>{" "}
                </a>
  
                <a href="https://github.com/sumitraghavwork/bashful-form-6526">
                  {" "}
                  <Button
                    colorScheme={"yellow"}
                    variant="outline"
                    fontSize={"xl"}
                    p="20px"
                    m="10px"
                  >
                    Demo
                  </Button>
                </a>
              </Box>
            </Box>
          </Box>
        </Grid>
  
        <Center  mt='20px'  mb={"20px"}>
          <Image
          className="git-img"
          
           
           
           w={'80%'}
           
            src={gitcommit}
             
          />
        </Center>
       
      </>
    );
  }
  