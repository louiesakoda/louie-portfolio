import type { Metadata } from "next";

import Content from "@/content/work/lumo-ghost-check.mdx";
import { WorkCaseStudy } from "@/components/stacked/work-case-study";
import { workProjects } from "@/content/work/projects";
import { LUMO_GHOST_CHECK_ANCHORS } from "@/lib/routes";

const project = workProjects.find((p) => p.slug === "lumo-ghost-check")!;

export const metadata: Metadata = {
  title: project.title,
  description: project.summary ?? project.title,
  openGraph: {
    type: "article",
    title: project.title,
    description: project.summary ?? project.title,
    url: project.href,
  },
  alternates: { canonical: project.href },
};

export default function LumoGhostCheckCaseStudy() {
  return (
    <WorkCaseStudy project={project} anchors={LUMO_GHOST_CHECK_ANCHORS}>
      <Content />
    </WorkCaseStudy>
  );
}
