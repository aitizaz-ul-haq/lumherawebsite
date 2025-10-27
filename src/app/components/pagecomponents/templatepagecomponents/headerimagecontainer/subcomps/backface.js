import Image from "next/image";

export default function BackFace() {
  return (
    <div className="coin__face coin__face--back">
      <Image
        src="/images/page-coin.png"
        alt="Coin back"
        width={160}
        height={160}
        className="page-header-image"
        priority
      />
    </div>
  );
}
