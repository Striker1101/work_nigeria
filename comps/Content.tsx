import React, { useState } from "react";
import Person3Icon from "@mui/icons-material/Person3";
import { ContentStyled, LinkStyled } from "./styles/Nav";
function Content() {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <Person3Icon />
      </div>
      {toggle && (
        <ContentStyled>
          <LinkStyled>Notification</LinkStyled>
          <LinkStyled>Profile</LinkStyled>
          <LinkStyled>Settings</LinkStyled>
        </ContentStyled>
      )}  
    </div>
  );
}

export default Content;
