import React from "react";
import PromoHeading from "./PromoHeading";
const data = {
  heading: "92% off ",
  callToAction: "everything must go",
};
function Promo(props) {
  return (
    <div>
      <PromoHeading
        heading={data.heading}
        callToAction={data.callToAction}
      ></PromoHeading>
      {props.message}
    </div>
  );
}

export default Promo;
