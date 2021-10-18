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
    };
    let data1 = await addNewMeet(obj);
    dispatch(addMeetAction(data1));
    getAllMeetData();
  };

  const getAllMeetData = async () => {
    console.log(data);
    let data1 = await getAllMeet();
    dispatch(getMeetAction(data1));
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
              <input type="submit" />
              <br />
              <button onClick={() => setAddMeet(false)}>Cancel</button>
            </form>
          )}
        </div>
        <button onClick={() => setAddMeet(true)}>Add Meet</button>
      </div>
      <div>
        {data.map(({ title, description, date, time }) => (
          <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{date}</div>
            <div>{time}</div>
          </div>
        ))}
      </div>
    </>
  );
}
// title, description, optionally image, date and time of occurrence, rating
