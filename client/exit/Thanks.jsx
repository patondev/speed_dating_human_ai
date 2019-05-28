import React from "react";

import { NonIdealState } from "@blueprintjs/core";

export default class Thanks extends React.Component {
  static stepName = "Thanks";
  render() {
    const { player, game } = this.props;
    const submissionCode = "Submission code: " + player._id;
    return (
      <NonIdealState
        icon={"thumbs-up"}
        title={submissionCode}
        description="Thank you for participating!"
        //action={"what is an actions?"}
      />
    );
  }
}
