import axios from "axios";
import React, { useEffect, useState } from "react";

function SignUp() {
  const [data, setData] = useState<Array<any>>([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    axios
      .post("/api/user/sign_up", {
        form,
      })
      .then(({ data }) => {
        setData(data);
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

  return <div></div>;
}

export default SignUp;

