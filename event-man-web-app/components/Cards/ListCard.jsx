import React from "react";
import { SectionColumn, SectionRow } from "../Layouts/sectionLayouts";
import { Chip, Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ListCard({ title }) {
  const _array = [
    {
      title: "Event 1",
      location: "Gampaha",
      date: "18/01/2023",
      status: "Planing",
    },
    {
      title: "Event 2",
      location: "Negombo",
      date: "18/01/2023",
      status: "Done",
    },
    {
      title: "Event 3",
      location: "Nuwara Eliya",
      date: "18/01/2023",
      status: "Planing",
    },
    {
      title: "Event 4",
      location: "Kandy",
      date: "18/01/2023",
      status: "Ready",
    },
    {
      title: "Event 5",
      location: "Gampaha",
      date: "18/01/2023",
      status: "Planing",
    },
  ];
  const renderList = (array) => {
    return array.map((item, i) => {
      return (
        <div>
          <SectionRow className={"justify-center relative "}>
            <SectionColumn className={"w-full px-10  py-3"}>
              <div className={"mainText"}>{item.title}</div>
              <SectionRow className={"w-full items-center"}>
                <div className={"subText "}>{item.date}</div>
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "#5f666e", mx: 1 }}
                />
                <LocationOnIcon fontSize={"small"} sx={{ width: 15, mr: 1 }} />
                <div className={"subText "}>{item.location}</div>
                <Chip
                  size={"small"}
                  label={item.status}
                  sx={{ bgcolor: "#9ac200", color: "#000" }}
                  className={"absolute top-4 w-20 right-5"}
                />
              </SectionRow>
            </SectionColumn>
          </SectionRow>
          <Divider variant="middle" light sx={{ bgcolor: "#5f666e" }} />
        </div>
      );
    });
  };
  return (
    <SectionColumn className="w-full    my-2 px-6 sm:px-10 md:px-16 lg:px-20">
      <span className={" top-3 left-6 mb-3 subTitle font-bold"}>{title}</span>
      <div
        className="w-full   py-8 px-3 border-0 shadow-xl rounded-2xl
        backgroundCard text-white "
      >
        <SectionColumn className={"w-full"}>{renderList(_array)}</SectionColumn>
      </div>
    </SectionColumn>
  );
}

export default ListCard;
