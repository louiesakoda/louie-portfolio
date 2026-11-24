import Image from "next/image";
import Link from "next/link";

import { projectFamily, type WorkProject } from "@/content/work/projects";
import { cn } from "@/lib/utils";

const FAMILY_NAMES: Record<NonNullable<WorkProject["family"]>, string> = {
  lumo: "LUMO",
};

/**
 * The members of a product family, so each case study links to its
 * siblings (Plan 052). Built from `projects.ts`: a new sub-brand is one
 * entry with `family` and `icon`. Icons show at 40px, the smallest size at
 * which a sub-brand's badge still reads. The current page is text, not a
 * link, and says so.
 */
function FamilyStrip({ project, className }: { project: WorkProject; className?: string }) {
  const members = projectFamily(project);
  if (!project.family || members.length < 2) return null;
  const familyName = FAMILY_NAMES[project.family];

  return (
    <nav aria-label={`The ${familyName} family`} className={cn("border-t border-border-subtle pt-5", className)}>
      <p className="text-meta text-foreground-quiet">The {familyName} family</p>
      <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
        {members.map((member) => {
          const icon = member.icon ? (
            <Image src={member.icon.src} alt="" width={40} height={40} aria-hidden="true" className="size-10 shrink-0 object-contain" />
          ) : null;
          return (
            <li key={member.slug}>
              {member.slug === project.slug ? (
                <span aria-current="page" className="flex items-center gap-2.5 text-body text-foreground">
                  {icon}
                  <span>{member.shortName ?? member.name}<span className="text-foreground-quiet"> · this page</span></span>
                </span>
              ) : (
                <Link href={member.href} className="focus-ring flex items-center gap-2.5 rounded-xs text-body text-foreground-muted transition-colors duration-(--duration-fast) hover:text-accent-hover">
                  {icon}
                  {member.shortName ?? member.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { FamilyStrip };
