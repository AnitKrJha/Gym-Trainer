import TestimonialCard from "./TestimonialCard";
import "swiper/css/autoplay";

type Props = {};

const TestimonialCarousel = (props: Props) => {
  return (
    <div className="px-2">
      <div className="testimonials overflow-auto max-h-[100dvh] snap-x testimonials123  flex-col md:flex-row  max-w-5xl flex  w-fit mb-4  -mt-12 md:z-[1] bg-background shadow mx-auto">
        <TestimonialCard
          title="Ankit Kumar"
          subtitle="Geto"
          comment="fskjfkldsjfkls flkjsflk flkdsjklf sklfklfhif sifhslf lisfjkdslfkjhrierrjf sfsdhflk sflkru flksril dflkshfl dsf fsdf"
        />
        <TestimonialCard
          title="Ankit Kumar"
          subtitle="Geto"
          comment="fskjfkldsjfkls flkjsflk flkdsjklf sklfklfhif sifhslf lisfjkdslfkjhrierrjf sfsdhflk sflkru flksril dflkshfl dsf fsdf"
        />
        <TestimonialCard
          title="Ankit Kumar"
          subtitle="Geto"
          comment="fskjfkldsjfkls flkjsflk flkdsjklf sklfklfhif sifhslf lisfjkdslfkjhrierrjf sfsdhflk sflkru flksril dflkshfl dsf fsdf"
        />
        <TestimonialCard
          title="Ankit Kumar"
          subtitle="Geto"
          comment="fskjfkldsjfkls flkjsflk flkdsjklf sklfklfhif sifhslf lisfjkdslfkjhrierrjf sfsdhflk sflkru flksril dflkshfl dsf fsdf"
        />
        <TestimonialCard
          title="Ankit Kumar"
          subtitle="Geto"
          comment="fskjfkldsjfkls flkjsflk flkdsjklf sklfklfhif sifhslf lisfjkdslfkjhrierrjf sfsdhflk sflkru flksril dflkshfl dsf fsdf"
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
