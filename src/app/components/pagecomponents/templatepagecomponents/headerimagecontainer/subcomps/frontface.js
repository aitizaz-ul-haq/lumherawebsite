import Image from "next/image";

export default function FrontFace() {
  return (
    <div className="coin__face coin__face--front">
      <Image
        src="/images/page-coin.png"
        alt="Coin front"
        width={160}
        height={160}
        className="page-header-image"
        priority
      />
    </div>
  );
}
