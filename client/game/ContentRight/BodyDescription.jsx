import React from "react";

export default class BodyDescription extends React.Component {
  render() {
    const { isRelative } = this.props;
    const description = !isRelative ? (
      <p>
        It determined that some factors improved this couple’s chances of wanting a second date,
        while others hurt their chances. The factors and how much they helped/hurt are{" "}
        <em>different for different couples.</em>
      </p>
    ) : (
      <p>
        It determined that some factors are more important than others in whether a given couple
        wants a second date. This relative importance of factors is{" "}
        <em>not specific to any one couple.</em>
      </p>
    );
    return (
      <div className="description">
        <h2>How did the AI System make this prediction?</h2>
        {description}
      </div>
    );
  }
}
