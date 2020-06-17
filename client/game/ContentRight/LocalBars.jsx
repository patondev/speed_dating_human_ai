import React from "react";
import { BAR_COLORS } from "../../constants/colors";
import modelLocalJson from "../../model_local.json";

export default class LocalBars extends React.Component {
  renderLines = ({ numbefOfLines, minValue, maxValue, step }) => {
    const Line = ({ left, label }) => {
      let leftLabel = label > -10 ? 177 : 170;
      return (
        <>
          <div className="line" style={{ left: `${left + 180}px` }}></div>
          <span className="line-label" style={{ left: `${left + leftLabel}px` }}>
            {label}
          </span>
        </>
      );
    };

    let currentLabel = minValue;

    return (
      <>
        <div className="top-label" style={{ right: "120px" }}>
          Improved Chances
        </div>
        {Array(numbefOfLines)
          .fill(null)
          .map((el, i) => {
            if (i !== 0) {
              currentLabel += step;
            }
            return <Line key={i} left={(420 / numbefOfLines) * i} label={currentLabel} />;
          })}
        <div className="bottom-label" style={{ right: "230px" }}>
          Hurt Chances
        </div>
      </>
    );
  };

  renderBarTextContent = (data) => {
    return (
      <div className="bar-text-content">
        {data.map((d, i) => (
          <span key={i} className="text">
            {d.condition}
          </span>
        ))}
      </div>
    );
  };

  renderBars = (data) => {
    const total = data.reduce((cur, next) => {
      return cur + next.value;
    }, 0);

    const Bar = ({ isPositive, width }) => {
      const backgroundColor = isPositive
        ? BAR_COLORS[`GREEN_${Math.ceil(width / 40)}`]
        : BAR_COLORS[`RED_${Math.ceil(width / 40)}`];

      let styleObj = { width: `${width}px`, backgroundColor };

      styleObj = isPositive
        ? { ...styleObj, left: "190px" }
        : { ...styleObj, left: `${190 - width}px` };
      return <div className="bar" style={styleObj}></div>;
    };

    return data.map(({ value, condition }) => {
      const isPositive = value > 0;
      const width = 8 * Math.abs(value);
      return <Bar key={condition} isPositive={isPositive} width={width} />;
    });
  };

  render() {
    const { round } = this.props;
    const roundType = round.get("practice") ? "practice" : "exp";
    let currentModel = modelLocalJson.filter((m) => m.type === roundType);
    currentModel = roundType === "practice" ? currentModel[0] : currentModel[round.index - 1];
    return (
      <div className="graph-wrapper">
        <div className="graph">
          {this.renderBarTextContent(currentModel.data)}
          <div className="bar-lines-container">
            {this.renderBars(currentModel.data)}
            {this.renderLines({ numbefOfLines: 11, step: 5, maxValue: 25, minValue: -25 })}
          </div>
        </div>
      </div>
    );
  }
}
