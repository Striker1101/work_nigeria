import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HideNav } from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { locale, locales, push } = useRouter();
  HideNav(true);
  function handleClick(l: string) {
    push("/", undefined, { locale: l });
  }
  return (
    <>
      <Head>
        <title>NiggerJobs</title>
        <meta name="description" content="this is a job site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="jobs in nigeria" />
      </Head>
      <main>
        <h1>{locale}</h1>
        <h2>choose your locale</h2>
        <div>
          {locales?.map((l) => {
            return (
              <button key={l} onClick={handleClick(l)}>
                {l}
              </button>
            );
          })}
        </div>
        <Link href={"/jobs"}>job</Link>
      </main>
    </>
  );
}
