import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Flex } from "@/comps/styles/Global";
import job from "@/styles/Job.module.css";
import Head from "next/head";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { data },
    revalidate: 10,
  };
};

function handleHire() {}
//  Todo: cache placeholder country valur
function Jobs({ data }: any) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="list of jobs available" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="jobs in nigeria" />
      </Head>
      <main>
        <form className={job.formJob}>
          <Flex dir="column" sx="row">
            <label htmlFor="job">
              <input
                placeholder="job title, keywords, or company"
                type="text"
                name="job"
                id="job"
              />
              <div className={job.iconJob}>
                <LocationOnIcon />
              </div>
            </label>
            <label htmlFor="state">
              <input placeholder="State" type="text" name="state" id="state" />
              <div className={job.iconJob}>
                <SearchIcon />
              </div>
            </label>
            <input type="submit" value="Submit" />
          </Flex>
        </form>

        <div>
          <span>
            <a className={job.hire} onClick={handleHire} href="https://">
              Employers: Post a job{" "}
            </a>
          </span>
          <span>– Your next hire is here</span>
        </div>

        <div className={job.jobsContianer}>
          <div className={job.jobsHeader}>
            <button type="submit">
              <h2>Job Feed</h2>
            </button>
            <button type="submit">
              <h2>Recent Searchs</h2>
            </button>
          </div>
          <div className={job.content}>
            <div className={job.jobsPost}>
              <DisplayJobs />
            </div>
            <div className={job.jobsDesc}></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Jobs;
