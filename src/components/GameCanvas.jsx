
import { Box } from '@chakra-ui/react';
import useStore from '../store';
import { Droppable } from './Droppable';

const Component = ({ name }) => (
  <Box p={4} borderWidth="1px" borderRadius="lg" bg="white" w="150px" textAlign="center">
    {name}
  </Box>
);

const GameCanvas = () => {
  const canvasComponents = useStore((state) => state.canvasComponents);

  return (
    <Droppable id="canvas">
      <Box p={4} position="relative" w="full" h="full">
        {Object.values(canvasComponents).map((component) => (
          <Box
            key={component.id}
            position="absolute"
            left={`${component.position.x}px`}
            top={`${component.position.y}px`}
          >
            <Component name={component.name} />
          </Box>
        ))}
      </Box>
    </Droppable>
  );
};

export default GameCanvas;
