import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { HideNav } from "@/utils/data";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  HideNav(true);
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
        <Link href={"/jobs"}>job</Link>
      </main>
    </>
  );
}
