export const getEventList = (res) => {
  const array = res.map((event) => {
    return {
      title: event?.eventDetails?.name,
      location: event?.eventDetails?.location,
      date: event?.eventDetails?.date,
      status: event?.status,
      description: event?.eventDetails?.description,
    };
  });
  return array;
};
