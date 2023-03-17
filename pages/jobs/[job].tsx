import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// tells next to prerender jobs
export async function getStaticProps(context: any) {
  const id = context.params.job;
  const req = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await req.json();
  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await req.json();

  const paths = data.map((item: any) => {
    return { params: { job: item.id.toString() } };
  }); 

  return {
    paths,
    fallback: false,
  };
}

export default function Job({ data }: any) {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <p>{data.website}</p>
      </div>
    </>
  );
}
