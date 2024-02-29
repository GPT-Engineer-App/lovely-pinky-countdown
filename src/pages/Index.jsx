import { Box, Center, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
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
        <VStack spacing={10}>
          <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1488137881216-5bea4b9bac2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcGlua3xlbnwwfHx8fDE3MDkxOTQzNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cute Pink Image" />
          <VStack spacing={3}>
            <Heading fontSize={["4xl", "6xl"]} color="pink.400">
              {timeLeft.days}
            </Heading>
            <Heading fontSize={["4xl", "6xl"]} color="pink.400">
              {timeLeft.hours}
            </Heading>
            <Heading fontSize={["4xl", "6xl"]} color="pink.400">
              {timeLeft.minutes}
            </Heading>
            <Heading fontSize={["4xl", "6xl"]} color="pink.400">
              {timeLeft.seconds}
            </Heading>
          </VStack>
          <Flex w="100%" justify="center">
            {[...Array(5)].map((_, index) => (
              <FaHeart key={index} color="pink" size="2em" />
            ))}
          </Flex>
        </VStack>
      </Center>
    </Container>
  );
};

export default Index;
