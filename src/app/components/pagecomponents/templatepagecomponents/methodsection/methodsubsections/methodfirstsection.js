import HeadingAndParas from "@/app/components/sharedcomponents/headingandparas/headingandparas";

export default function MethodFirstSection({ methodFirstSection }) {
  return (
    <>
      {methodFirstSection && (
        <HeadingAndParas
          heading=""
          paragraphs={methodFirstSection.paragraphs}
        />
      )}
    </>
  );
}
