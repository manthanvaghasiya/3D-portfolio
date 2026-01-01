import { create } from 'zustand';

export const useHoloStore = create((set) => ({
  hoveredProject: null, // Stores the entire project object or null
  setHoveredProject: (project) => set({ hoveredProject: project }),
}));