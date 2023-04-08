import { create } from "zustand";
import { useBearSlice } from "@/slices/bear.slice";
import { useFishesSlice } from "@/slices/fishes.slice";
import { persist } from "zustand/middleware";
export const useStore = create(
  persist(
    (...a) => ({
      ...useBearSlice(...a),
      ...useFishesSlice(...a),
    }),
    { name: "bound-store" }
  )
);
