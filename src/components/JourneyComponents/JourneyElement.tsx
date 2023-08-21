import { SunIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type Props = {
  date: string;
  description: string;
  title: string;
  subtitle: string;
  imageSrc: string;
};

const JourneyElement = (props: Props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="1980 - 1990"
      iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
      icon={<SunIcon />}
    >
      <h3 className="vertical-timeline-element-title">{props.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{props.subtitle}</h4>
      <p>{props.description}</p>
      {props.imageSrc && (
        <div>
          <Image
            src={props.imageSrc}
            alt="Coaching Success"
            width={500}
            height={250}
            className="w-full h-40 object-cover object-center"
          />
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default JourneyElement;
