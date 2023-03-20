import React, { useEffect } from "react";
import { NavStyled, LinkStyled } from "./styles/Nav";
import Link from "next/link";
import { useSelector } from "react-redux";
import custom from "@/styles/Custom.module.css";
import Content from "./Content";

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
    <NavStyled>
      <div>
        <h1>logo</h1>
      </div>
      <ul>
        <Link href={"/"}>
          <LinkStyled>Home</LinkStyled>
        </Link>

        <Link href={"/jobs"}>
          <LinkStyled>Job</LinkStyled>
        </Link>

        <Link href={"/sign_up"}>
          <LinkStyled>Sign up</LinkStyled>
        </Link>
        {collector.logged || token !== "" ? (
          <div
            style={{
              display: "flex",
              gap: "10px",
              position: "relative",
              bottom: "2px",
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
            <LinkStyled>Sign in</LinkStyled>
          </Link>
        )}
      </ul>
    </NavStyled>
  );
}

export default Navbar;
