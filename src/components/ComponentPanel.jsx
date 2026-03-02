
import { Box, Heading, VStack } from '@chakra-ui/react';
import useStore from '../store';
import { Draggable } from './Draggable';

const Component = ({ name }) => (
  <Box p={4} borderWidth="1px" borderRadius="lg" bg="gray.50" w="150px" textAlign="center">
    {name}
  </Box>
);

const ComponentPanel = () => {
  const panelComponents = useStore((state) => state.panelComponents);

  return (
    <Box w="250px" p={4} borderRight="1px" borderColor="gray.200">
      <Heading size="sm" mb={4}>Components</Heading>
      <VStack spacing={4}>
        {panelComponents.map((component) => (
          <Draggable key={component.id} id={component.id} data={component}>
            <Component name={component.name} />
          </Draggable>
        ))}
      </VStack>
    </Box>
  );
};

export default ComponentPanel;
