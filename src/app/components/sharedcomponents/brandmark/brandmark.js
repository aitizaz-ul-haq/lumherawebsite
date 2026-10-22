import { Fragment } from "react";

const BRAND_REGEX = /(Lumhera(?:’s|'s)?)/g;
const BRAND_EXACT = /^Lumhera(’s|'s)?$/;

export function BrandMark() {
  return (
    <sup className="brand-mark" aria-label="registered trademark">
      ®
    </sup>
  );
}

// Splits text around "Lumhera" and appends the ® mark right after the brand name.
export function withBrandMark(text) {
  if (typeof text !== "string" || !text.includes("Lumhera")) return text;

  const parts = text.split(BRAND_REGEX).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(BRAND_EXACT);
        if (!match) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Fragment key={i}>
            Lumhera
            <BrandMark />
            {match[1] || ""}
          </Fragment>
        );
      })}
    </>
  );
}

// Recursively applies the ® mark to every string in a data object that mentions Lumhera.
export function brandifyData(value) {
  if (typeof value === "string") return withBrandMark(value);
  if (Array.isArray(value)) return value.map(brandifyData);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, brandifyData(v)])
    );
  }
  return value;
}
