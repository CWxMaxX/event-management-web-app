export const getEventList = (res) => {
  const array = res.map((event) => {
    return {
      id: event?.id,
      title: event?.data?.eventDetails?.name,
      location: event?.data?.eventDetails?.location,
      date: event?.data?.eventDetails?.date,
      status: event?.data?.status,
      description: event?.data?.eventDetails?.description,
    };
  });
  return array;
};
