import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Link from "next/link";
import { useSelector } from "react-redux";
import custom from "@/styles/Custom.module.css";
import Content from "./Content";

const Nav = styled("nav")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

function Navbar() {
  var token: any = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  function handleLogout() {
    console.log("off");
  }
  const collector = useSelector((state: any) => state.lists);
  return (
    <Nav>
      <div>
        <h1>logo</h1>
      </div>
      <ul>
        <Link href={"/"}>
          <li>Home</li>
        </Link>

        <Link href={"/jobs"}>
          <li>Job</li>
        </Link>

        <Link href={"/sign_up"}>
          <li>Sign up</li>
        </Link>
        {collector.logged || token !== "" ? (
          <div
            style={{
              display: "flex",
              gap: "10px",
              position: "relative",
              bottom: "4px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button onClick={handleLogout} className={custom.navBTN}>
              Sign Out
            </button>
            <li>
              <Content />
            </li>
          </div>
        ) : (
          <Link href={"/sign_in"}>
            <li>Sign in</li>
          </Link>
        )}
      </ul>
    </Nav>
  );
}

export default Navbar;
