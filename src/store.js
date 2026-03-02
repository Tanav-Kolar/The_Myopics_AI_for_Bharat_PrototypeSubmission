

import { create } from 'zustand';
import { nanoid } from 'nanoid';

const useStore = create((set) => ({
  // Components available in the side panel
  panelComponents: [
    { id: 'web-server', name: 'Web Server' },
    { id: 'database', name: 'Database' },
    // Add more initial components here
  ],
  // Components dropped onto the canvas
  canvasComponents: {},
  
  // Function to add a component to the canvas
  addComponentToCanvas: (component, position) =>
    set((state) => {
      const newId = nanoid(); // Generate a unique ID for the new instance
      return {
        canvasComponents: {
          ...state.canvasComponents,
          [newId]: { ...component, id: newId, position },
        },
      };
    }),
}));

export default useStore;
