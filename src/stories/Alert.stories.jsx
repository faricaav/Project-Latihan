import React from "react";
import Alert from "./Alert";
export default { title: "Example/Alert", component: Alert };
export const Info = () => (
  <Alert variant="info">
    {" "}
         {" "}
    <p>
      {" "}
              This is an example of an info Alert to display important
      information. {" "}
    </p>{" "}
       {" "}
  </Alert>
);
export const Danger = () => (
  <Alert variant="danger">
    {" "}
          <p>This is an example of a danger Alert to display warnings.</p>   {" "}
  </Alert>
);
export const Congrats = () => (
  <Alert variant="congrats">
    {" "}
          <p> This is an example a congrats Alert to celebrate a win!</p>    {" "}
  </Alert>
);
export const Documentation = () => (
  <Alert variant="documentation">
    {" "}
         {" "}
    <p>
      {" "}
      This is an example a documentation Alert to highlight relevant reading
      materials and documentation.{" "}
    </p>{" "}
       {" "}
  </Alert>
);