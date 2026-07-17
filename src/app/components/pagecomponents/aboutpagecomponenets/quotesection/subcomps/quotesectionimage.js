import Image from "next/image";

export default function QuoteSectionImage() {
  return (
    <Image
      src="/images/quote.png"
      alt=""
      width={120}
      height={120}
      className="page-header-image"
      priority
    />
  );
}
