import React from "react";

export default class RelativeBars extends React.Component {
  renderBar = (maxValue, { name, value, isWoman }) => {
    return (
      <div key={name} className="relative-bar-container">
        <div
          className={`bar ${!isWoman ? "man" : "woman"}`}
          style={{ width: `${(value / maxValue) * 200}px` }}
        ></div>
        <div className="label">
          {name} {value}%
        </div>
      </div>
    );
  };

  render() {
    const maxValue = 17;
    const predictions = [
      { name: "Woman's Attractiveness", value: 17, isWoman: true },
      { name: "Man's Attractiveness", value: 17, isWoman: false },
      { name: "Man's Fun", value: 9, isWoman: false },
      { name: "Woman's Race", value: 7, isWoman: true },
      { name: "Man's Shared Interests", value: 7, isWoman: false },
      { name: "Woman's Shared Interests", value: 7, isWoman: true },
      { name: "Man's Age", value: 5, isWoman: false },
      { name: "Woman's Age", value: 4, isWoman: true },
      { name: "Man's Ambition", value: 3, isWoman: false },
      { name: "Woman's Ambition", value: 3, isWoman: true },
      { name: "Man's Race", value: 2, isWoman: false },
      { name: "Man's Intelligence", value: 2, isWoman: false },
      { name: "Woman's Intelligence", value: 1, isWoman: true },
      { name: "Woman's Sincerity", value: 1, isWoman: true },
    ];

    return (
      <div className="bars-prediction">{predictions.map((p) => this.renderBar(maxValue, p))}</div>
    );
  }
}
