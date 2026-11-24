import type { Metadata } from "next";

import Content from "@/content/work/lumo-sentry.mdx";
import { WorkCaseStudy } from "@/components/stacked/work-case-study";
import { workProjects } from "@/content/work/projects";
import { LUMO_SENTRY_ANCHORS } from "@/lib/routes";

const project = workProjects.find((p) => p.slug === "lumo-sentry")!;

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

export default function LumoSentryCaseStudy() {
  return (
    <WorkCaseStudy project={project} anchors={LUMO_SENTRY_ANCHORS}>
      <Content />
    </WorkCaseStudy>
  );
}
