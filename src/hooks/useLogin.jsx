import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  // 에러 정보를 저장
  const [error, setError] = useState(null);
  // 서버와의 통신상태 저장
  const [isPending, setIspending] = useState(false);

  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    setIspending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        setError(error.message);
        setIspending(false);
        const user = userCredential.user;
        dispatch({ type: "login", payload: user });
        console.log(user);
        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }
      })
      .catch((error) => {
        setError(error.message);
        setIspending(false);
        console.log(error.message);
      });
  };

  return { error, isPending, login };
};
