import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";

export default function RightPartAccordianSection({partOne}) {
    return(
         <div className="linesection-partone-accordians">
        <Accordion.Root type="single" collapsible className="acc">
          {partOne.accordions?.map((item, i) => (
            <Accordion.Item
              value={`item-${i + 1}`}
              className="acc__item"
              key={i}
            >
              <Accordion.Header className="acc__header">
                <Accordion.Trigger className="acc__trigger font-inter">
                  {item.title}
                  <span className="acc__icon" aria-hidden>
                    <Image
                      src="/images/plus-button.png"
                      alt="About Page Header Image"
                      width={18}
                      height={18}
                      className="page-header-image"
                      priority
                    />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="acc__content font-inter">
                {item.content}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    );
}