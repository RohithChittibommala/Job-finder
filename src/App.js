import React, { Component } from "react";
import { getJobsData } from "./components/request";
import styles from "./app.module.css";
import Card from "./components/card";
class App extends Component {
  state = {
    jobs: [],
  };
  async componentDidMount() {
    const data = await getJobsData();
    this.setState({ jobs: data });
  }
  render() {
    const { jobs } = this.state;
    return (
      <div className={styles.container}>
        {jobs.map((job) => (
          <Card key={job.id} job={job} />
        ))}
      </div>
    );
  }
}

export default App;
