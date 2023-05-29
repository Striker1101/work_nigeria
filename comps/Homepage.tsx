import React, { useRef, useState } from "react";
import styles from "../styles/Homepage.module.css";
import Image from "next/image";
function Homepage() {
  const [menu, setMenu] = useState<boolean>(false);
  function MenuCliked(e: any) {
    e.currentTarget.children[0].classList.toggle("change");
  }
  return (
    <div>
      <nav>
        <div className={styles.menu} onClick={() => setMenu(!menu)}>
          {menu ? (
            <Image
              height={30}
              width={30}
              src="./images/homepage/menu.svg"
              alt="open menu"
            />
          ) : (
            <Image
              height={30}
              width={30}
              src="/images/homepage/close-box.svg"
              alt="closed menu"
            />
          )}
        </div>
        <Image height={50} width={50} src="" alt="Logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginRight: "10px",
          }}
          className={styles.lang}
        >
          <p>EN</p>
          <p>IG</p>
          <p>HA</p>
          <p>YO</p>
        </div>
      </nav>
    </div>
  );
}

export default Homepage;
