
import { DndContext } from '@dnd-kit/core';
import { Box, Flex } from '@chakra-ui/react';
import LevelHeader from './components/LevelHeader';
import ComponentPanel from './components/ComponentPanel';
import GameCanvas from './components/GameCanvas';
import useStore from './store';

function App() {
  const addComponentToCanvas = useStore((state) => state.addComponentToCanvas);

  function handleDragEnd(event) {
    const { over, active } = event;

    // If the component is dropped over the canvas, add it to the state
    if (over && over.id === 'canvas') {
      const component = active.data.current; // The data passed from Draggable
      const dropPosition = { x: active.delta.x + 100, y: active.delta.y + 100 }; // Calculate a simple drop position
      addComponentToCanvas(component, dropPosition);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box>
        <LevelHeader />
        <Flex h="calc(100vh - 70px)">
          <ComponentPanel />
          <GameCanvas />
        </Flex>
      </Box>
    </DndContext>
  );
}

export default App;
