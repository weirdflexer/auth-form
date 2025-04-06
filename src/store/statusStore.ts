import { create } from "zustand";

interface IStatus {
  label: string;
  expirationTimeMS?: number;
}

interface StatusState {
  statuses: IStatus[];
}

interface Action {
  addStatus: (status: IStatus) => void;
  clearStatuses: () => void;
}

export const useStatusStore = create<StatusState & Action>((set) => ({
  statuses: [],

  addStatus: ({ label, expirationTimeMS = 5000 }) =>
    set((state) => ({
      statuses: [...state.statuses, { label, expirationTimeMS }],
    })),

  clearStatuses: () => set({ statuses: [] }),
}));
