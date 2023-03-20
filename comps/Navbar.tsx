import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Link from "next/link";
import { useSelector } from "react-redux";
import custom from "@/styles/Custom.module.css";
import Person3Icon from "@mui/icons-material/Person3";

const Nav = styled("nav")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

function Navbar() {
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
        {collector.logged || localStorage.getItem("token") !== "" ? (
          <>
            <button className={custom.navBTN}>Sign Out</button>
            <li>
              <Person3Icon />
            </li>
          </>
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
