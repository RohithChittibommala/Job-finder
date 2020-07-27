import axios from "axios";

export const getJobsData = async (number = 0) => {
  const { data } = await axios.get(
    `https://jobs.github.com/positions.json?description=backend&page=${number}`
  );
  return data;
};
// https://cors-anywhere.herokuapp.com/
