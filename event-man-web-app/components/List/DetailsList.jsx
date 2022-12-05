import { Divider } from "@mui/material";
import React from "react";
import { SectionColumn, SectionRow } from "./../Layouts/sectionLayouts";

const DetailsList = ({ details }) => {
	const renderRow = (details) => {
		return details.map((item) => (
			<SectionRow className={"w-full justify-between h-[50px] items-center"}>
				<span className='text-left text-xs text-zinc-400 px-5'>{item.label}</span>
				<span className='text-right max-[320px]:text-xs  px-5'>{item.value}</span>
				<span className='h-[0.5px] w-full bg-zinc-400'></span>
			</SectionRow>
		));
	};
	return <SectionColumn className={"w-full  min-h-fit"}>{renderRow(details)}</SectionColumn>;
};

export default DetailsList;
