import Marquee from "react-fast-marquee";

type Props = { content?: string };

const Marquees = ({ content }: Props) => {
  return (
    <div>
      <Marquee
        gradient
        gradientWidth={50}
        gradientColor={[50, 20, 20]}
        className="bg-white border-t border-b shadow-sm shadow-primary border-primary my-4"
      >
        <div className="flex items-center gap-2 py-4 bg-transparent  px-4 mx-8  md:mx-12 ">
          <h2 className="icon-or-number text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
            50+
          </h2>
          <div className="content text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium">
            Awards
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 bg-transparent  px-4 mx-8 md:mx-12">
          <h2 className="icon-or-number text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
            500+
          </h2>
          <div className="content text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium">
            Students
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 bg-transparent  px-4 mx-8 md:mx-12">
          <h2 className="icon-or-number text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
            10+
          </h2>
          <div className="content text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium">
            Countries
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Marquees;
