import React from "react";
const DynamicRendering = () => {
  const arr = ["ReactJS", "AngularJS", "VueJS", "NextJS", "JavaScript"];
  return (
    <ul>
      {arr.map((element) => (
        <li>{element}</li>
      ))}
    </ul>
  );
};
export default DynamicRendering;
