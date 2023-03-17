import Link from "next/link";
import React from "react";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
};
function Jobs({ data }: any) {
  return (
    <>
      {data.map((item: any) => {
        return (
          <Link href={"/jobs/" + item.id} key={item.id}>
            <h3>{item.name}</h3>
          </Link>
        );
      })}
      <h1> this jobs</h1>
    </>
  );
}

export default Jobs;
