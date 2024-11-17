import axios from "axios";

const customFetch = axios.create({
  baseURL:
    "https://job-tracker-x7l4-fj7cdzc74-koushik-ahmeds-projects.vercel.app/api/v1",
});

export default customFetch;
