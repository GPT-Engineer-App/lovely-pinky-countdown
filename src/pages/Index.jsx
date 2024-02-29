import { Box, Center, Container, Flex, Heading, Text, HStack } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("April 28, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  }

  return (
    <Container maxW="container.sm" p={0}>
      <Center h="100vh" w="100%" flexDir="column">
        <HStack spacing={10} color="white" bg="pink.400" h="100vh" align="center" justify="center">
          <Heading fontSize={["4xl", "6xl"]}>{timeLeft.days}</Heading>
          <Heading fontSize={["4xl", "6xl"]}>{timeLeft.hours}</Heading>
          <Heading fontSize={["4xl", "6xl"]}>{timeLeft.minutes}</Heading>
          <Heading fontSize={["4xl", "6xl"]}>{timeLeft.seconds}</Heading>
        </HStack>
        <Center w="100%" justify="center">
          <FaHeart color="white" size="2em" />
        </Center>
      </Center>
    </Container>
  );
};

export default Index;
