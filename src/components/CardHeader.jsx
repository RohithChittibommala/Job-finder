import React from "react";
import styles from "./../cards.module.css";
const CardHeader = ({ job }) => {
  return (
    <div className={styles.jobheader}>
      <div className={styles.title}>
        <h1>{job.title}</h1>
        <p>
          <i className="fa fa-map-marker"></i> {job.location}
        </p>
        <p>
          <span>posted on :</span>
          {new Date(job.created_at).toUTCString()}
        </p>
      </div>
      <div className={styles.logo}>
        {job.company_logo && <img src={job.company_logo} alt={job.company} />}
      </div>
    </div>
  );
};

export default CardHeader;
