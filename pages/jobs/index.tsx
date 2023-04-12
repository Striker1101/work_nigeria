import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Flex } from "@/comps/styles/Global";
import job from "@/styles/Job.module.css";
import Head from "next/head";
import { HideNav } from "@/utils/data";
import DisplayDescription from "@/comps/DisplayDescription.tsx";
import DisplayJobs from "@/comps/DisplayJobs";
import { useTranslation } from "next-i18next";
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
  HideNav(false);
  const { t } = useTranslation();
  const [postIndex, setPostIndex] = useState(-1);
  const [search, setSeach] = useState(true);
  function handleRecent() {
    // load data for recent view logs
  }
  function handleSelect(e: any, type: string) {
    switch (type) {
      case "time":
        console.log("time");
      // return the search string for this
      case "kilometer":
      // return the search string for this
      case "type":
      // return the search string for this
      case "location":
      // return the search string for this
    }
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="list of jobs available" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="jobs in nigeria" />
      </Head>
      <main>
        <form className={job.form}>
          <Flex dir="column" mobile="row">
            <label htmlFor="job">
              <input
                placeholder="job title, keywords, or company"
                type="text"
                name="job"
                id="job"
              />
              <div className={job.icon}>
                <LocationOnIcon />
              </div>
            </label>
            <label htmlFor="state">
              <input placeholder="State" type="text" name="state" id="state" />
              <div className={job.icon}>
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

        <div className={job.searchOption}>
          {search && (
            <div className={job.tags}>
              <select
                onChange={(e: any) => {
                  handleSelect(e, "time");
                }}
                name="time"
                id="time"
              >
                <option className={job.selected} selected value="">
                  Date Posted
                </option>
                <option value="24">Last 24 hours</option>
                <option value="3">Last 3 hours</option>
                <option value="7">Last 7 hours</option>
                <option value="24">Last 14 hours</option>
                <option value="&">Since your Last visit</option>
              </select>
              <select
                onChange={(e: any) => {
                  handleSelect(e, "kilometer");
                }}
                name="kilometer"
                id="kilometer"
              >
                <option value="exact">Exact location only</option>
                <option value="10">within 10 meters</option>
                <option value="25">within 25 meters</option>
                <option value="35">within 35 meters</option>
                <option value="50">within 50 meters</option>
                <option value="75" selected>
                  within 75 meters
                </option>
                <option value="100">within 100 meters</option>
              </select>
              <select
                onChange={(e: any) => {
                  handleSelect(e, "type");
                }}
                name="type"
                id="type"
              >
                <option className={job.selected} value="" selected>
                  {" "}
                  Job Type
                </option>
                <option value="full-time"> Full Time()</option>
                <option value="contract">Contract()</option>
                <option value="intership">Internship()</option>
                <option value="part-time">Part Time()</option>
                <option value="permanent">Permanent()</option>
                <option value="temporary">Temporary()</option>
              </select>
              <select
                onChange={(e: any) => {
                  handleSelect(e, "location");
                }}
                name="location"
                id="location"
              >
                <option className={job.selected} value="" selected>
                  Location
                </option>
                <option value="">{}</option>
              </select>
            </div>
          )}
        </div>

        <div className={job.Contianer}>
          <div className={job.Header}>
            <button type="submit">
              <h2>Job Feed</h2>
            </button>
            <button type="submit">
              <h2 onClick={handleRecent}>Recent Searchs</h2>
            </button>
          </div>
          <div className={job.content}>
            <div>
              {/* Render translated components */}
              {t("jobsDescription", { data, setPostIndex })}
              {t("description", { data, postIndex })}
            </div>
          </div>
          <div className={job.nav}>
            <button>prev</button>
            <div className={job.option}></div>
            <button>next</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Jobs;
