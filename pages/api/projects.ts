// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "@/types/Project";

const projects: Project[] = [
  {
    title: "Vanglaini",
    image: "/images/vanglaini.org_.png",
    link: "https://vanglaini.org",
    subtitle: "vanglaini.org",
    body: "Vanglaini is a daily newspaper in Mizoram, India. They are the largest newspaper in the state.",
    tools: ["react", "nextjs", "tailwindcss", "swrv"],
  },
  {
    title: "Synod Archive",
    image: "/images/synod.tukverh.com_.png",
    link: "",
    subtitle: "offline",
    body: "Offline frontend for the Archival System used by the Synod Council, Mizoram.",
    tools: ["vue", "nuxt", "tailwindcss"],
  },
  {
    title: "LBAssociates",
    image: "/images/lbassociates.in_.png",
    link: "https://lbassociates.in",
    subtitle: "lbassociates.in",
    body: "L.B. Associates is the premiere architecture and construction consultancy firm in Mizoram.",
    tools: ["react", "nextjs", "prismic.io"],
  },
  {
    title: "BNCollege of Nursing",
    image: "/images/bncollege.png",
    link: "https://bncollegeofnursingmizoram.com",
    subtitle: "bncollegeofnursingmizoram.com",
    body: "BN College of Nursing, Mizoram is an autonomous Institution established by BN Foundation Society.",
    tools: ["react", "nextjs", "netlify-cms"],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).json(projects);
}
