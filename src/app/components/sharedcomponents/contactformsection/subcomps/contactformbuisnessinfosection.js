export default function ContactFormBuisnessInfoSection({contactforminfo}) {
  return (
    <div className="contactform-section-buisnessinfo-section">
      <h4 className="contactform-section-buisnessinfo-title font-playfair">
        {contactforminfo.leftsideheadinone}
      </h4>
      <h5 className="contactform-section-buisnessinfo-subtitle font-playfair">
        {contactforminfo.leftsidesubheadinone}
      </h5>
    </div>
  );
}
