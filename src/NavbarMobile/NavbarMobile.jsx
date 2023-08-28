import { Box, Button, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiTwotoneFire } from "react-icons/ai";
import { BsFillSunFill, BsMoonStarsFill, BsPersonCircle } from "react-icons/bs";
import { FcContacts, FcHome } from "react-icons/fc";

import {DiReact} from "react-icons/di"
import { booleanContext } from "../context/Boolean";
import fw_18_0455_Manmohan_singh_jina_resume from "../resume/fw18_0455_Manmohan_jina_resume.pdf";
import "./navmobile.css";

export default function NavbarMobile() {
  const btnRef = useRef(null);

  const toast = useToast();

  const { state, toggle, Than800 } = useContext(booleanContext);

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
        "https://drive.google.com/file/d/14OPmlBwgIvMJFpKJ6_1GnoaElcE_1kSH/view?usp=sharing"
      );
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [timerRef.current]);

  const iconarr = [
    {
      id: 0,
      el: state ? (
        <BsFillSunFill size={"90%"} color={state ? "white" : "black"} />
      ) : (
        <BsMoonStarsFill size={"90%"} color={state ? "white" : "black"} />
      ),
    },

    { id: 1, el: <FcHome size={"100%"} /> },
    {
      id: 2,
      el: <AiTwotoneFire size={"90%"} color={state ? "white" : "black"} />,
    },
    {
      id: 5,
      el: <DiReact size={"100%"} color={state ? "white" : "black"} />,
    },
    {
      id: 4,
      el: <BsPersonCircle size={"90%"} color={state ? "white" : "black"} />,
    },

    {
      id: 3,
      el: <FcContacts size={"100%"} color={state ? "white" : "black"} />,
    },
  ];

  var prevScrollpos = window.pageYOffset;

  function scroll() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.bottom = "-0";
    } else if (!Than800) {
      document.getElementById("navbar").style.bottom = "-200px";
      document.getElementById("navbar").style.transition = "0.7s";
    }
    prevScrollpos = currentScrollPos;
  }

  const [a, setA] = useState("");

  function handelBtn(id) {
    if (id == 0) {
      toggle();
    } else if (id == 3) {
      setA("down");
      hadnelPdf();
    } else if (id == 1) {
      setA("#home");
    } else if (id == 2) {
      setA("#skills");
    } else if (id == 4) {
      setA("#contact");
    } else if (id == 5) {
      setA("#projects");
    }
  }

  return (
    <Box
      w={{ sm: "100%", base: "100%", md: "100%", lg: "100%" }}
      h={{ sm: "90px", md: "80px", base: "50px", lg: "80px" }}
      className="navmobile"
      id="navbar"
      bgGradient={
        state
          ? "linear(to-l,#0D1C2E,blue.700)"
          : "linear(to-r, #6883BC, blue.100, pink.200)"
      }
    >
      {iconarr.map((elm) => {
        return (
          <Button
            className="mapbtn"
            id="btn"
            mt={{ sm: "0", base: "-5px", md: "0" }}
            h={{
              sm: "80px",
              base: "60px",
              md: "70px",
              lg: "60px",
            }}
            display="flex"
            alignItems={"center"}
            border={"transparent"}
            key={elm.id}
            position="-webkit-sticky"
            onClick={() => handelBtn(elm.id)}
            variant={state ? "solid" : "ghost"}
            borderRadius={{ sm: "50%", base: "50%", md: "10%" }}
            mb="5px"
          >
            {elm.id !== 3 ? (
              <a href={elm.id == 0 ? null : a}>{elm.el}</a>
            ) : (
              <a
                href={fw_18_0455_Manmohan_singh_jina_resume}
                download="fw_18_0455_Manmohan_Jina_resume"
              >
                {elm.el}
              </a>
            )}
          </Button>
        );
      })}
    </Box>
  );
}
