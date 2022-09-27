import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import Head from "next/head";
import {
  classNames,
  SectionColumn,
  SectionRow,
} from "../../components/Layouts/sectionLayouts";

function index() {
  return (
    <SectionColumn className="flex-1 w-full bg-sky-50    h-screen ">
      {/*<Head>*/}
      {/*  <title>Event Management App</title>*/}
      {/*  <link rel="icon" href="/favicon.ico" />*/}
      {/*</Head>*/}
      <SectionRow
        className={
          "w-full bg-blue-600 h-40 items-center justify-center  text-center text-sky-50 font-bold text-3xl"
        }
      >
        EVENT PLANING TOOL
      </SectionRow>
      <SectionColumn className="flex  items-center w-full h-full  text-center justify-center ">
        <Link href="/auth/login">
          <Button variant={"contained"} className={"w-32 !bg-green-600 !m-3"}>
            Loin
          </Button>
        </Link>

        <Link href="/auth/signup">
          <Button variant={"contained"} className={"w-32 !m-3"}>
            <a>Sign up</a>
          </Button>
        </Link>
      </SectionColumn>
    </SectionColumn>
  );
}

export default index;
