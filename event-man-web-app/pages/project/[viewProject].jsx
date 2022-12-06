import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEventDetails } from "../../api/eventApi";
import { createExpense, deleteExpense, getExpensesByEventId } from "../../api/expenseApi";
import Head from "next/head";
import { Button, TextField } from "@mui/material";
import { getUID } from "../../api/authProvider";
import CommonLayout from "../../components/Layouts/CommonLayout";
import { SectionColumn, SectionRow } from "../../components/Layouts/sectionLayouts";
import BackgroundCard from "../../components/Cards/backgroundCard";
import { CancelButton, PrimaryButton } from "../../components/Buttons/buttons";
import DetailsList from "../../components/List/DetailsList";
import { dummyDetailsCardData, getManipulateEventDetails } from "./datamanipulation";
import {HorizontalDivider} from "../../components/Layouts/HorizontalDivider";
import Image from "next/image";
import {ICONS} from "../../helpers/iconsPath";
import {IconWithCaption} from "../../components/IconsLayouts/IconWithCaption";

function ViewProject() {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const [refresher, setRefresher] = useState();
	const { viewProject } = router.query;
	const [res, setRes] = useState();
	const [expenseList, setExpenseList] = useState([]);
	const [value, setValue] = useState("");
	const addExpense = () => {
		setLoading(true);
		createExpense(getUID(), viewProject)
			.then((res) => {
				console.log("Expense created", res);
			})
			.catch((e) => console.log(e))
			.finally(() => {
				setRefresher(Math.random());
				setLoading(false);
			});
	};
	const deleteEvent = () => {
		setLoading(true);
		deleteExpense(viewProject, value)
			.then((res) => console.log("Expense created", res))
			.catch((e) => console.log(e))
			.finally(() => {
				setValue("");
				setRefresher(Math.random());
				setLoading(false);
			});
	};

	useEffect(() => {
		setLoading(true);

		getEventDetails(viewProject)
			.then((res) => setRes(res))
			.catch((e) => console.log(e))
			.finally(() => {});

		getExpensesByEventId(viewProject)
			.then((res) => setExpenseList(res))
			.catch((e) => console.log(e))
			.finally(() => {
				setLoading(false);
			});
	}, [viewProject, refresher]);

	return (
		<CommonLayout title={"Event Viewer"} _open={loading}>
			<Head>
				<title>{res?.name}</title>
			</Head>
			<SectionRow className={"w-full items-start justify-center"}>
				<SectionColumn className={"w-full lg:w-1/2  items-center"}>
					<BackgroundCard title={"Event Details"}>
						{/* <pre>{JSON.stringify(res, "/", 2)}</pre> */}
						<DetailsList details={getManipulateEventDetails(res)} />
					</BackgroundCard>

					<HorizontalDivider className={"my-4 w-11/12 lg:hidden"} />

					<SectionRow className={" justify-around px-6 lg:mt-10 w-full "}>
						<IconWithCaption title={"Add Expense"} size={40} path={ICONS.ADD_LIST} />
						<IconWithCaption title={"Edit Expense"} size={40} path={ICONS.EDIT_LIST} />
						<IconWithCaption title={"Payment"} size={40} path={ICONS.PAY_LIST} />
						<IconWithCaption title={"Delete Expense"} size={40} path={ICONS.DELETE_LIST} />


					</SectionRow>
					<HorizontalDivider className={"my-4 w-11/12 lg:hidden"} />

					{/* <SectionColumn className={"w-full justify-center items-center mt-24"}>
						<PrimaryButton title={"Add Expense"} className={"w-[250px]"} onClick={addExpense} />
						<SectionRow className={"w-full items-center justify-center"}>
							<input
								type={"text"}
								className={"main-text-field !w-[350px]"}
								onChange={(e) => setValue(e.target.value)}
								value={value}
							/>
							<CancelButton title={"Delete Event"} className={"w-[250px]"} onClick={deleteEvent} />
						</SectionRow>
					</SectionColumn> */}
				</SectionColumn>
				<SectionColumn className={"w-full lg:w-1/2  items-center"}>
					<BackgroundCard title={"Expenses Details"}>
						Expense List ====={" "}
						<pre className={"text-clip w-11/12"}> {JSON.stringify(expenseList, "/", 2)}</pre>
					</BackgroundCard>
				</SectionColumn>
			</SectionRow>
		</CommonLayout>
	);
}

export default ViewProject;
