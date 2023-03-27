import React from "react";
import ReactDOM from "react-dom";
import StepRangeSlider from "react-step-range-slider";


import "./Form.css";

const Form = () => {

  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const stepsRanges = steps.map((step, index) => {
  const isLast = steps.length === index + 1;

    if (isLast) {
      return {
        value: step
      };
    }
    return {
      value: step,
      step: steps[index + 1] - step
    };
  });
  
  console.log(stepsRanges);
  const range = [
    {
      value: 1,
      step: 1
    },
    {
      value: 2,
      step: 1
    },
    {
      value: 3,
      step: 1
    },
    {
      value: 4,
      step: 1
    },
    {
      value: 5,
      step: 1
    },
    {
      value: 6,
      step: 1
    },
    {
      value: 7,
      step: 1
    },
    {
      value: 8,
      step: 1
    },
    {
      value: 9,
      step: 1
    },
    {
      value: 10
    }
  ];

  const [value, setValue] = React.useState(range[0].value);

  return (
    <div className="container">
      <div className="cuestion">
        <p>Respeta los usos y aplicacion profesionales de los contedios tematica.</p>
      </div>
      <div className="slider">
        <StepRangeSlider
        value={value}
        range={range}
        onChange={value => setValue(value)}
      />
      </div>
    </div>
  );
}

export default Form
