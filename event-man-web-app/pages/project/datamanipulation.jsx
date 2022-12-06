export const dummyDetailsCardData = [
	{ label: "Name", value: "Test Event" },
	{ label: "Location", value: "Sri Lanka" },
	{ label: "Date", value: "2023-01-18" },
	{ label: "Description", value: "TTest description" },
];

export const getManipulateEventDetails = (details) => {
	return [
		{ label: "Name", value: details?.name || "---" },
		{ label: "Location", value: details?.location || "---" },
		{ label: "Date", value: details?.date || "---" },
		{ label: "Description", value: details?.description || "---" },
	];
};


