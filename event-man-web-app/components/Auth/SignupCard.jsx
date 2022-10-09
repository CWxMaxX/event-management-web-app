import React, { useState } from "react";
import { SectionColumn, SectionRow } from "../Layouts/sectionLayouts";
import { MainHeading } from "../Common/Headings";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { router } from "next/client";
import { googleProvider } from "../../pages/auth/authProvider";

function SignupCard() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("User ====================>", user);
      router.push("/home");
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const handleSubmit = () => {
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
      });
  };
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
                type={"email"}
                name={"email"}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
              <TextField
                fullWidth
                sx={{ my: 1 }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name={"password"}
                type={"password"}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
              <TextField
                fullWidth
                sx={{ my: 1 }}
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                type={"password"}
                name={"confirmPassword"}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }} className={""}>
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
              <Button variant={"contained"} onClick={handleSubmit}>
                Signup
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

export default SignupCard;
