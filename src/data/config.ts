const config = {
  title: "Mitesh Singh | Full Stack Developer",
  description: {
    long: "Portfolio of Mitesh Singh, a Full Stack Developer with experience in IT support, networking infrastructure, software troubleshooting, and application development.",
    short:
      "Mitesh Singh — Full Stack Developer from Gurugram with a background in IT support, networking, debugging, and software development.",
  },
  keywords: [
    "Mitesh Singh",
    "Full Stack Developer",
    "IT Executive",
    "Networking",
    "Software Troubleshooting",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Computer Networks",
    "Git",
    "GitHub",
    "Postman",
    "WordPress",
    "Agri Market App",
    "Fashion Ekart",
    "SAP Management System",
  ],
  author: "Mitesh Singh",
  email: "miteshhsingh@gmail.com",
  site: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  githubUsername: "miteshsinghh",
  githubRepo: "",
  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/miteshsinghh",
    github: "https://github.com/miteshsinghh",
  },
};
export { config };
