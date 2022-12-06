import { Divider } from "@mui/material";
import React from "react";
import { SectionColumn, SectionRow } from "./../Layouts/sectionLayouts";
import {HorizontalDivider} from "../Layouts/HorizontalDivider";

const DetailsList = ({ details }) => {
	const renderRow = (details) => {
		return details.map((item,i) => (
			<SectionRow className={"w-full justify-between h-[50px] items-center"}>
				<span className='text-left text-xs text-zinc-400 px-5'>{item.label}</span>
				<span className='text-right max-[320px]:text-xs  px-5'>{item.value}</span>
				{i < details.length-1 ? <HorizontalDivider/>: <HorizontalDivider className={"invisible"}/>}
			</SectionRow>
		));
	};
	return <SectionColumn className={"w-full  min-h-fit"}>{renderRow(details)}</SectionColumn>;
};

export default DetailsList;
