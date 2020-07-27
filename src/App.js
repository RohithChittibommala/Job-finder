import React, { Component } from "react";
import { getJobsData } from "./components/request";
import styles from "./app.module.css";
import Card from "./components/card";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  state = {
    jobs: [],
    number: 1,
  };
  async componentDidMount() {
    const data = await getJobsData();
    this.setState({ jobs: data });
  }
  fetchMoreJobs = async () => {
    let number = this.state.number;
    number = number + 1;
    let data = await getJobsData(number);
    if (data === this.state.jobs || data.length === 0)
      return toast.error("sorry no new jobs found");
    const jobs = [...this.state.jobs, data];
    this.setState({ number, jobs });
  };
  render() {
    const { jobs } = this.state;
    return (
      <div className={styles.container}>
        <ToastContainer />
        <h1 className={styles.jobnumber}>
          Showing {jobs.length} jobs from github jobs
        </h1>
        {jobs.map((job, index) => (
          <Card key={job.id} job={job} index={index} />
        ))}
        {jobs.length && (
          <p className={styles.loadmore} onClick={this.fetchMoreJobs}>
            Load More<i className="fa fa-arrow-down"></i>
          </p>
        )}
      </div>
    );
  }
}

export default App;
