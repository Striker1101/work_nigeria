import axios from "axios";
import { useEffect, useRef, useState } from "react";
import custom from "@/styles/Custom.module.css";
import Box from "@mui/material/Box";
import * as React from "react";

function SignUp() {
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
  useEffect(() => {
    btn.current?.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(form);
      if (form.password === form.cpassword && form.password !== "") {
        handleSubmit();
      } else {
        console.log("here");
        setMessage("please make sure both password are correct");
        logMessage("warning.contrastText", "warning.main");
      }
    });
  }, []);

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
    console.log("in");
    const formData = new FormData();
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("email", form.email);
    formData.append("password", form.password);

    axios
      .post("/api/user/sign_up", {
        formData,
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

  return (
    <main>
      <form ref={btn} className={custom.form}>
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

        <button className={custom.button} type="submit">
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
