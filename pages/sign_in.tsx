import axios from "axios";
import { useRef, useState } from "react";
import custom from "@/styles/Custom.module.css";
import Box from "@mui/material/Box";
import * as React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logged } from "@/redux/action";
function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<any>("");
  const btn = useRef<HTMLFormElement | undefined | null>(undefined);
  const [data, setData] = useState<any>({
    display: "none",
    bg: "primary.main",
    color: "primary.contrastText",
  });
  const access = useDispatch();
  const router = useRouter();

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
      .post(
        "/api/user/sign_in",
        {
          email: form.email,
          password: form.password,
        },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      )
      .then(({ data }) => {
        setMessage(data.message);
        logMessage("success.contrastText", "success.main");
        //user has logged in
        access(logged(true));
        // setter
        localStorage.setItem("token", data.token);
        router.push("/jobs");
      })
      .catch((error) => {
        setMessage(JSON.parse(error.request.response).info);
        logMessage("error.contrastText", "error.main");
      });
  }
  function handlePost(e: any) {
    e.preventDefault();
    console.log(form);
    if (form.password !== "" && form.email !== "") {
      handleSubmit();
    } else {
      setMessage("please make sure you fill username and password fields");
      logMessage("warning.contrastText", "warning.main");
    }
  }

  return (
    <main>
      <h2>Input your Details to Login</h2>
      <form ref={btn} onSubmit={handlePost} className={custom.form}>
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

export default SignIn;
