import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function index() {
  return (
    <div className="flex-1  flex flex-col items-center w-full text-center justify-center h-screen">
      {/*<div className="w-60 border border-black rounded p-4 bg-green-600" >*/}
      <Link href="/auth/login">
        <a>
          <Button variant={"contained"}>Login</Button>
        </a>
      </Link>
      {/*</div>*/}
      <div className="w-60">
        <Link href="/auth/signup">
          <a>Sign up</a>
        </Link>
      </div>
      <Button variant="contained" color={"primary"}>
        Test
      </Button>
    </div>
  );
}

export default index;
