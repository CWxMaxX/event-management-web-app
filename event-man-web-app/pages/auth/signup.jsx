import React from "react";
import SignupCard from "../../components/Auth/SignupCard";
import Head from "next/head";

function signup() {
  return (
    <div>
      <Head>
        <title>Sign up !</title>
      </Head>
      <SignupCard />
    </div>
  );
}

export default signup;
