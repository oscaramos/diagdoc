// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: "/nomnoml_class",
        destination: "https://www.nomnoml.com",
        permanent: true,
      },
      {
        source: "/plantuml_use-case",
        destination: "https://plantuml.com/use-case-diagram",
        permanent: true,
      },
    ];
  },
};
