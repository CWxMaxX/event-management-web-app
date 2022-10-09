import React from "react";
import { SectionColumn } from "../Layouts/sectionLayouts";

function BackgroundCard({ title, children }) {
  return (
    <SectionColumn className="w-full    my-2 px-6 sm:px-10 md:px-16 lg:px-20">
      <div
        className="w-full bg-green-200 relative py-8 px-3 border-0 shadow-xl rounded-2xl
        backgroundCard text-white "
      >
        <span className={"absolute top-3 left-6 mb-8 subTitle font-bold"}>
          {title}
        </span>
        <div className={"mt-3 text-sm "}>{children}</div>
      </div>
    </SectionColumn>
  );
}

export default BackgroundCard;
