import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import Dashboard from "./Dashboard";
import { LoginContext } from "../context/LoginContext";
import { AuthUser } from "./AuthUser";

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        setIsLoggedIn,
      }}
    >
      <AuthUser />
      {isLoggedIn ? <Dashboard /> : <AdminLogin />}
    </LoginContext.Provider>
  );
}

export default HomePage;
