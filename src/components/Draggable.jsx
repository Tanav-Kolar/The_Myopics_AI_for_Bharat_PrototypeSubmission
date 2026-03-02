
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box } from '@chakra-ui/react';

export function Draggable({ id, data, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: data, // Pass component data
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    zIndex: 10, // Ensure the dragged item is on top
  } : undefined;

  return (
    <Box ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </Box>
  );
}
