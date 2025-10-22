import FooterUpperSubSectionOne from "./footeruppersubsectionone";
import FooterUpperSubsectionTwo from "./footeruppersubsectiontwo";
import FooterUpperSubSectionThree from "./footeruppersubsectionthree";
import FooterUpperSubSectionFour from "./footeruppersubsectionfour";

export default function FooterUpperSection() {
  return (
    <div className="footer-uppersection">
      <FooterUpperSubSectionOne />
      <FooterUpperSubsectionTwo />
      {/* <FooterUpperSubSectionThree />
      <FooterUpperSubSectionFour /> */}
    </div>
  );
}
