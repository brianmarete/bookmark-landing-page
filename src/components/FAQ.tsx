import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <>
      <div className="flex flex-col items-center md:max-w-xl md:mx-auto mb-32">
        <h2 className="text-3xl font-medium my-3">
          Frequently Asked Questions
        </h2>
        <p className="text-grayish-blue text-lg max-w-xl text-center my-3">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        <div className="my-8 w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:text-soft-red hover:no-underline">
                What is Bookmark?
              </AccordionTrigger>
              <AccordionContent>
                Bookmark is an internet bookmarking and bookmark manager.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:text-soft-red hover:no-underline">
                How can I request a new browser?
              </AccordionTrigger>
              <AccordionContent>
                You can request a new browser by contacting us.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:text-soft-red hover:no-underline">
                Is there a mobile app?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Web browsers are supported on iOS and Android.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:text-soft-red hover:no-underline">
                What about other Chromium browsers?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It supports the latest version of Chromium.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <button className="bg-soft-blue text-white px-8 py-3 rounded text-sm shadow-md mx-auto">
          More Info
        </button>
      </div>
    </>
  );
};

export default FAQ;
