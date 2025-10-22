import ContactTopLine from "@/app/components/sharedcomponents/contacttopline/contacttopline";
import ContactForm from "../../contactpagecomponents/contactform";
import Image from "next/image";

export default function HeaderImageContainer({ showImage }) {
  return (
    <div className="page-header-image-container">
      {showImage ? (
        <Image
          src="/images/page-coin.png"
          alt="About Page Header Image"
          width={160}
          height={160}
          className="page-header-image"
          priority
        />
      ) : (
        <>
          <ContactTopLine />
          <ContactForm />
        </>
      )}
    </div>
  );
}
