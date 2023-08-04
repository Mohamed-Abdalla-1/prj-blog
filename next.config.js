const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Mohamed",
        mongodb_password: "n3VKbawxLTgl0Y9h",
        mongodb_clustername: "cluster0",
        mongodb_database: "next-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Mohamed",
      mongodb_password: "n3VKbawxLTgl0Y9h",
      mongodb_clustername: "cluster0",
      mongodb_database: "next-blog",
    },
  };
};
