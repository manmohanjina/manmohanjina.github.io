

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
  
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdMail,
  
} from 'react-icons/md';

import { BsGithub, BsDiscord, BsPerson,BsLinkedin } from 'react-icons/bs';
import { booleanContext } from '../context/Boolean';
import { useContext } from 'react';

export default function Contact() {


  const {toggle, state}=useContext( booleanContext)

 

  return (
    <Container id='contact'  bg={state?"#CBD5E0":"cyan.300"} maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg={!state?"pink.600":"#F6AD55"}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-8650003502
                      </Button>
                      <Button
                        size="md"
                        height="60px"
                        width="270px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        Manish63singh@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Kashipur,Uttrakhand
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <a href=""><IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdMail size="28px"  />}
                    /></a>
                    <a href="https://github.com//"  target='_blank' ><IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    /></a>
                   <a href="https://www.linkedin.com/in/manmohan-jina-b59a89217/" target={"_blank"}> <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsLinkedin size="28px" />}
                    /></a>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
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
          <button style={
            {
              background: '#0D74FF',
              color: '#fff',
              border: '1px solid #0D74FF',
              borderRadius: '5px',
              padding: '10px',
              margin:'auto',
              
              display:'flex',
marginTop:'1%'              
            }
          } >Let's talk</button>
        </form>
                     <VStack/>
                    
                    
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
 
    </Container>

)
}
