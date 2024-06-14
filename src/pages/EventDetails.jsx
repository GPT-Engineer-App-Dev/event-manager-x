import { useParams } from "react-router-dom";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEvent } from "../integrations/supabase/index.js";

const EventDetails = () => {
  const { id } = useParams();
  const { data: event, isLoading, error } = useEvent(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading event details: {error.message}</Text>;
  }

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">{event.name}</Heading>
        <Text fontSize="lg">{event.description}</Text>
        <Text fontSize="md" color="gray.500">{event.date}</Text>
      </VStack>
    </Container>
  );
};

export default EventDetails;