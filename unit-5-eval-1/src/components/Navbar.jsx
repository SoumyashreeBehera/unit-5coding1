import React from "react";
import { Link } from "react-router-dom";

let Links = [
  {
    id: 0,
    to: "/",
    title: "Dashboard",
  },
  {
    id: 1,

    to: "/login",
    title: "Lognin",
  },
];

export default function Navbar() {
  return (
    <div>
      {Links.map(({ to, id, title }) => (
        <Link key={id} to={to}>
          {title}
        </Link>
      ))}
    </div>
  );
}
