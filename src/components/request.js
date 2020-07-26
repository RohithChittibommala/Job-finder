import axios from "axios";

export const getJobsData = async () => {
  const { data } = await axios.get(
    "https://jobs.github.com/positions.json?description=java&page=2"
  );
  return data;
};
// https://cors-anywhere.herokuapp.com/
