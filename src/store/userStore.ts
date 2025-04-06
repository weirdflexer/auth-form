import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EmailType, TokenType } from "../types/const";

interface IUser {
  email: EmailType | null;
  token: TokenType | null;
  id: string | null;
}

interface Action {
  setUser: (user: IUser) => void;
  logOutUser: () => void;
}

const initialState = {
  email: null,
  token: null,
  id: null,
};

export const useUserStore = create<IUser & Action>()(
  persist(
    (set) => ({
      ...initialState,
      setUser: (user: IUser) => {
        set(user);
      },
      logOutUser: () => {
        set(initialState);
      },
    }),
    { name: "User" }
  )
);
