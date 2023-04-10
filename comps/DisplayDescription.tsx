interface Prop {
  postIndex: number;
  data: any;
}
import React from "react";
import job from "@/styles/Job.module.css";
function DisplayDescription({ data, postIndex }: Prop) {
  let item = data[postIndex];
  return (
    <div className={job.jobsDesc}>
      <div className={job.scroll}>
        <h2>{item.name}</h2>
        <h4>{item.website}</h4>
        <p>{item.username}</p>
        <p>{item.address.city}</p>
      </div>
    </div>
  );
}

export default DisplayDescription;
