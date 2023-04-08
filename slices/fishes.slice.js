export const useFishesSlice = (set) => ({
  fishes: 0,
  addFishes: () => set((state) => ({ fishes: state.fishes + 10 })),
  setFishes: () => set((state) => ({ fishes: state.fishes })),
});
