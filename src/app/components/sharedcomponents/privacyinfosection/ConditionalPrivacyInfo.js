"use client";
import { usePathname } from "next/navigation";
import PrivacyInfoSection from "./privacyinfosection";
import config from "./privacyinfo.config.json";

export default function ConditionalPrivacyInfo() {
  const pathname = usePathname();

  const entry = config.entries.find((e) => {
    const targets = Array.isArray(e.paths) && e.paths.length > 0 ? e.paths : [e.path];
    return targets.some((p) => {
      const equals = e.matchType === "equals";
      return equals ? pathname === p : (pathname === p || pathname.startsWith(p + "/"));
    });
  });

  if (!entry) return null;

  return (
    <PrivacyInfoSection
      links={entry.links || []}
      details={entry.details || ""}
    />
  );
}
