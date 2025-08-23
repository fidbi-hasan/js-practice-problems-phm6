const company = {
  name: "TechNova",
  founded: 2020,
  departments: {
    engineering: {
      backend: {
        languages: {
          primary: "Golang",
          secondary: "Node.js"
        }
      },
      frontend: {
        frameworks: {
          primary: "React",
          secondary: "Vue"
        }
      }
    }
  }
};

const company2 = {
  name: "TechNova",
  founded: 2020,
  departments: {
    engineering: {
      backendDev: {
        languages: {
          primary: "Golang",
          secondary: "Node.js"
        }
      },
      frontend: {
        frameworks: {
          primary: "React",
          secondary: "Vue"
        }
      }
    }
  }
};

console.log(company?.departments?.engineering?.backend?.languages?.primary);
console.log(company2?.departments?.engineering.backend.languages?.primary ?? "value does not exist");