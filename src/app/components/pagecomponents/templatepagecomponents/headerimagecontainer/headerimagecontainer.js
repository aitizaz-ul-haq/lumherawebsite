import ContactTopLine from "@/app/components/sharedcomponents/contacttopline/contacttopline";
import ContactForm from "../../contactpagecomponents/contactform";
import Image from "next/image";
import "./styles/headerimagecontainer.css"; // ⬅️ add this line

export default function HeaderImageContainer({ showImage }) {
  return (
    <div className="page-header-image-container">
      {showImage ? (
        <div className="coin" aria-hidden="true">
          <div className="coin__inner">
            {/* front face */}
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
            {/* back face (same image, rotated 180° so it reads correctly on flip) */}
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
          </div>
        </div>
      ) : (
        <>
          <ContactTopLine />
          <ContactForm />
        </>
      )}
    </div>
  );
}
