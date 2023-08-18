import ComingSoon from "@/components/ComingSoon";
import React from "react";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div className="w-full grid h-screen place-items-center">
      <div>
        Shop Page
        <ComingSoon />
      </div>
    </div>
  );
};

export default Shop;
