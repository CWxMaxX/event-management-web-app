import { addDoc, collection, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { addEventToUser } from "./userApi";
import { addExpense, removeExpense } from "./eventApi";

//To create expense
export const createExpense = async (uid, eventID) => {
  const data = {
    name: "",
    creator: uid,
    eventID: eventID,
    status: "PLANING",
  };
  console.log(data);
  const docRef = collection(db, "expenseCollection");
  await addDoc(docRef, data)
    .then((res) => {
      addExpense(eventID, res.id)
        .then((res) => {})
        .catch((e) => console.log(e));
      console.log("Expense Added.....!", res.id);
    })
    .catch((error) => {
      console.log(error);
    });
};

//Get expenses by eventId
export const getExpensesByEventID = async (eventId) => {
  const docRef = doc(db, "eventCollection", eventId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data()?.expensesList);
    return docSnap.data()?.expensesList;
  } else {
    // doc.data() will be undefined in this case
    console.log("No expense found!");
  }
};

//Remove expense by eventID and expenseID
export const deleteExpense = async (eventId, expenseId) => {
  const docRef = doc(db, "expenseCollection", expenseId);
  await removeExpense(eventId, expenseId)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
  await deleteDoc(docRef);
};
