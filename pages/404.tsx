import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
function Error() {
  const router = useRouter();
  useEffect(() => {
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      //router.go(-1)
      router.push("/");
      return clearTimeout(timer);
    }, 3000);
  }, []);
  return (
    <div>
      <h1> oooops, </h1>
      <h1>we can find this page</h1>
      <p>
        <Link href={"/"}>Go back to homepage</Link>
      </p>
    </div>
  );
}

//place styling in global
//style link with underline and blue

export default Error;
