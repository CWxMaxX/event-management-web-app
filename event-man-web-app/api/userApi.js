import {
  collection,
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

// Add User
export const addUser = async (user) => {
  // const user = auth.js.currentUser;
  const userId = user?.uid;
  console.log(user);
  const docRef = doc(db, "users", userId);
  const data = {
    userDetails: {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL,
    },
    eventList: [],
  };
  await setDoc(docRef, data, { capital: true }, { merge: true })
    .then(() => {
      console.log("Document has been added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get User Details

export const getUserDetails = () => {};

// Get Event list

export const getEventListByUser = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data()?.eventList);
    return docSnap.data()?.eventList;
  } else {
    // doc.data() will be undefined in this case
    console.log("No user found!");
  }
};

// Add Event

export const addEventToUser = async (uid, event, name) => {
  const docRef = doc(db, "users", uid);
  const data = { name: name, eventId: event };
  await updateDoc(docRef, {
    eventList: arrayUnion(data),
  });
};

// Remove Event

// export const removeEventFromUser = async (uid, event) => {
//   const docRef = doc(db, "users", uid);
//   await updateDoc(docRef, {
//     eventList: arrayRemove(event),
//   });
// };

// Get User By Email
export const getUserByEmail = async (email) => {
  const docRef = collection(db, "users");
  const q = query(docRef, where("userDetails.email", "==", email));

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.docs[0].data()?.userDetails);
  return querySnapshot.docs[0].data()?.userDetails;
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.data());
  // });
};
