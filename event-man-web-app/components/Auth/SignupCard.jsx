import React from "react";
import { SectionColumn, SectionRow } from "../Layouts/sectionLayouts";

function SignupCard() {
  return (
    <div className={"flex-1 page bg-sky-50"}>
      <SectionColumn className={""}>
        <SectionRow
          className={
            "w-full h-[100px] text-center justify-evenly items-center bg-blue-600 "
          }
        >
          <div className={"text-center text-sky-50 font-bold text-3xl "}>
            EVENT PLANING TOOL
          </div>
        </SectionRow>
        <SectionRow className={"w-full h-6/12"}>Row 2</SectionRow>
        <SectionRow className={"w-full h-3/12"}>Row 3</SectionRow>
      </SectionColumn>
    </div>
  );
}

export default SignupCard;
