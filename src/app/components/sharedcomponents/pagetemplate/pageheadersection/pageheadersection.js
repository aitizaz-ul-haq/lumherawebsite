import TinyTitle from "@/app/components/pagecomponents/templatepagecomponents/tinytitle/tinytitle";
import LargeHeading from "@/app/components/pagecomponents/templatepagecomponents/largeheading/largeheading";
import HeaderImageContainer from "@/app/components/pagecomponents/templatepagecomponents/headerimagecontainer/headerimagecontainer";

export default function PageHeaderSection({
  tinytitle,
  largeheading,
  showImage = true,
}) {
  return (
    <div className="page-header-section">
      <TinyTitle tinytitle={tinytitle} />
      <LargeHeading largeheading={largeheading} />
      <HeaderImageContainer showImage={showImage} />
    </div>
  );
}
