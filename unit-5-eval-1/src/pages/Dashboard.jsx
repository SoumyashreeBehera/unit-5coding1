import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

export default function Dashboard() {
  const { isAuth } = useSelector((state) => state.auth);
  const [addMeet, setAddMeet] = useState(false);
  const [meetTitle, setMeetTitle] = useState("");
  const [meetDescription, setMeetDescription] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [meetTime, setMeetTime] = useState("");

  const handleNewMeet = () => {};

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
