import React from "react";
import { Spinner } from "ui-kit";

export default { title: "Spinner" };

export const stories = () => {
  return (
    <div>
      <div
        className="story"
        style={{
          position: "relative",
          padding: "15px",
          width: "300px",
          height: "300px",
        }}
      >
        <label>Spinner</label>
        <Spinner />
      </div>
    </div>
  );
};
