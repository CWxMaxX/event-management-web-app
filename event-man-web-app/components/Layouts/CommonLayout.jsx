import React, { useEffect, useState } from "react";
import { SectionColumn, SectionRow } from "./sectionLayouts";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { auth } from "../../firebaseConfig";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { Backdrop, CircularProgress } from "@mui/material";

function CommonLayout({ children, title, _open }) {
  const [user, setUser] = useState();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const router = useRouter();
  useEffect(() => {
    setOpen(_open);
  }, [_open]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log("User ====================>", user);
        setUser(user);
      } else {
        router.push("/auth");
      }
    });
  }, []);
  const goToHome = () => {
    router.push("/home");
  };
  return (
    <div
      className={
        "flex-1   bgDark  h-screen overflow-y-auto flex !pb-20 custom-scrollbar short-scrollbar"
      }
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SectionRow className="h-12 bgDark z-10 sm:justify-start justify-center  title  w-full items-center px-10 fixed ">
        <HomeIcon
          sx={{ color: "#9ac200" }}
          onClick={() => goToHome()}
          className={"absolute  left-3"}
        />
        <span className={"mt-2"}>{title || "---"}</span>
        <span className={"pt-1 absolute hidden sm:inline-block right-10 "}>
          {user?.displayName || "No User"}
        </span>
        <AccountCircleIcon
          sx={{ color: "#9ac200" }}
          className={"absolute  right-3 z-10"}
        />
      </SectionRow>
      <SectionColumn
        className={"flex-1 z-0 w-full pt-20 text-white   items-center"}
      >
        {children}
      </SectionColumn>
    </div>
  );
}

export default CommonLayout;
