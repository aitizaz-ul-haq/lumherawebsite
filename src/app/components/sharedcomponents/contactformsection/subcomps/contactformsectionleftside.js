import ContactFormBuisnessInfoSection from "./contactformbuisnessinfosection";
import ContactFormBuisnessInfoListContainer from "./contactformbuisnessinfolistcontainer";
import ContactFormBuisnessInfoMapContainer from "./contactformBuisnessinfomapcontainer";

export default function ContactFormSectionLeftSide({
  contactforminfo,
  infolines,
}) {
  return (
    <div className="contactform-section-leftside">
      <ContactFormBuisnessInfoSection contactforminfo={contactforminfo} />
      <ContactFormBuisnessInfoListContainer infolines={infolines} />
      <ContactFormBuisnessInfoMapContainer contactforminfo={contactforminfo} />
    </div>
  );
}
