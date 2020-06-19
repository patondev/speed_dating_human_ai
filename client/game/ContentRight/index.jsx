import React from "react";

import HeaderRight from "./HeaderRight";
import BodyRight from "./BodyRight";

export default class Round extends React.Component {
  render() {
    return (
      <>
        <HeaderRight />
        <BodyRight {...this.props} />
      </>
    );
  }
}
