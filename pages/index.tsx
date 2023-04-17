import Head from "next/head";
// import { Inter } from "next/font/google";
import { HideNav } from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// const inter = Inter({ subsets: ["latin"] });

export function getStaticProps({ locale }: any) {
  return {
    props: {
      locale,
      // will be passed to the page component as props
    },
  };
}
export default function Home(props: any) {
  const { t: translate } = useTranslation("home");
  const { locale, locales, push } = useRouter();
  HideNav(true);
  <h1>{props.locale}</h1>;
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

        <Link href={"/jobs"}>job</Link>
      </main>
    </>
  );
}
