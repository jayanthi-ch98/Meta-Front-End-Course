import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return  (
    <VStack backgroundColor="white" size="sm" borderRadius="lg" spacing={2} >
      <Image borderRadius="lg"
        src={imageSrc}
        alt={description}
        
      />
      <VStack p={2} width="100%" align="start">
      <Heading size="md" color={"black"}>{title}</Heading>
      <Text color={"grey"}>{description}</Text>
      <HStack><Text color={"black"}>See more</Text><FontAwesomeIcon color={"black"} icon={faArrowRight} size="1x"></FontAwesomeIcon></HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
