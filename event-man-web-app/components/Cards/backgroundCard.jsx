import React from "react";
import { SectionColumn } from "../Layouts/sectionLayouts";

function BackgroundCard({ title, children }) {
  return (
    <SectionColumn className="w-full    my-2 px-6 sm:px-10 md:px-16 lg:px-20">
      <span className={" top-3 left-6 mb-3 subTitle font-bold"}>{title}</span>
      <div
        className="w-full   py-8 px-3 border-0 shadow-xl rounded-2xl
        backgroundCard text-white "
      >
        <SectionColumn className={"w-full"}>{children}</SectionColumn>
      </div>
    </SectionColumn>
  );
}

export default BackgroundCard;
