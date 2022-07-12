import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // 이제 context 안에는 AuthContext에서 반환하는 state 값과 dispatch함수 두가지가 들어있습니다.
  return context;
};
