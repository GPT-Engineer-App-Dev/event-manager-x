import { Container, VStack, Heading, Text, Button, Box, HStack } from "@chakra-ui/react";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { data: events, isLoading, error } = useEvents();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Events Management</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <HStack spacing={4}>
          <Button as={Link} to="/create-event" leftIcon={<FaPlus />} colorScheme="teal" size="lg">Create Event</Button>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" size="lg">View Events</Button>
        </HStack>
        {isLoading && <Text>Loading events...</Text>}
        {error && <Text>Error loading events: {error.message}</Text>}
        {events && events.map(event => (
          <Box key={event.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{event.name}</Heading>
            <Text mt={4}>{event.description}</Text>
            <Text mt={4} color="gray.500">{event.date}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;