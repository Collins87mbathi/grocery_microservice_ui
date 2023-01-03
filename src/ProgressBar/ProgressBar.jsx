/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ProgressBar.css";
import { TiTick } from "react-icons/ti";

const ProgressBar = ({current,completeB}) => {
    const steps = ["Shopping Cart", "Checkout Details", "Order Complete"];
    const [currentStep, setCurrentStep] = useState(current);
    const [complete, setComplete] = useState(completeB);

  return (
    <>
      <div className="flex justify-between max-w-[1640px] mx-auto px-4 py-4">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item w-36 ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProgressBar