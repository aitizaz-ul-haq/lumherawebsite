import Image from "next/image";

export default function ContactFormBuisnessInfoListContainer({ infolines }) {
  return (
    <div className="contactform-section-buisnessinfo-list-container">
      {infolines.map((item) => (
        <div key={item.id} className="contactform-section-buisnessinfo-line">
          <Image
            src={item.imageLink}
            width={parseInt(item.width)}
            height={parseInt(item.height)}
            alt={item.alt}
            title={item.hovertitle}
          />
          <p className="contactform-section-buisnessinfo-description">
            {item.descriptionline}
          </p>
        </div>
      ))}
    </div>
  );
}
