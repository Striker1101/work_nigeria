import axios from "axios";
import { useEffect, useRef, useState } from "react";
import custom from "@/styles/Custom.module.css";
import Box from "@mui/material/Box";
import * as React from "react";
import { HideNav } from "@/utils/data";
function SignUp() {
  HideNav(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [message, setMessage] = useState<any>("");
  const btn = useRef<HTMLFormElement | undefined | null>(undefined);
  const [data, setData] = useState<any>({
    display: "none",
    bg: "primary.main",
    color: "primary.contrastText",
  });

  function handleForm(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function logMessage(color: string, bg: string) {
    setData({
      ...data, // Copy the old fields
      display: "inline", // But override this one
      color: color,
      bg: bg,
    });
    setTimeout(() => {
      setData({
        ...data, // Copy the old fields
        display: "none", // But override this one
      });
    }, 3000);
  }

  function handleSubmit() {
    axios
      .post("/api/user/sign_up", {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      })
      .then(({ data }) => {
        console.log(data);
        setMessage(data);
        logMessage("success.contrastText", "success.main");
      })
      .catch((error) => {
        console.log(error);
        setMessage("user already resgistered");
        logMessage("warning.contrastText", "error.main");
        console.log(data);
      });
  }

  function handlePost() {
    e.preventDefault();
    if (form.password === form.cpassword && form.password !== "") {
      handleSubmit();
    } else {
      setMessage("please make sure both password are correct");
      logMessage("warning.contrastText", "warning.main");
    }
  }

  return (
    <main>
      <h2>Fill the Below Form </h2>
      <form onSubmit={handlePost} ref={btn} className={custom.form}>
        <label htmlFor="firstName">
          FirstName
          <input
            onChange={handleForm}
            className={custom.input}
            type="text"
            name="firstName"
            id="firstName"
          />
        </label>
        <label htmlFor="lastName">
          LastName
          <input
            onChange={handleForm}
            className={custom.input}
            type="text"
            name="lastName"
            id="lastName"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={handleForm}
            className={custom.input}
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="Password">
          Password
          <input
            onChange={handleForm}
            className={custom.input}
            type="password"
            name="password"
            id="password"
          />
        </label>

        <label htmlFor="Password">
          Confirm Password
          <input
            onChange={handleForm}
            className={custom.input}
            type="password"
            name="cpassword"
            id="cpassword"
          />
        </label>

        <button aria-label="submit" className={custom.button} type="submit">
          Submit
        </button>
      </form>
      <Box
        component="div"
        sx={{
          display: data.display,
          bgcolor: data.bg,
          color: data.color,
          p: 2,
        }}
      >
        {message}
      </Box>
    </main>
  );
}

export default SignUp;
