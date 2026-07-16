const BASE_URL = "https://www.lumhera.com";

export default function sitemap() {
  const lastModified = new Date();

  const routes = [
    { path: "/", changeFrequency: "monthly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/learn", changeFrequency: "monthly", priority: 0.8 },
    { path: "/method", changeFrequency: "monthly", priority: 0.8 },
    { path: "/tools", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { path: "/privacyanddisclaimer", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
