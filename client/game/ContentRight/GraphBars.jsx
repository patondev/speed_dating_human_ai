import React from "react";
import { BAR_COLORS } from "../../constants/colors";

export default class BodyRight extends React.Component {
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
        <div className="top-label" style={{ right: "140px" }}>
          Improved Chances
        </div>
        {Array(numbefOfLines)
          .fill(null)
          .map((el, i) => {
            currentLabel += step;
            return <Line key={i} left={(420 / numbefOfLines) * i} label={currentLabel} />;
          })}
        <div className="bottom-label" style={{ right: "250px" }}>
          Hurt Chances
        </div>
      </>
    );
  };

  renderBarTextContent = (data) => {
    return (
      <div className="bar-text-content">
        {data.map((d) => (
          <span key={d.name} className="text">
            {d.name}
          </span>
        ))}
      </div>
    );
  };

  renderBars = (data) => {
    const total = data.reduce((cur, next) => {
      return cur + next.value;
    }, 0);

    const Bar = ({ left, width }) => {
      return <div className="bar" style={{ left: `${left}px`, width: `${width}px` }}></div>;
    };

    return data.map((d) => {
      const percent = (d.value / total) * 100;
      return <Bar key={d.name} left={d.left} width={d.width} />;
    });
  };

  render() {
    console.log("props ", this.props);
    const data = [
      {
        name: "Woman's Attractiveness ",
        value: 106330074359,
        left: 170,
        width: 120,
      },
      {
        name: "Man's Attractiveness ",
        value: 32402945322,
        left: 170,
        width: 100,
      },
      {
        name: "Man’s shared interest",
        value: 11864383092,
        left: 170,
        width: 190,
      },
      {
        name: "Man’s Fun",
        value: 9612908814,
        left: 170,
        width: 80,
      },
      {
        name: "Man’s Age",
        value: 4644155391,
        left: 170,
        width: 20,
      },
      {
        name: "Man’s Intelegence",
        value: 4084424747,
        left: 40,
        width: 130,
      },
      {
        name: "Man’s Ambition",
        value: 4084424747,
        left: 60,
        width: 110,
      },
      {
        name: "Interst Correlation",
        value: 4084424747,
        left: 80,
        width: 90,
      },
      {
        name: "Woman’s Correlation",
        value: 4084424747,
        left: 100,
        width: 70,
      },
      {
        name: "Man’s Attractiveness",
        value: 4084424747,
        left: 120,
        width: 50,
      },
    ];

    return (
      <div className="graph-wrapper">
        <div className="graph">
          {this.renderBarTextContent(data)}
          <div className="bar-lines-container">
            {this.renderBars(data)}
            {this.renderLines({ numbefOfLines: 10, step: 5, maxValue: 25, minValue: -25 })}
          </div>
        </div>
      </div>
    );

    // return (
    //   <div className="bars-prediction">{predictions.map((p) => this.renderBar(maxValue, p))}</div>
    // );
  }
}
