import React from "react";
import { Button } from "@mui/material";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import CommonLayout from "../../components/Layouts/CommonLayout";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useRouter } from "next/router";

import BackgroundCard from "../../components/Cards/backgroundCard";
import ListCard from "../../components/Cards/ListCard";

function index() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("test");
        router.push("/").then(() => {});
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <div className={"flex-1 my-0 h-screen bgDark overflow-y-scroll"}>
      <CommonLayout title={"Dashboard"}>
        {/*<BackgroundCard title={"Test Title"}>Test</BackgroundCard>*/}
        <ListCard title={"Event List"} />
        <Button onClick={handleSignOut}>Sign Out</Button>
        <div>
          <AddCircleIcon
            sx={{
              color: "#9ac200",
              width: 50,
              height: 50,
              position: "fixed",
              bottom: 25,
              right: 25,
            }}
          />
        </div>
      </CommonLayout>
    </div>
  );
}

export default index;
