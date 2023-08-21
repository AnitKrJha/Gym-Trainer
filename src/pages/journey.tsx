import ComingSoon from "@/components/ComingSoon";
import Marquees from "@/components/Marquee";
import { ArrowDownIcon, BellIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";
type Props = {};

const Journey = (props: Props) => {
  return (
    <div className="w-full grid h-screen place-items-center">
      <div className="h-32"></div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          contentArrowStyle={{
            borderRight: "7px solid  hsl(20.5 90.2% 48.2%)",
          }}
          date="1960"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">Birth</h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <p>Bhupender Dhawan was born in New Delhi in 1960.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1980 - 1990"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Powerlifting Journey
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <p>
            Bhupender Dhawan started his journey as a powerlifter, honing his
            skills and setting the foundation for his career.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Leadership Studies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Delhi
          </h4>
          <p>
            Bhupender pursued a degree in Leadership Studies, laying the
            foundation for his coaching career.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1995 - 2000"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">Coaching Success</h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <p>
            Bhupender Dhawan achieved coaching success, guiding athletes to
            victory and recognition.
          </p>
          <div>
            <Image
              src="https://unsplash.it/400/180"
              alt="Coaching Success"
              width={500}
              height={250}
              className="w-full h-40 object-cover object-center"
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1995 - 2000"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">Coaching Success</h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <p>
            Bhupender Dhawan achieved coaching success, guiding athletes to
            victory and recognition.
          </p>
        </VerticalTimelineElement>
        {/* Add more timeline elements as needed */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Leadership Studies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            University of Delhi
          </h4>
          <p>
            Bhupender pursued a degree in Leadership Studies, laying the
            foundation for his coaching career.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1995 - 2000"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">Coaching Success</h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <p>
            Bhupender Dhawan achieved coaching success, guiding athletes to
            victory and recognition.
          </p>
          <div>
            <Image
              src="https://unsplash.it/400/180"
              alt="Coaching Success"
              width={500}
              height={250}
              className="w-full h-40 object-cover object-center"
            />
          </div>
        </VerticalTimelineElement>{" "}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            National Recognition
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Sports Awards</h4>
          <p>
            Bhupender Dhawan received national recognition for his outstanding
            contributions to sports coaching.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1995 - 2000"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">Coaching Success</h3>
          <h4 className="vertical-timeline-element-subtitle">
            New Delhi, India
          </h4>
          <p>
            Bhupender Dhawan achieved coaching success, guiding athletes to
            victory and recognition.
          </p>
          <Image
            src="https://unsplash.it/500/225"
            alt="Coaching Success"
            width={500}
            height={250}
            className="w-full h-40 object-cover object-center"
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2020"
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mentorship Programs
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            All India Powerlifting Association
          </h4>
          <p>
            Bhupender initiated mentorship programs to nurture young talent and
            empower future powerlifters.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "hsl(20.5 90.2% 48.2%)", color: "#fff" }}
          icon={<SunIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
