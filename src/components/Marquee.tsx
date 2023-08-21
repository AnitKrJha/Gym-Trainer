import Marquee from "react-fast-marquee";

type Props = { content?: string };

const Marquees = ({ content }: Props) => {
  return (
    <div>
      <Marquee
        gradient
        gradientWidth={100}
        gradientColor={[20, 20, 20]}
        className="bg-black border-t border-b shadow-sm shadow-primary border-primary"
      >
        <div className="flex items-center gap-2 py-4 bg-black  px-4 mx-8  md:mx-12 ">
          <h2 className="icon-or-number text-3xl md:text-5xl text-primary font-semibold">
            100+
          </h2>
          <div className="content text-3xl md:text-5xl text-muted-foreground font-medium">
            Awards
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 bg-black  px-4 mx-8 md:mx-12">
          <h2 className="icon-or-number text-3xl md:text-5xl text-primary font-semibold">
            500+
          </h2>
          <div className="content text-3xl md:text-5xl text-muted-foreground font-medium">
            Students
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 bg-black  px-4 mx-8 md:mx-12">
          <h2 className="icon-or-number text-3xl md:text-5xl text-primary font-semibold">
            200+
          </h2>
          <div className="content text-3xl md:text-5xl text-muted-foreground font-medium">
            Countries
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Marquees;
