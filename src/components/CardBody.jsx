import React from "react";
import styles from "./../cards.module.css";
const CardBody = ({ job, index }) => {
  const addApplyLink = (index, { how_to_apply }) => {
    var links = how_to_apply?.match(/href="([^"]*)/);
    let href = null;
    if (links?.length > 0) {
      [href] = links;
      href = href.slice(6);
    }

    const element = (
      <p>
        <a className={styles.apply} href={href} target="_blank">
          apply
        </a>
      </p>
    );
    // console.log(element, href);
    return element;
  };
  return (
    <div className={styles.body}>
      <p>
        <span>Hiring Company :</span>
        {job.company}
      </p>
      <p>
        <span>Job Type :</span>
        {job.type}
      </p>
      {job.company_url && (
        <p className={styles.link}>
          <span>Company website :</span>
          <a href={job.company_url}>visit</a>
        </p>
      )}
      <p className={styles.readmore}>
        <span>Read more about job :</span>
        <a href={job.company_url}>read more</a>
      </p>
      {addApplyLink(index, job)}
    </div>
  );
};

export default CardBody;
