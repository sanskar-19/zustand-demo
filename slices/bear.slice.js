export const useBearSlice = (set) => ({
  bears: 0,
  addBears: () => set((state) => ({ bears: state.bears + 1 })),
});
