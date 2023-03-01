import data from "data/projects";

export default function getProjects() {
  // A fetch to an API will be done here.
  // For now, we use static data with a promise to prepare for the fetch response
  return new Promise((resolve, reject) => {
    resolve(
      data.projects.map((project) => {
        const { slug, overview, id, images } = project;
        const { client, heading } = overview;
        return {
          id,
          slug,
          client,
          heading,
          images
        };
      })
    );
  });
}
