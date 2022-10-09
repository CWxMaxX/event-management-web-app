import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => router.push("/auth"), 2000);
  }, []);
  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full h-screen bgDark ">
      <Head>
        <title>Event Management App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </main>
    </div>
  );
}
