import { VerticalTimeline } from "react-vertical-timeline-component";
import journeyData from "@/data/journeyData.json";
import JourneyElement from "@/components/JourneyComponents/JourneyElement";
type Props = {};

const Journey = (props: Props) => {
  return (
    <div className="w-full grid h-screen place-items-center">
      <div className="h-32"></div>
      <VerticalTimeline>
        {journeyData.map((stop) => {
          return <JourneyElement {...stop} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
