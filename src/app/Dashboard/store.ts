import { create } from "zustand";
import { DashboardState as State, DashboardAction as Action } from "./types";

const initialFilter: State = {
  filter: {
    meaning: "",
    gender: "",
    origin: "",
    wordLength: "",
  },
  detail: null,
};

const useDashboardStore = create<State & Action>()((set) => ({
  ...initialFilter,
  setFilter: (payload) =>
    set((state) => ({
      filter: { ...state.filter, ...payload },
    })),
  setDetail: (payload) => set({ detail: payload || null }),
  clearFilter: () => set({ filter: initialFilter.filter }),
  clearAll: () => set({ ...initialFilter }),
}));

export default useDashboardStore;
