import axios from "axios";
import React, { useEffect, useState } from "react";

function Test() {
  const [user, setUser] = useState<Array<any>>([]);
  useEffect(() => {
    axios
      .post("/api/user/login",
      {
        email:"goodluck"
      })
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        let message;
        if (error.response) {
          message = error.response.data.message;
        } else {
          message = error.message;
        }
        console.log(message);
      });
  }, []);

  return (
    <div>
      {user.map((item) => {
        return <>{item.firstName}</>;
      })}
    </div>
  );
}

export default Test;
