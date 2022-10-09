import React from "react";
import { SectionColumn } from "../Layouts/sectionLayouts";
import { MainHeading } from "../Common/Headings";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import FacebookIcon from "@mui/icons-material/Facebook";
import { auth } from "../../firebaseConfig";
import { googleProvider } from "../../api/authProvider";
import { useRouter } from "next/router";
import { addUser } from "../../api/userApi";

function LoginCard() {
  const router = useRouter();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      router.push("/home");
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div className={"flex-1 page bg-sky-50"}>
      <SectionColumn className={" h-screen "}>
        <MainHeading title={"Event planing tool"} />
        <SectionColumn className={"h-full justify-center items-center"}>
          <Card className={"w-72 md:w-96"}>
            <CardContent sx={{ minHeight: 200 }}>
              <TextField
                fullWidth
                sx={{ my: 1 }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                fullWidth
                sx={{ my: 1 }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                onClick={() => {
                  googleProvider();
                }}
              >
                <img
                  src="https://img.icons8.com/color/30/000000/google-logo.png"
                  alt={"Google Login"}
                />
              </Button>
              <Button variant={"contained"} color={"success"}>
                Login
              </Button>
              <Button>
                <FacebookIcon fontSize={"large"} />
              </Button>
            </CardActions>
          </Card>
        </SectionColumn>
      </SectionColumn>
    </div>
  );
}

export default LoginCard;
