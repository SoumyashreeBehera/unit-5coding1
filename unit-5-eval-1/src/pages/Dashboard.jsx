import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { addMeetAction, getMeetAction } from "../Redux/MeetUp/actions";
import { addNewMeet, getAllMeet } from "../utils/jsonServer";

export default function Dashboard() {
  const [addMeet, setAddMeet] = useState(false);
  const [meetTitle, setMeetTitle] = useState("");
  const [meetDescription, setMeetDescription] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [meetTime, setMeetTime] = useState("");
  const [meetLocation, setMeetLocation] = useState("");
  const { isAuth } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.meet);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllMeetData();
  }, []);

  const handleNewMeet = async (e) => {
    e.preventDefault();
    let obj = {
      title: meetTitle,
      description: meetDescription,
      date: meetDate,
      time: meetTime,
      location: meetLocation,
    };
    let data1 = await addNewMeet(obj);
    dispatch(addMeetAction(data1));
    getAllMeetData();
  };
  const handleNewLocation = async (e) => {
    let res = await axios.get("http://localhost:3001/meets", {
      params: {
        location: e.target.value,
      },
    });
    dispatch(getMeetAction(res.data));
  };

  const getAllMeetData = async () => {
    let data1 = await getAllMeet();
    console.log(data1);
    dispatch(getMeetAction(data1));
    console.log("yes");
  };

  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <>
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
              <input
                type="text"
                placeholder="location"
                onChange={(e) => setMeetLocation(e.target.value)}
              />
              <br />
              <input type="submit" />
              <br />
              <button onClick={() => setAddMeet(false)}>Cancel</button>
            </form>
          )}
        </div>
        <button onClick={() => setAddMeet(true)}>Add Meet</button>
      </div>
      <select onChange={handleNewLocation}>
        <option value="cdr">cdr</option>
        <option value="ctc">ctc</option>
        <option value="bbsr">bbsr</option>
      </select>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,20%)" }}>
        {data.map(({ title, description, location, date, time }) => (
          <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{location}</div>
            <div>{date}</div>
            <div>{time}</div>
          </div>
        ))}
      </div>
    </>
  );
}
// title, description, optionally image, date and time of occurrence, rating
