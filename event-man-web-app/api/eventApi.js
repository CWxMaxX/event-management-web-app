import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { addEventToUser, getUserByEmail } from "./userApi";

// Add event
export const createEvent = async (uid, eventDetails) => {
  const data = {
    name: eventDetails.name,
    creator: uid,
    usersList: [uid],
    eventDetails: eventDetails,
    expensesList: [],
    status: "PLANING",
  };
  console.log(data);
  const docRef = collection(db, "eventCollection");
  await addDoc(docRef, data)
    .then((res) => {
      console.log("Event Added.....!", res);
      addEventToUser(uid, res.id, eventDetails.name);
    })
    .catch((error) => {
      console.log(error);
    });
};

//Get event details
export const getEventDetails = async (eventId) => {
  const docRef = doc(db, "eventCollection", eventId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data()?.eventDetails);
    return docSnap.data()?.eventDetails;
  } else {
    // doc.data() will be undefined in this case
    console.log("No event found!");
  }
};

// Get events by user id
export const getEventsByUserId = async (uid) => {
  let eventsArray = [];
  const docRef = collection(db, "eventCollection");
  const q = query(docRef, where("usersList", "array-contains", uid));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const dataSet = { data: doc.data(), id: doc.id };
    eventsArray.push(dataSet);
  });

  return eventsArray;
};

// Update event details
export const updateEventDetails = async (eventId, eventDetails) => {
  const docRef = doc(db, "eventCollection", eventId);

  const data = {
    eventDetails: eventDetails,
  };
  await updateDoc(docRef, data)
    .then(() => console.log("Event Updated......!"))
    .catch((e) => console.log(e));
};

//Add user into event
export const addUserToEvent = async (email, eventId, eventName) => {
  await getUserByEmail(email).then((res) => {
    const docRef = doc(db, "eventCollection", eventId);
    addEventToUser(res.uid, eventId, eventName);
    updateDoc(docRef, {
      usersList: arrayUnion(res.uid),
    });
  });
};

//Remove user from event
export const removeUserToEvent = async (email, eventId) => {
  await getUserByEmail(email).then((res) => {
    const docRef = doc(db, "eventCollection", eventId);
    updateDoc(docRef, {
      usersList: arrayUnion(res.uid),
    });
  });
};
