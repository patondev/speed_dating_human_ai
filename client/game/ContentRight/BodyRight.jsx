import React from "react";

import SlidersPrediction from "../component/Slider";
import BodyDescription from "./BodyDescription";
import RelativeBars from "./RelativeBars";
import HurtImprovedBars from "./GraphBars";

export default class BodyRight extends React.Component {
  render() {
    const isRelative = false;
    return (
      <section className="content-right">
        <SlidersPrediction {...this.props} />
        <BodyDescription isRelative={isRelative} />
        {isRelative ? <RelativeBars {...this.props} /> : <HurtImprovedBars {...this.props} />}
      </section>
    );
  }
}
