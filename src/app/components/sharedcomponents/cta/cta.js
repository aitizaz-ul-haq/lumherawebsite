// components/sharedcomponents/cta/cta.jsx
export default function Cta({ text = "", buttonText = "" }) {
  return (
    <div className="cta-container">
      <p className="heading-and-paras-paragraph font-inter">{text}</p>
      <button className="cta-button font-inter">{buttonText}</button>
    </div>
  );
}
