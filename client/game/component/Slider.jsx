/**
 * Spare slider component
 * To make this reuse for other component
 */
import React from "react";
import Slider from "meteor/empirica:slider";

export default ({ value, onSlideChange }) => {
  handleChange = (num) => {
    onSlideChange(num);
  };

  return (
    <div className="slider">
      <div className="slider-component slider-component-label">
        <div className="slider-percentage-row">
          <div className="slider-percentage-label slider-label">
            <span>0%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>25%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>50%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>75%</span>
          </div>
          <div className="slider-percentage-label slider-label">
            <span>100%</span>
          </div>
        </div>
      </div>
      <div className="slider-component">
        <Slider
          className="task-response-slider"
          min={0}
          max={1}
          stepSize={0.01}
          labelStepSize={0.25}
          onChange={handleChange}
          value={value}
          labelRenderer={(number) => {
            return number.toFixed(2).toString();
          }}
        />
      </div>
      <div className="slider-component slider-component-text">
        <div className="slider-text-row">
          <div className="slider-text-label slider-label">
            <span>
              Very unlikely
              <br />
              to date again
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Unlikely to <br />
              date again
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Neither likely
              <br />
              nor unlikely
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Likely to
              <br />
              date again
            </span>
          </div>
          <div className="slider-text-label slider-label">
            <span>
              Very likely
              <br />
              to date again
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
