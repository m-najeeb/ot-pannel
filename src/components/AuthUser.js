import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { redirect } from "react-router-dom";

export const AuthUser = () => {
  const { email, password, setIsLoggedIn } = useContext(LoginContext);

  if (email === "admin@mail.com" && password === "1234") {
    setIsLoggedIn(true);
    window.localStorage.setItem(1234, email);
  }
};

export const authLoader = () => {
  let token = window.localStorage.getItem(1234);
  if (!token) {
    return redirect("/");
  }
  return null;
};
