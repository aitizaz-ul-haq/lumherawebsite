import HeadingAndSubheadingWithParas from "@/app/components/sharedcomponents/headingandsubheadingwithparas/headingandsubheadingwithparas";

export default function AboutValueSection({ valuesSection }) {
  return (
    <>
      {valuesSection && <HeadingAndSubheadingWithParas data={valuesSection} />}
    </>
  );
}
