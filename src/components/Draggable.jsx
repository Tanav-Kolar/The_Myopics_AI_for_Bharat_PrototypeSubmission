import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

function Draggable({ id, children, position = { x: 0, y: 0 } }) { // Default position
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  // If the component is in the panel, it doesn't need a transform
  const style = position ? {
    transform: CSS.Translate.toString(transform),
    position: 'absolute',
    left: position.x,
    top: position.y,
  } : {};

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default Draggable;
