import { MetadataRoute } from "next";
import { blogPosts } from "../lib/blog";
import { projectItems } from "../lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kolve.com";

  const staticRoutes = [
    "",
    "/services",
    "/services/web-development",
    "/services/ui-ux-design",
    "/services/graphic-design",
    "/services/video-editing",
    "/services/3d-visualization",
    "/work",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const projectRoutes = projectItems.map((p) => `/work/${p.slug}`);

  const allRoutes = [...staticRoutes, ...blogRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-10-11",
    changeFrequency: route === "" ? "weekly" : route.startsWith("/blog") ? "monthly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
