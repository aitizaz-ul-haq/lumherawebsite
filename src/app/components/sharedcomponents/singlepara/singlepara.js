// components/sharedcomponents/singlepara/singlepara.jsx
export default function SinglePara({ text = "" }) {
  if (!text) return null;
  return (
    <div className="heading-and-paras-container">
      <p className="heading-and-paras-paragraph font-inter">{text}</p>
    </div>
  );
}
