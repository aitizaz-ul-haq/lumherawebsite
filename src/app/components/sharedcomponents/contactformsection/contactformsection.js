import "./styles/contactformsection.css";

import ContactFormSectionLeftSide from "./subcomps/contactformsectionleftside";
import ContactFormSectionRightSide from "./subcomps/contactformsectionrightside";

export default function ContactFormSection({ contactforminfo }) {
  let infolines = contactforminfo.ourproductsgrid;
  let formid = contactforminfo.contactformid;

  console.log(formid);

  return (
    <>
      <div className="contactform-section-container" id={formid}>
        <ContactFormSectionLeftSide
          contactforminfo={contactforminfo}
          infolines={infolines}
        />
        <ContactFormSectionRightSide />
      </div>
    </>
  );
}
