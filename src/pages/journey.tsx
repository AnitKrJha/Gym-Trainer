import { VerticalTimeline } from "react-vertical-timeline-component";
import journeyData from "@/data/journeyData.json";
import JourneyElement from "@/components/JourneyComponents/JourneyElement";
type Props = {};

const Journey = (props: Props) => {
  return (
    <div className="w-full grid  place-items-center">
      <div className="h-32"></div>
      <h1 className="text-3xl font-semibold md:text-5xl mb-4">
        {" "}
        <span className="text-primary ">Bhupender's</span> Life
      </h1>
      <VerticalTimeline lineColor="hsl(20,98%,50%)">
        {journeyData.map((stop) => {
          return <JourneyElement {...stop} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
