import { useParams } from "react-router-dom";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details from a data source using the id
    // For now, we'll use a placeholder event
    const fetchedEvent = {
      id,
      title: "Sample Event",
      description: "This is a sample event description.",
      date: "2023-10-01",
    };
    setEvent(fetchedEvent);
  }, [id]);

  if (!event) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">{event.title}</Heading>
        <Text fontSize="lg">{event.description}</Text>
        <Text fontSize="md" color="gray.500">{event.date}</Text>
      </VStack>
    </Container>
  );
};

export default EventDetails;