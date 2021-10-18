import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { addNewMeet } from "../utils/jsonServer";

export default function Dashboard() {
  const [addMeet, setAddMeet] = useState(false);
  const [meetTitle, setMeetTitle] = useState("");
  const [meetDescription, setMeetDescription] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [meetTime, setMeetTime] = useState("");

  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleNewMeet = () => {
    let obj = {
      title: meetTitle,
      description: meetDescription,
      date: meetDate,
      time: meetTime,
    };
    let data = addNewMeet(obj);
  };

  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <div>
        {addMeet && (
          <form onSubmit={handleNewMeet}>
            <input
              type="text"
              placeholder="title"
              onChange={(e) => setMeetTitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="description"
              onChange={(e) => setMeetDescription(e.target.value)}
            />
            <br />
            <input
              type="date"
              placeholder="date"
              onChange={(e) => setMeetDate(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="time"
              onChange={(e) => setMeetTime(e.target.value)}
            />
            <br />
            <button onClick={() => setAddMeet(false)}>Cancel</button>
          </form>
        )}
      </div>
      <button onClick={() => setAddMeet(true)}>Add Meet</button>
    </div>
  );
}
// title, description, optionally image, date and time of occurrence, rating
