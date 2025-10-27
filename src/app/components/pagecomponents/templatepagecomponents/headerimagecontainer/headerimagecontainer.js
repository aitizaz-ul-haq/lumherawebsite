import ContactTopLine from "@/app/components/sharedcomponents/contacttopline/contacttopline";
import ContactForm from "../../contactpagecomponents/contactform";
import CoinSection from "./subcomps/headercoinsection";
import "./styles/headerimagecontainer.css"; // ⬅️ add this line

export default function HeaderImageContainer({ showImage }) {
  return (
    <div className="page-header-image-container">
      {showImage ? (
        <CoinSection />
      ) : (
        <>
          <ContactTopLine />
          <ContactForm />
        </>
      )}
    </div>
  );
}
