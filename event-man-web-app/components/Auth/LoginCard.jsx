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
import FacebookIcon from "@mui/icons-material/Facebook";

function LoginCard() {
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
              <Button>
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
