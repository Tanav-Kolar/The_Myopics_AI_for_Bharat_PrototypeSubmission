
import { Box } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children }) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <Box ref={setNodeRef} flex={1} bg="gray.100">
      {children}
    </Box>
  );
}
