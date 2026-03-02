import { DndContext } from '@dnd-kit/core';
import { Box, Flex } from '@chakra-ui/react';
import LevelHeader from './components/LevelHeader';
import ComponentPanel from './components/ComponentPanel';
import GameCanvas from './components/GameCanvas';
import useStore from './store';

function App() {
  const { addComponentToCanvas, moveComponent, canvasComponents } = useStore();

  function handleDragEnd(event) {
    const { active, over, delta } = event;

    // If a component is already on the canvas, move it
    if (active.id in canvasComponents) {
      const component = canvasComponents[active.id];
      const newPosition = {
        x: component.position.x + delta.x,
        y: component.position.y + delta.y,
      };
      moveComponent(active.id, newPosition);
      return; // Early return
    }

    // If the component is dropped over the canvas from the panel, add it
    if (over && over.id === 'canvas') {
      const component = active.data.current;
      // Adjust the drop position to be relative to the canvas
      const dropPosition = { x: active.rect.current.client.x, y: active.rect.current.client.y };
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
