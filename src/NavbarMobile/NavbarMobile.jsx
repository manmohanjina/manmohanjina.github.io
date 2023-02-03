import {
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import {
  Link,
  Flex,
  RadioGroup,
  Stack,
  Radio,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { booleanContext } from "../context/Boolean";
export default function NavbarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const btnRef = useRef(null);

  const toast = useToast();

  const { state, toggle } = useContext(booleanContext);

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
        "https://drive.google.com/file/d/10rR7sbEEF9vfghU_8mRlxfjMMxVNEGBJ/view?usp=sharing"
      );
      console.log(timerRef.current, "2");
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [timerRef.current]);

  return (
    <Box
      style={{ zIndex: 1 }}
      display={"flex"}
      bg="blackAlpha.600"
      justifyContent="space-between"
      p="2%"
      sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky",
        top: "0",
      }}
    >
      <h1 style={{ color: "white", padding: "10px" }}>Manmohan</h1>
      <button style={{ paddingLeft: "40%" }} onClick={toggle}>
        {state ? (
          <MoonIcon boxSize={6} />
        ) : (
          <SunIcon color={"yellow"} boxSize={6} />
        )}
      </button>
      <Button colorScheme="blue" onClick={onOpen}>
        <Box display={"flex"} w="full">
          <HamburgerIcon p={1} h={"60px"} width={"100%"} />
        </Box>
      </Button>

      <Drawer
        width="10px"
        finalFocusRef={btnRef}
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Box ml="130px" mt="20px">
              <button
                style={{ marginLeft: "120px", marginTop: "-40px" }}
                onClick={onClose}
              >
                <CloseIcon />
              </button>
            </Box>
            <Box
              display={"flex"}
              width={"80%"}
              flexDirection="column"
              gap={10}
              justifyContent="center"
              alignItems={"center"}
              mt="50px"
            >
              <a href="#home">
                <Button colorScheme="blackAlpha" onClick={onClose}>
                  Home
                </Button>
              </a>
              <a href="#project">
                <Button
                  varient="outline"
                  colorScheme="blackAlpha"
                  onClick={onClose}
                >
                  Project
                </Button>
              </a>
              <a href="#about">
                <Button
                  varient="outline"
                  colorScheme="blackAlpha"
                  onClick={onClose}
                >
                  About
                </Button>
              </a>
              <a href="#contact">
                <Button
                  varient="outline"
                  colorScheme="blackAlpha"
                  onClick={onClose}
                >
                  Contact
                </Button>
              </a>
              <a href="#resume">
                <Button
                  varient="outline"
                  colorScheme="blackAlpha"
                  onClose={onClose}
                  onClick={hadnelPdf}
                >
                  Resume
                </Button>
              </a>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
