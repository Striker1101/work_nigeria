import React, { useState, useEffect } from "react";
import job from "@/styles/Job.module.css";
import { useRouter } from "next/router";
interface Props {
  data: any;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

function DisplayJobs({ data, setIndex }: Props) {
  const router = useRouter();
  //detect if screen is mobile or desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  function desktop(e: any) {
    let target = e.currentTarget;
    let id = target.getAttribute("data-index");
    setIndex(id);
  }
  function mobile(e: any) {
    let target = e.currentTarget;
    let id = target.getAttribute("data-index");
    router.push(`/jobs/${id}`);
  }
  const handleClick = (e: any) => {
    if (isMobile) {
      // Do something on mobile
      mobile(e);
    } else {
      // Do something on desktop
      desktop(e);
    }
  };
  return (
    <div className={job.jobsPosts}>
      {data.map((item: any, index: number) => {
        return (
          <div
            className={job.jobsPost}
            data-index={item.id}
            key={item.id}
            onClick={handleClick}
          >
            <h2>{item.name}</h2>
            <h4>{item.website}</h4>
            <p>{item.username}</p>
            <p>{item.address.city}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayJobs;
