import data from "data/projects";

export default function getSingleProject({ slug }) {
  // A fetch to an API will be done here.
  // For now, we use static data with a promise to prepare for the fetch response
  return new Promise((resolve, reject) => {
    resolve(data.projects.find((o) => o.slug === slug));
  });
}
