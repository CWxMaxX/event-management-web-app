import React from "react";
import LoginCard from "../../components/Auth/LoginCard";
import Head from "next/head";

function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <LoginCard />
    </div>
  );
}

export default Login;
