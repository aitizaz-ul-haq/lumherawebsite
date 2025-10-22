import PageTemplate from "../components/sharedcomponents/pagetemplate/pagetemplate";

import Contactpagedata from "../data/contactpagedata/contactpagedata.json";

let headerdata = Contactpagedata.homepageheader;

export default function Contact() {
  return (
    <>
      <PageTemplate headerdata={headerdata} showImage={false} />
    </>
  );
}
