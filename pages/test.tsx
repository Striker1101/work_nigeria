import axios from "axios";
import React, { useEffect, useState } from "react";

function Test() {
  const [user, setUser] = useState<Array<never>>([]);
  useEffect(() => {
    axios.get("/api/users").then(({ data }) => {
      setUser(data.user);
    });
  }, []);
  return <div></div>;
}

export default Test;
