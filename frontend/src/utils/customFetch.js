import axios from "axios";

const customFetch = axios.create({
  baseURL:
    "https://job-tracker-au74c2qu3-koushik-ahmeds-projects.vercel.app/api/v1",
});

export default customFetch;
