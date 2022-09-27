import { SectionRow } from "../Layouts/sectionLayouts";

export const MainHeading = ({ title }) => {
	return (
		<SectionRow className={"w-full h-[100px] text-center justify-evenly items-center bg-blue-600 "}>
			<div className={"text-center text-sky-50 font-bold text-3xl uppercase"}>{title}</div>
		</SectionRow>
	);
};
