import Navbar from "./Navbar/Navbar";
import { Theme } from "@carbon/react";

export default function layout({ children }) {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  );
}

// it covers leftNav and rightPanel at the same time though i named it Navbar LOL!