import Marquee from "react-fast-marquee";

type Props = { content?: string };

const Marquees = ({ content }: Props) => {
  return (
    <div>
      <Marquee>
        <div className="py-5 text-3xl">
          {content ? content : "Work in progress 👍👍"}
        </div>
      </Marquee>
    </div>
  );
};

export default Marquees;
