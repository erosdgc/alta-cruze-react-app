import React from "react";
import { useState } from "react";

const MinorsQuestion = () => {
  // If children traveling
  const [minorTraveler, setMinorTraveler] = useState("");
  const handleMinorTraveler = (e) => setMinorTraveler(e.target.value);

  // If there's no children traveling
  const [minorTravelerNeg, setMinorTravelerNeg] = useState("");
  const handleMinorTravelerNeg = (e) => setMinorTravelerNeg(e.target.value);

  return (
    <>
      <blockquote className="blockquote fs-6 fs-md-5">
        Will you be traveling with minors under 12?
      </blockquote>
      <figcaption className="blockquote-footer">
        Parents/guardians must ensure that the child does not roam freely on the
        ship.
      </figcaption>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="minorTravelerRadio"
          id="minorTraveler"
          value="minorTraveler"
          onChange={handleMinorTraveler}
        />
        <label className="form-check-label" htmlFor="minorTraveler">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="minorTravelerRadio"
          id="minorTravelerNeg"
          value="minorTravelerNeg"
          onChange={handleMinorTravelerNeg}
          defaultChecked
        />
        <label className="form-check-label" htmlFor="minorTravelerNeg">
          No
        </label>
      </div>
    </>
  );
};

export default MinorsQuestion;
