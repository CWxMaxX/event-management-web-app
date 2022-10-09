import React from "react";
import { Button } from "@mui/material";
import {
  addEventToUser,
  getEventListByUser,
  getUserByEmail,
} from "../../api/userApi";
import {
  addUserToEvent,
  createEvent,
  getEventDetails,
  getEventsByUserId,
  updateEventDetails,
} from "../../api/eventApi";

function index() {
  return (
    <div>
      {/*<Button onClick={() => addUser()}>Add New User</Button>*/}
      <Button
        onClick={() => getEventListByUser("h8lHxG3GaJfWDzDvbV2CFloBu0u2")}
      >
        Get Event List
      </Button>
      <Button
        onClick={() => {
          addEventToUser("h8lHxG3GaJfWDzDvbV2CFloBu0u2", ["e8"]).then(() => {
            console.log("Event Added....");
          });
        }}
      >
        Add Event
      </Button>
      <Button
        onClick={() => {
          createEvent("h8lHxG3GaJfWDzDvbV2CFloBu0u2", {
            name: "test event",
            location: "gampaha",
          })
            .then(() => {
              console.log("Event Created.......!");
            })
            .catch((e) => console.log(e));
        }}
      >
        Create Event
      </Button>{" "}
      <Button
        onClick={() => {
          getEventDetails("6sYYBD1POx4Y440oxVuv")
            .then(() => {
              console.log("Get event .......!");
            })
            .catch((e) => console.log(e));
        }}
      >
        Get Event Details
      </Button>
      <Button
        onClick={() => {
          getEventsByUserId("LTuBW6B2PCPI11rLiYWxzzzsiUI2").then((res) =>
            console.log(res)
          );
        }}
      >
        Get Events By User
      </Button>
      <Button
        onClick={() => {
          updateEventDetails("6sYYBD1POx4Y440oxVuv", {
            location: "Nuwara Eliya TS",
            name: "Event 1",
            date: "7/12/23",
            flag: "red",
          }).then(() => {});
        }}
      >
        Update Event
      </Button>
      <Button
        onClick={() => {
          getUserByEmail("s16538@sci.pdn.ac.lk").then(() => {});
        }}
      >
        Get User by Email
      </Button>
      <Button
        onClick={() => {
          addUserToEvent(
            "s16538@sci.pdn.ac.lk",
            "Rnu2w4eukYE6n8qs50Yd",
            "Test Event"
          ).then(() => {
            console.log("Event added......!");
          });
        }}
      >
        Add User to Event
      </Button>
    </div>
  );
}

export default index;
