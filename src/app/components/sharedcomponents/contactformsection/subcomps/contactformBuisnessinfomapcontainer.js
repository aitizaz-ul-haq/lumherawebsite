export default function ContactFormBuisnessInfoMapContainer({
  contactforminfo,
}) {
  return (
    <div className="contactform-section-buisnessinfo-map-container">
      <iframe
        title="google-maps"
        className="map-iframe"
        src={contactforminfo.leftsidemaplink}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
