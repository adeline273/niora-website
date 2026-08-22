import type { Metadata } from "next";

export const SITE_URL = "https://niorasystems.com";
export const SITE_NAME = "Niora Systems";
export const DEFAULT_OG_IMAGE = "/assets/hero-poster.png";

export type PublicRoute = {
  path: string;
  title: string;
  description: string;
  priority?: number;
};

export const publicRoutes: PublicRoute[] = [
  {
    path: "/",
    title: "Pharmaceutical Procurement Infrastructure | Niora Systems",
    description:
      "Niora Systems builds pharmaceutical procurement infrastructure connecting hospitals, suppliers, inventory, financing, ordering and delivery, starting in Ghana.",
    priority: 1,
  },
  {
    path: "/platform",
    title: "Pharmaceutical Procurement Platform | Niora Systems",
    description:
      "See how Niora coordinates inventory signals, demand planning, procurement, supplier coordination, financing, ordering, delivery and accountable records.",
    priority: 0.9,
  },
  {
    path: "/markets/ghana",
    title: "Pharmaceutical Procurement Infrastructure in Ghana | Niora Systems",
    description:
      "Niora is building more reliable pharmaceutical procurement infrastructure for hospitals, suppliers and health systems in Ghana.",
    priority: 0.8,
  },
  {
    path: "/solutions/hospitals",
    title: "Hospital Pharmaceutical Procurement | Niora Systems",
    description:
      "Niora supports hospital and health-system procurement teams with inventory visibility, demand planning, supplier coordination, financing workflows and delivery visibility.",
    priority: 0.8,
  },
  {
    path: "/solutions/suppliers",
    title: "Pharmaceutical Supplier Coordination | Niora Systems",
    description:
      "Niora helps pharmaceutical suppliers coordinate institutional demand, order visibility, payment workflows and more reliable fulfillment.",
    priority: 0.75,
  },
  {
    path: "/research",
    title: "Pharmaceutical Procurement Research | Niora Systems",
    description:
      "Niora studies pharmaceutical procurement through real-world implementation, health-system collaboration and original research references.",
    priority: 0.75,
  },
  {
    path: "/careers",
    title: "Careers at Niora Systems | HealthTech Jobs in Accra",
    description:
      "Join Niora Systems to build procurement, payments and financing infrastructure for healthcare institutions in Ghana and emerging markets.",
    priority: 0.6,
  },
  {
    path: "/careers/full-stack-engineer",
    title: "Full-Stack Engineer | Niora Systems Careers",
    description:
      "Apply for a full-stack engineering role building Niora's healthcare procurement platform with teams working across Accra, Ghana and remotely.",
    priority: 0.5,
  },
  {
    path: "/signup",
    title: "Request Access | Niora Systems",
    description:
      "Request access to Niora's verified institutional procurement platform for hospitals, health systems, suppliers and procurement organizations.",
    priority: 0.55,
  },
];

export function canonicalUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function routeMetadata(route: PublicRoute): Metadata {
  const url = canonicalUrl(route.path);

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Niora Systems pharmaceutical procurement infrastructure",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function getRoute(path: string) {
  const route = publicRoutes.find((item) => item.path === path);

  if (!route) {
    throw new Error(`Missing SEO route configuration for ${path}`);
  }

  return route;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description:
      "Niora Systems builds pharmaceutical procurement infrastructure for hospitals, health systems, suppliers and other institutional procurement stakeholders, starting in Ghana.",
    location: [
      {
        "@type": "Place",
        name: "Accra",
      },
      {
        "@type": "Place",
        name: "Stanford",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/niora-systems/",
      "https://www.instagram.com/niorasystems/",
      "https://x.com/NioraSystems",
      "https://www.youtube.com/@NioraSystems",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
