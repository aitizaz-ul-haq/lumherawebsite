export default function HandLSubstatementSection({ substatement }) {
  return (
    <>
      {substatement ? (
        <p className="heading-and-subheading-subheading font-kaisei">
          {substatement}
        </p>
      ) : null}
    </>
  );
}
