export const ESTHER_INVESTOR_URL = "https://www.estherinvestor.com/";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61595564108096",
  instagram: "https://www.instagram.com/estherthe_investor?mdxt=MW1vYmdrMmVmcG44aA==",
  tiktok: "https://www.tiktok.com/@esther.the.invest?_r=1&_t=ZN-9AlSEYJhkoM",
};

// Opens absolute URLs in a new tab; internal links are left untouched.
export function externalLinkProps(href = "") {
  return /^https?:\/\//i.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
