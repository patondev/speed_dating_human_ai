import React from "react";

export default class BodyRight extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return <section className="content-right">Right content</section>;
  }
}
