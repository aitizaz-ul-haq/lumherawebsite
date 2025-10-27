import Image from "next/image";

export default function QuoteSectionImage() {
  return (
    <Image
      src="/images/quote.png"
      alt="About Page Header Image"
      width={120}
      height={120}
      className="page-header-image"
      priority
    />
  );
}
