import React from "react";
import { Button } from "@mui/material";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import CommonLayout from "../../components/Layouts/CommonLayout";

import { useRouter } from "next/router";
import {
  addEventToUser,
  getEventListByUser,
  getUserByEmail,
} from "../../api/userApi";
import {
  addUserToEvent,
  createEvent,
  getEventDetails,
  getEventsByUserId,
  updateEventDetails,
} from "../../api/eventApi";
import BackgroundCard from "../../components/Cards/backgroundCard";

function index() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("test");
        // router.push("/").then(() => {});
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className={"flex-1 "}>
      <CommonLayout title={"Dashboard"}>
        <BackgroundCard title={"Test Title"}>Test</BackgroundCard>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </CommonLayout>
    </div>
  );
}

export default index;
