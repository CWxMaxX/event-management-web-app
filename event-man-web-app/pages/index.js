import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth");
  }, []);
  return (
    <div className="bg-blue-200 ">
      <Head>
        <title>Event Management App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <p>Home</p>
      </main>
    </div>
  );
}
