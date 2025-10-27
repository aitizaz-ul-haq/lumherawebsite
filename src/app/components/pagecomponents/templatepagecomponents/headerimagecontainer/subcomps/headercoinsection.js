import FrontFace from "./frontface";
import BackFace from "./backface";

export default function CoinSection() {
  return (
    <div className="coin" aria-hidden="true">
      <div className="coin__inner">
        {/* front face */}
        <FrontFace />
        {/* back face (same image, rotated 180° so it reads correctly on flip) */}
        <BackFace />
      </div>
    </div>
  );
}
