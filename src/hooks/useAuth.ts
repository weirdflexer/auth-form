import { useUserStore } from "../store/userStore";

export const useAuth = () => {
  const { email, token, id } = useUserStore.getState();

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
