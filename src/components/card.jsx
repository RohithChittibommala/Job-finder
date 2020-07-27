import React from "react";
import styles from "./../cards.module.css";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
const Card = ({ job, index }) => {
  if (!job.title) return null;
  return (
    <div className={styles.card}>
      <CardHeader job={job} />
      <CardBody job={job} index={index} />
    </div>
  );
};

export default Card;
