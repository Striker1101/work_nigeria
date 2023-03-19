import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";

const Nav = styled("nav")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

function Navbar() {
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

        <Link href={"/sign_in"}>
          <li>Sign In</li>
        </Link>
      </ul>
    </Nav>
  );
}

export default Navbar;
